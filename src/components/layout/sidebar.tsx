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
import { LayoutGrid, Archive, ScrollText, UserCircle } from 'lucide-react';

const navItems: NavItem[] = [
  { href: '/', label: 'Dashboard', icon: LayoutGrid },
  { href: '/vault', label: 'Vault Project', icon: Archive },
  { href: '/scrolls', label: 'Restricted Scrolls', icon: ScrollText },
  { href: '/profile', label: 'My Hall of Brains', icon: UserCircle },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const currentUser = mockUsers[0];

  return (
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
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label, side: 'right' }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
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
  );
}
