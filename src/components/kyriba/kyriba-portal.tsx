'use client';

import React from 'react';
import Image from 'next/image';
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RequestsManagementIcon, TasksReportsIcon, BankRelationshipIcon, FraudComplianceIcon, CoreDataIcon, MyReceivablesIcon, AccountManagementIcon, BankActualIntegrationIcon } from './icons';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import MenuMap from './menu-map';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import HomeDashboard from './home-dashboard';
import BankConnectivityCockpit from './bank-connectivity-cockpit';
import CashPositionWorksheet from './cash-position-worksheet';
import LiquidityPlan from './liquidity-plan';
import VarianceAnalysisWorksheet from './variance-analysis-worksheet';
import VarianceAnalysisResult from './variance-analysis-result';

const sidebarNav = [
  { id: 'menu-map', icon: Grid, label: 'Menu Map', tooltip: 'Menu Map' },
  { id: 'shortcuts', icon: Star, label: 'Shortcuts', tooltip: 'Shortcuts' },
  { id: 'home', icon: Home, label: 'Home', tooltip: 'Home' },
  { id: 'requests', icon: RequestsManagementIcon, label: 'Requests management', tooltip: 'Requests management' },
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', tooltip: 'Dashboard' },
  { id: 'tasks', icon: TasksReportsIcon, label: 'Tasks & Reports', tooltip: 'Tasks & Reports' },
  { id: 'bank-relationship', icon: BankRelationshipIcon, label: 'Bank Relationship', tooltip: 'Bank Relationship' },
  { id: 'cash-liquidity', icon: Wallet, label: 'Cash & Liquidity', tooltip: 'Cash & Liquidity' },
  { id: 'financial-transactions', icon: Landmark, label: 'Financial Transactions', tooltip: 'Financial Transactions' },
  { id: 'payment', icon: ArrowLeftRight, label: 'Payment', tooltip: 'Payment' },
  { id: 'trade-solutions', icon: Landmark, label: 'Trade Solutions', tooltip: 'Trade Solutions' },
  { id: 'fraud-compliance', icon: FraudComplianceIcon, label: 'Fraud & Compliance', tooltip: 'Fraud & Compliance' },
  { id: 'core-data', icon: CoreDataIcon, label: 'Core Data', tooltip: 'Core Data' },
  { id: 'my-receivables', icon: MyReceivablesIcon, label: 'My receivables', tooltip: 'My receivables' },
];

const sidebarFooterNav = [
  { id: 'my-account', icon: User, label: 'My account', tooltip: 'My account' },
  { id: 'account-management', icon: AccountManagementIcon, label: 'Account Management', tooltip: 'Account Management' },
  { id: 'support', icon: Settings, label: 'Support', tooltip: 'Support' },
]

type ActiveView = 'menu-map' | 'home' | 'bank-connectivity';
type OpenModal = 'none' | 'cash-position' | 'liquidity-plan' | 'variance-analysis' | 'variance-analysis-result';

export default function KyribaPortal() {
  const [activeView, setActiveView] = React.useState<ActiveView>('menu-map');
  const [openModal, setOpenModal] = React.useState<OpenModal>('none');

  const handleViewChange = (view: ActiveView | 'cash-position' | 'liquidity-plan' | 'variance-analysis') => {
    if (view === 'cash-position' || view === 'liquidity-plan' || view === 'variance-analysis') {
      setOpenModal(view);
    } else {
      setActiveView(view);
    }
  };

  const showVarianceResult = () => {
    setOpenModal('variance-analysis-result');
  }

  const getHeaderTitle = () => {
    switch (activeView) {
      case 'menu-map':
        return 'Menu Map';
      case 'home':
        return 'Home Page';
      case 'bank-connectivity':
        return '';
      default:
        return 'Menu Map';
    }
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
            <Image src="/kyriba-logo.svg" alt="Kyriba Logo" width={120} height={40} />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {sidebarNav.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton 
                  isActive={activeView === item.id} 
                  tooltip={item.tooltip}
                  onClick={() => {
                    if (item.id === 'home' || item.id === 'menu-map') {
                      setActiveView(item.id as ActiveView);
                    }
                    if (item.id === 'cash-liquidity') {
                      setActiveView('bank-connectivity');
                    }
                  }}
                >
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
          {sidebarFooterNav.map((item) => (
              <SidebarMenuItem key={item.id}>
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
          <Header title={getHeaderTitle()} showStar={activeView === 'home'} activeView={activeView} />
          <div className="flex-1 overflow-auto bg-white p-6">
            {activeView === 'menu-map' && <MenuMap onViewChange={handleViewChange} />}
            {activeView === 'home' && <HomeDashboard />}
            {activeView === 'bank-connectivity' && <BankConnectivityCockpit />}
            
            <Dialog open={openModal === 'cash-position'} onOpenChange={(isOpen) => !isOpen && setOpenModal('none')}>
              <DialogContent className="max-w-7xl h-[90vh] flex flex-col p-0">
                <DialogHeader className="p-4">
                  <DialogTitle className="sr-only">Cash Position Worksheet</DialogTitle>
                </DialogHeader>
                <CashPositionWorksheet />
              </DialogContent>
            </Dialog>

            <Dialog open={openModal === 'liquidity-plan'} onOpenChange={(isOpen) => !isOpen && setOpenModal('none')}>
              <DialogContent className="max-w-7xl h-[90vh] flex flex-col p-0">
                <DialogHeader className="p-4">
                  <DialogTitle className="sr-only">Liquidity Plan</DialogTitle>
                </DialogHeader>
                <LiquidityPlan />
              </DialogContent>
            </Dialog>

            <Dialog open={openModal === 'variance-analysis'} onOpenChange={(isOpen) => !isOpen && setOpenModal('none')}>
              <DialogContent className="max-w-5xl h-[70vh] flex flex-col p-0">
                <DialogHeader className="p-0">
                  <DialogTitle className="sr-only">Variance Analysis Worksheet</DialogTitle>
                </DialogHeader>
                <VarianceAnalysisWorksheet onClose={() => setOpenModal('none')} onApply={showVarianceResult} />
              </DialogContent>
            </Dialog>
            
            <Dialog open={openModal === 'variance-analysis-result'} onOpenChange={(isOpen) => !isOpen && setOpenModal('none')}>
              <DialogContent className="max-w-[95vw] w-full h-[90vh] flex flex-col p-0">
                <DialogHeader className="p-0">
                  <DialogTitle className="sr-only">Variance Analysis Result</DialogTitle>
                </DialogHeader>
                <VarianceAnalysisResult onBack={() => setOpenModal('variance-analysis')} />
              </DialogContent>
            </Dialog>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

const Header = ({ title, showStar, activeView }: { title: string, showStar?: boolean, activeView: ActiveView }) => {
  return (
      <header className="sticky top-0 z-10 flex h-11 items-center justify-between border-b bg-background px-6">
          <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-2">
                {showStar && <Star className="h-4 w-4" />}
                <h1 className="text-sm font-semibold">{title}</h1>
              </div>
              {activeView === 'bank-connectivity' && (
                <div className="flex items-center gap-4 text-sm">
                  <Button variant="ghost" className="p-1 h-auto">Process <ChevronDown className="h-4 w-4 ml-1" /></Button>
                  <Button variant="ghost" className="p-1 h-auto">Inquire <ChevronDown className="h-4 w-4 ml-1" /></Button>
                  <Button variant="ghost" className="p-1 h-auto">Set-Up <ChevronDown className="h-4 w-4 ml-1" /></Button>
                </div>
              )}
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
