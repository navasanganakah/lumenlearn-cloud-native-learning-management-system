import React from "react";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Users, 
  Settings,
  Sparkles,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { useLocation, Link } from "react-router-dom";
import { UserRole } from "@shared/types";
import { cn } from "@/lib/utils";
interface AppSidebarProps {
  userRole?: UserRole;
}
export function AppSidebar({ userRole = 'Student' }: AppSidebarProps): JSX.Element {
  const location = useLocation();
  const studentLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/student/dashboard' },
    { name: 'My Courses', icon: BookOpen, path: '/student/courses' },
    { name: 'Assignments', icon: FileText, path: '/student/assignments' },
    { name: 'Grades', icon: GraduationCap, path: '/student/grades' },
  ];
  const teacherLinks = [
    { name: 'Teacher Panel', icon: LayoutDashboard, path: '/teacher/dashboard' },
    { name: 'Course Manager', icon: BookOpen, path: '/teacher/courses' },
    { name: 'Grading', icon: GraduationCap, path: '/teacher/grading' },
  ];
  const adminLinks = [
    { name: 'Admin Hub', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Manage Users', icon: Users, path: '/admin/users' },
    { name: 'Site Settings', icon: Settings, path: '/admin/settings' },
  ];
  const activeLinks = userRole === 'Student' ? studentLinks : userRole === 'Teacher' ? teacherLinks : adminLinks;
  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="h-16 flex items-center px-6 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-display font-bold tracking-tight">LumenLearn</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-2xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {userRole} Menu
          </SidebarGroupLabel>
          <SidebarMenu className="px-3 space-y-1 mt-2">
            {activeLinks.map((link) => (
              <SidebarMenuItem key={link.path}>
                <SidebarMenuButton 
                  asChild 
                  isActive={location.pathname === link.path}
                  className={cn(
                    "transition-all duration-200 h-11 px-4",
                    location.pathname === link.path 
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
                      : "hover:bg-accent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Link to={link.path}>
                    <link.icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{link.name}</span>
                    {location.pathname === link.path && <ChevronRight className="ml-auto w-4 h-4 opacity-50" />}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border/40">
        <div className="flex items-center gap-3 px-2">
           <div className="flex flex-col">
             <span className="text-xs font-semibold text-foreground/80">Premium Account</span>
             <span className="text-[10px] text-muted-foreground">Active until Dec 2025</span>
           </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}