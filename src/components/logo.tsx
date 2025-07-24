import { cn } from "@/lib/utils"

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-vault-scroll", className)}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12h0" />
      <path d="M6 4V2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2" />
      <path d="M6 20v2a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}
