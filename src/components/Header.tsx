
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-black">BuilderAI</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors font-medium">
              Features
            </a>
            <a href="#examples" className="text-gray-600 hover:text-black transition-colors font-medium">
              Examples
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors font-medium">
              Pricing
            </a>
            <a href="#docs" className="text-gray-600 hover:text-black transition-colors font-medium">
              Docs
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-gray-600 hover:text-black">
              Sign In
            </Button>
            <Button className="btn-accent group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
