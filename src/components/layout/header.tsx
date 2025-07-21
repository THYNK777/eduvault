'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { usePathname } from 'next/navigation';

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
        return 'The Recruitment Hall';
      case '/scrolls':
        return 'Restricted Scrolls';
      case '/profile':
        return "The Scholar's Sanctum";
      default:
        return '';
    }
  };
  
  const title = getTitle();

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6">
       {isMobile && <SidebarTrigger />}
       <div className="flex-1">
         <h1 className="text-lg font-semibold">{title}</h1>
       </div>
    </header>
  );
}
