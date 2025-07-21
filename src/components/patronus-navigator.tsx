'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from 'firebase/firestore';
import { X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

// --- Firebase Configuration ---
// IMPORTANT: Add your Firebase config details to your .env.local file
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

// --- Patronus Icon Component ---
const PatronusIcon = () => (
    <div className="w-8 h-8 rounded-full bg-blue-200/20 flex items-center justify-center mr-2 flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="url(#patronus-gradient)" strokeWidth="4"/>
            <defs>
                <radialGradient id="patronus-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#A7D7FF" stopOpacity="1"/>
                    <stop offset="60%" stopColor="#6EABFF" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#0052A4" stopOpacity="0.8"/>
                </radialGradient>
            </defs>
        </svg>
    </div>
);

// --- Main Component ---
interface PatronusNavigatorProps {
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'bot' | 'user';
}

const mysteriousQuotes = [
  "So… you wish to go there, do you? Very well. But don’t say the menu didn’t warn you.",
  "Ah, brave soul... you truly wish to click that path? Some doors open only once.",
  "Curiosity leads many to that destination… few return the same.",
  "You seek the page beyond? Bold choice. Just remember — not all who wander are ready.",
  "You sure you want to go there? Even magic has second thoughts.",
  "So you’ve chosen the cursed path from the menu... fascinating."
];

export default function PatronusNavigator({ onClose }: PatronusNavigatorProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: '✨ Where shall my Patronus guide you?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  // Seed initial data if collection is empty
  useEffect(() => {
    const seedData = async () => {
      const navigationCollection = collection(db, 'navigation');
      const q = query(navigationCollection);
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("Seeding navigation data into Firestore...");
        const routes = [
          { name: 'dashboard', route: '/' },
          { name: 'vault', route: '/vault' },
          { name: 'scrolls', route: '/scrolls' },
          { name: 'profile', route: '/profile' },
          { name: 'sanctum', route: '/profile' },
        ];
        for (const nav of routes) {
            await setDoc(doc(db, "navigation", nav.name), nav);
        }
      }
    };
    seedData();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const navigationCollection = collection(db, 'navigation');
      const q = query(navigationCollection, where('name', '==', input.trim().toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        const route = docData.route;
        const botReply: Message = { text: `🪄 Off we go... navigating to ${input}!`, sender: 'bot' };
        setMessages((prev) => [...prev, botReply]);
        setTimeout(() => {
            router.push(route);
            onClose();
        }, 5000);
      } else {
        const randomQuote = mysteriousQuotes[Math.floor(Math.random() * mysteriousQuotes.length)];
        const botReply: Message = { text: `🙁 ${randomQuote}`, sender: 'bot' };
        setMessages((prev) => [...prev, botReply]);
      }
    } catch (error) {
      console.error("Error fetching from Firestore:", error);
      const botReply: Message = { text: '🔥 My connection to the spirit world is weak...', sender: 'bot' };
      setMessages((prev) => [...prev, botReply]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm h-[60vh] bg-card/80 backdrop-blur-md rounded-lg shadow-2xl shadow-accent/20 border border-accent/30 z-50 flex flex-col">
      <header className="flex items-center justify-between p-3 border-b border-accent/30">
        <h2 className="font-headline text-lg text-accent">Patronus Navigator</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </header>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'bot' && <PatronusIcon />}
            <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                msg.sender === 'bot'
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-primary text-primary-foreground'
              }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex items-start gap-2">
                <PatronusIcon />
                <div className="max-w-[80%] rounded-lg px-3 py-2 text-sm bg-secondary text-secondary-foreground">
                    <div className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse delay-0"></span>
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse delay-200"></span>
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse delay-400"></span>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t border-accent/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <Input
            type="text"
            placeholder="e.g. 'profile' or 'vault'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
