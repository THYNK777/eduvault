"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { mockUsers } from "@/lib/mock-data";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
const db = getFirestore(app);
const availableThemes = ["ravenclaw", "gryffindor", "slytherin", "hufflepuff"];

export default function ThemeSwitcher() {
  const { setTheme: setCurrentTheme } = useTheme();
  const currentUser = mockUsers[0];

  const handleThemeChange = async (newTheme: string) => {
    setCurrentTheme(newTheme);
    if (currentUser) {
      const userDocRef = doc(db, "users", currentUser.id);
      try {
        await setDoc(
          userDocRef,
          {
            currentTheme: newTheme,
            availableThemes: availableThemes,
          },
          { merge: true }
        );
      } catch (error) {
        console.error("Error saving theme to Firestore:", error);
      }
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleThemeChange("ravenclaw")}>
                Ravenclaw
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange("gryffindor")}>
                Gryffindor
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange("slytherin")}>
                Slytherin
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange("hufflepuff")}>
                Hufflepuff
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs text-center p-3">
          <p>
            Aha, a curious wizard! The houses follow a destined path. Begin your journey in the wise halls of Ravenclaw, then venture forth to Gryffindor, Slytherin, and Hufflepuff in their turn.
            <br />
            <strong className="text-lg block mt-2 text-accent">To experience the full magic of EduVault, you must return to Ravenclaw—simply refresh your browser!</strong>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}