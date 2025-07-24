import { cn } from "@/lib/utils"

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-vault-scroll", className)}
    >
      {/* Vault Door */}
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
      
      {/* Pocket Watch Lock */}
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 10v2.5l1.5 1" /> 
      <path d="M11.5 1.5h1l.5 1.5h-2z" />

      {/* Royal Scroll (Top/Bottom) */}
      <path d="M2.5 4c-1 0-1.5 1-1.5 2s.5 2 1.5 2h18c1 0 1.5-1 1.5-2s-.5-2-1.5-2z" />
      <path d="M2.5 20c-1 0-1.5-1-1.5-2s.5-2 1.5-2h18c1 0 1.5 1 1.5 2s-.5 2-1.5 2z" />
      <path d="M4 8v8" />
      <path d="M20 8v8" />
    </svg>
  )
}
