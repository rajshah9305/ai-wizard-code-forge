
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [codeText, setCodeText] = useState('');
  const fullCode = `import React from 'react';
import { Button } from './components/ui/button';

export default function LandingPage() {
  return (
    <div className="hero-section">
      <h1>Welcome to the Future</h1>
      <Button variant="primary">
        Get Started
      </Button>
    </div>
  );
}`;

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < fullCode.length) {
        setCodeText(fullCode.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern-subtle opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 text-sm font-medium text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                AI-Powered Development
              </div>
              
              <h1 className="text-display font-bold text-black leading-none">
                Build React Apps with
                <span className="text-accent-gradient"> AI Magic</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Transform your ideas into production-ready React applications in seconds. 
                No coding required—just describe what you want to build.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-accent group text-lg px-8 py-4">
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Export clean code
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Code Preview */}
          <div className="relative animate-grid-fade">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-950 rounded-2xl p-6 shadow-premium-hover border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4 font-mono">App.jsx</span>
              </div>
              
              <div className="font-mono text-sm overflow-hidden">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-purple-400">import</span>{' '}
                    <span className="text-blue-400">React</span>{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-green-400">'react'</span>;{'\n'}
                    <span className="text-purple-400">import</span>{' '}
                    {'{ '}<span className="text-blue-400">Button</span>{' }'}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-green-400">'./components/ui/button'</span>;{'\n\n'}
                    <span className="text-purple-400">export default function</span>{' '}
                    <span className="text-yellow-400">LandingPage</span>(){' {'}{'\n'}
                    {'  '}<span className="text-purple-400">return</span> ({'\n'}
                    {'    '}<span className="text-red-400">{'<div'}</span>{' '}
                    <span className="text-blue-400">className</span>=
                    <span className="text-green-400">"hero-section"</span>
                    <span className="text-red-400">{'>'}</span>{'\n'}
                    {'      '}<span className="text-red-400">{'<h1>'}</span>
                    Welcome to the Future
                    <span className="text-red-400">{'</h1>'}</span>{'\n'}
                    {'      '}<span className="text-red-400">{'<Button'}</span>{' '}
                    <span className="text-blue-400">variant</span>=
                    <span className="text-green-400">"primary"</span>
                    <span className="text-red-400">{'>'}</span>{'\n'}
                    {'        '}Get Started{'\n'}
                    {'      '}<span className="text-red-400">{'</Button>'}</span>{'\n'}
                    {'    '}<span className="text-red-400">{'</div>'}</span>{'\n'}
                    {'  '});{'\n'}
                    {'}'}
                  </code>
                </pre>
                
                {/* Typing cursor */}
                <span className="inline-block w-2 h-5 bg-accent animate-pulse-glow ml-1"></span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-premium border border-gray-100 animate-bounce">
              <div className="text-xs font-mono text-gray-600">✨ AI Generated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
