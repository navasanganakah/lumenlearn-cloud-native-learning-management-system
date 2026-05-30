import React from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/common/Header";
import { MOCK_USERS } from "@shared/mock-data";
interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole?: 'Student' | 'Teacher' | 'Admin';
}
export function DashboardLayout({ children, userRole = 'Student' }: DashboardLayoutProps) {
  // Use first mock user for now based on role
  const currentUser = MOCK_USERS.find(u => u.role === userRole) || MOCK_USERS[0];
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar userRole={userRole} />
      <SidebarInset className="bg-background/50">
        <Header user={currentUser} />
        <main className="pt-16 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12 animate-fade-in">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}