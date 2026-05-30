import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, GraduationCap, Presentation, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
export function AuthPage() {
  const navigate = useNavigate();
  const handleLogin = (role: 'Student' | 'Teacher' | 'Admin') => {
    toast.success(`Logged in as ${role}`);
    if (role === 'Student') navigate('/student/dashboard');
    else if (role === 'Teacher') navigate('/teacher/dashboard');
    else navigate('/admin/dashboard');
  };
  return (
    <AuthLayout>
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-2">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-display font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">Access your learning ecosystem</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="student@lumenlearn.com" className="h-12 bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" className="h-12 bg-background/50" />
          </div>
          <Button className="w-full h-12 text-lg font-semibold bg-gradient-primary shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Sign In
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or demo roles</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline" className="flex flex-col h-auto py-3 gap-2 border-primary/20 hover:bg-primary/5" onClick={() => handleLogin('Student')}>
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-[10px] font-bold uppercase">Student</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-3 gap-2 border-blue-200 hover:bg-blue-50" onClick={() => handleLogin('Teacher')}>
            <Presentation className="w-5 h-5 text-blue-600" />
            <span className="text-[10px] font-bold uppercase">Teacher</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-3 gap-2 border-purple-200 hover:bg-purple-50" onClick={() => handleLogin('Admin')}>
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            <span className="text-[10px] font-bold uppercase">Admin</span>
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}