
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white/80 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
            Ready to build?
          </div>
          
          <h2 className="text-hero font-bold text-white mb-6">
            Start building your next
            <span className="text-accent"> React application</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of developers who are already building faster with AI. 
            No credit card required to get started.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-orange-600 text-white text-lg px-8 py-4 group">
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
              View Documentation
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-white/60 mt-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              Free forever plan
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              Export clean code
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              Deploy instantly
            </div>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-accent/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse-glow"></div>
        <div className="absolute top-1/4 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>
    </section>
  );
};

export default CTA;
