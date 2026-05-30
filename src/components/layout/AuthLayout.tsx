import React from 'react';
export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-mesh overflow-hidden p-4 relative">
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      <div className="w-full max-w-md relative z-10 animate-fade-in py-12 md:py-20">
        <div className="bg-card/70 backdrop-blur-xl border border-white/20 shadow-glass rounded-3xl overflow-hidden p-8">
          {children}
        </div>
      </div>
    </div>
  );
}