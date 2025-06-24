
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Generation",
      description: "Describe your app in plain English and watch as our AI transforms your ideas into clean, production-ready React code.",
      icon: "🤖",
      highlight: true
    },
    {
      title: "Real-time Preview",
      description: "See your application come to life instantly with our live preview system that updates as the AI generates your code.",
      icon: "⚡",
      highlight: false
    },
    {
      title: "Clean Code Export",
      description: "Get perfectly structured, commented code that follows industry best practices. Ready for deployment or further customization.",
      icon: "📦",
      highlight: false
    },
    {
      title: "Component Library",
      description: "Built on shadcn/ui components with Tailwind CSS for beautiful, responsive designs that work across all devices.",
      icon: "🎨",
      highlight: false
    },
    {
      title: "One-Click Deploy",
      description: "Deploy your applications instantly to production with our integrated hosting platform. Share your creations immediately.",
      icon: "🚀",
      highlight: true
    },
    {
      title: "Version Control",
      description: "Keep track of changes with built-in version control. Collaborate with teammates and manage iterations seamlessly.",
      icon: "📋",
      highlight: false
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-medium text-gray-600 mb-6 shadow-premium">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            Features
          </div>
          <h2 className="text-hero font-bold text-black mb-6">
            Everything you need to build
            <span className="text-accent-gradient"> amazing apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines the latest AI technology with professional development tools 
            to give you superpowers in building React applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`card-premium group cursor-pointer ${
                feature.highlight ? 'ring-2 ring-accent ring-opacity-20 bg-gradient-to-br from-white to-orange-50' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`text-3xl ${feature.highlight ? 'animate-pulse-glow' : ''}`}>
                  {feature.icon}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-black group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.highlight && (
                    <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-black">10K+</div>
            <div className="text-gray-600">Apps Generated</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-black">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-black">2.5s</div>
            <div className="text-gray-600">Avg Generation</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-black">5K+</div>
            <div className="text-gray-600">Developers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
