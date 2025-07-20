'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

export default function AppHeader() {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const getTitle = () => {
    // This can be improved with a more robust routing/title mapping
    if (pathname.startsWith('/projects')) return 'Project Details';
    switch (pathname) {
      case '/':
        return 'The Room of Unfinished Spells';
      case '/vault':
        return 'Vault Project';
      case '/scrolls':
        return 'Restricted Scrolls';
      case '/profile':
        return 'My Hall of Brains';
      default:
        return '';
    }
  };
  
  const title = getTitle();
  const isDashboard = pathname === '/';

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6">
       {isMobile && <SidebarTrigger />}
       <div className="flex-1">
         {isDashboard ? (
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <h1 className="text-lg font-semibold cursor-default">{title}</h1>
                </TooltipTrigger>
                <TooltipContent 
                  side="bottom" 
                  align="start" 
                  className="max-w-xs border-yellow-900/50"
                  style={{
                    color: '#946B2D',
                    textShadow: '0 0 8px #946B2D',
                    fontWeight: 'bold',
                  }}
                  >
                  <p>
                  The Room of Unfinished Spells is where half-baked ideas and paused projects wait to be revived like a magical storage of “to-be-continued.” ✨ Here, you can even summon fellow Spellcasters to join your quest and bring your lost research back to life! 🪄📜
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
         ) : (
          <h1 className="text-lg font-semibold">{title}</h1>
         )}
       </div>
    </header>
  );
}
