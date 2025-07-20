'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AppHeader() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6">
       {isMobile && <SidebarTrigger />}
       <div className="flex-1">
         {/* Could add breadcrumbs or page title here */}
       </div>
    </header>
  );
}
