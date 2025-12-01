'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { 
  Home,
  Star,
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Landmark,
  ShieldCheck,
  User,
  Settings,
  Grid,
  ChevronDown,
  Search,
  Bell,
  MessageCircleQuestion,
  Maximize,
} from 'lucide-react';
import { KyribaLogo, RequestsManagementIcon, TasksReportsIcon, BankRelationshipIcon, FraudComplianceIcon, CoreDataIcon, MyReceivablesIcon, AccountManagementIcon } from './icons';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import MenuMap from './menu-map';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';

const sidebarNav = [
  { icon: Grid, label: 'Menu Map', tooltip: 'Menu Map' },
  { icon: Star, label: 'Shortcuts', tooltip: 'Shortcuts' },
  { icon: Home, label: 'Home', tooltip: 'Home' },
  { icon: RequestsManagementIcon, label: 'Requests management', tooltip: 'Requests management' },
  { icon: LayoutDashboard, label: 'Dashboard', tooltip: 'Dashboard' },
  { icon: TasksReportsIcon, label: 'Tasks & Reports', tooltip: 'Tasks & Reports' },
  { icon: BankRelationshipIcon, label: 'Bank Relationship', tooltip: 'Bank Relationship' },
  { icon: Wallet, label: 'Cash & Liquidity', tooltip: 'Cash & Liquidity' },
  { icon: Landmark, label: 'Financial Transactions', tooltip: 'Financial Transactions' },
  { icon: ArrowLeftRight, label: 'Payment', tooltip: 'Payment' },
  { icon: Landmark, label: 'Trade Solutions', tooltip: 'Trade Solutions' },
  { icon: FraudComplianceIcon, label: 'Fraud & Compliance', tooltip: 'Fraud & Compliance' },
  { icon: CoreDataIcon, label: 'Core Data', tooltip: 'Core Data' },
  { icon: MyReceivablesIcon, label: 'My receivables', tooltip: 'My receivables' },
];

const sidebarFooterNav = [
  { icon: User, label: 'My account', tooltip: 'My account' },
  { icon: AccountManagementIcon, label: 'Account Management', tooltip: 'Account Management' },
  { icon: Settings, label: 'Support', tooltip: 'Support' },
]

export default function KyribaPortal() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
            <KyribaLogo className="h-10"/>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {sidebarNav.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton isActive={index === 0} tooltip={item.tooltip}>
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarSeparator className="my-4" />
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
          {sidebarFooterNav.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton tooltip={item.tooltip}>
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <main className="flex flex-1 flex-col">
          <Header />
          <div className="flex-1 overflow-auto bg-white p-6">
            <MenuMap />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

const Header = () => {
    return (
        <header className="sticky top-0 z-10 flex h-11 items-center justify-between border-b bg-background px-6">
            <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold">Menu Map</h1>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search" className="w-64 rounded-full bg-secondary pl-9" />
                </div>
                <Button variant="ghost" size="icon"><Bell className="h-5 w-5"/></Button>
                <Button variant="ghost" size="icon"><MessageCircleQuestion className="h-5 w-5"/></Button>
                <Button variant="ghost" size="icon"><Maximize className="h-5 w-5"/></Button>
                <div className="flex items-center gap-2 rounded-full border p-1">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://i.pravatar.cc/150?u=ad" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <span className="pr-2 text-sm font-semibold">AD</span>
                </div>
            </div>
        </header>
    );
};
