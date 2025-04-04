
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">SL</span>
          </div>
          <span className="font-bold text-lg tracking-tight">Succinct Labs</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition">Home</Link>
          <Link to="/chains" className="text-sm font-medium text-white/70 hover:text-white transition">Chains</Link>
          <Link to="/technology" className="text-sm font-medium text-white/70 hover:text-white transition">Technology</Link>
          <Link to="/community" className="text-sm font-medium text-white/70 hover:text-white transition">Community</Link>
        </nav>
        
        <Button className="hidden md:flex items-center gap-2">
          Join Community <ArrowRight className="h-4 w-4" />
        </Button>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
