'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUsers } from '@/lib/mock-data';
import type { NavItem } from '@/lib/types';
import Logo from '@/components/logo';
import { LayoutGrid, Users, ScrollText, UserCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import PatronusNavigator from '@/components/patronus-navigator';

const navItems: NavItem[] = [
  { href: '/', label: 'Dashboard', icon: LayoutGrid },
  { href: '/vault', label: 'Recruitment Hall', icon: Users },
  { href: '/scrolls', label: 'Restricted Scrolls', icon: ScrollText },
  { href: '/profile', label: "The Scholar's Sanctum", icon: UserCircle },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const currentUser = mockUsers[0];
  const [showPatronusNav, setShowPatronusNav] = useState(false);

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-accent" />
            <span className="font-headline text-2xl font-bold">EduVault</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label, side: 'right' }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
             <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setShowPatronusNav(true)}
                tooltip={{ children: 'Patronus Navigator', side: 'right' }}
              >
                <MessageCircle />
                <span>Patronus Navigator</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <Link href="/profile" className='w-full'>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent transition-colors">
              <Avatar>
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="overflow-hidden">
                <p className="font-semibold truncate">{currentUser.name}</p>
                <p className="text-xs text-muted-foreground truncate">View Profile</p>
              </div>
            </div>
          </Link>
        </SidebarFooter>
      </Sidebar>
      {showPatronusNav && <PatronusNavigator onClose={() => setShowPatronusNav(false)} />}
    </>
  );
}
