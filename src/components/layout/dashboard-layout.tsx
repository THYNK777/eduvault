'use client';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from './sidebar';
import AppHeader from './header';
import { useTheme } from 'next-themes';
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { mockUsers } from '@/lib/mock-data';

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

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { setTheme } = useTheme();
  const currentUser = mockUsers[0];
  const [initialThemeFetched, setInitialThemeFetched] = useState(false);

  useEffect(() => {
    const fetchTheme = async () => {
      if (currentUser && !initialThemeFetched) {
        const userDocRef = doc(db, 'users', currentUser.id);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists() && userDoc.data().currentTheme) {
          setTheme(userDoc.data().currentTheme);
        }
        setInitialThemeFetched(true);
      }
    };
    fetchTheme();
  }, [currentUser, setTheme, initialThemeFetched]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 !min-h-screen">
          <AppHeader />
          <main className="flex-1 p-4 md:p-8 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
