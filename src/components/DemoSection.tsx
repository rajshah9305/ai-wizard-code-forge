
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DemoSection = () => {
  const [activePrompt, setActivePrompt] = useState(0);
  
  const demos = [
    {
      prompt: "Create a modern landing page for a SaaS product with pricing cards",
      description: "AI generates a complete landing page with hero section, features, and pricing",
      code: `// Generated landing page component
import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export default function SaaSLanding() {
  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 px-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">ProductName</div>
          <Button>Get Started</Button>
        </nav>
      </header>
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            Transform Your Business
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The all-in-one platform for modern teams
          </p>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </main>
    </div>
  );
}`
    },
    {
      prompt: "Build a dashboard with charts and data tables for analytics",
      description: "Complete dashboard with interactive charts and responsive design",
      code: `// Generated dashboard component
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12,345</div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Growth Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#FF6B35" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}`
    },
    {
      prompt: "Create an e-commerce product page with image gallery and reviews",
      description: "Full product page with interactive gallery and customer reviews",
      code: `// Generated e-commerce component
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Star } from 'lucide-react';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const images = [
    '/product-1.jpg',
    '/product-2.jpg', 
    '/product-3.jpg'
  ];
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg">
            <img 
              src={images[selectedImage]} 
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className="w-20 h-20 bg-gray-100 rounded"
              >
                <img src={img} alt="" className="w-full h-full object-cover rounded" />
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Premium Headphones</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-600">(124 reviews)</span>
            </div>
            <div className="text-3xl font-bold text-green-600">$299.99</div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label>Quantity:</label>
              <select 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded px-3 py-2"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            
            <div className="flex gap-4">
              <Button className="flex-1">Add to Cart</Button>
              <Button variant="outline">Add to Wishlist</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
    }
  ];

  return (
    <section id="examples" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-subtle opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 text-sm font-medium text-gray-600 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
            Live Demo
          </div>
          <h2 className="text-hero font-bold text-black mb-6">
            See AI in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI transforms simple descriptions into fully functional React applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Prompt Selection */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black mb-6">Try these prompts:</h3>
            
            {demos.map((demo, index) => (
              <div
                key={index}
                onClick={() => setActivePrompt(index)}
                className={`card-premium cursor-pointer transition-all ${
                  activePrompt === index 
                    ? 'ring-2 ring-accent ring-opacity-30 bg-gradient-to-r from-orange-50 to-white' 
                    : 'hover:shadow-premium-hover'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    activePrompt === index 
                      ? 'bg-accent text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-black mb-2">"{demo.prompt}"</div>
                    <div className="text-sm text-gray-600">{demo.description}</div>
                  </div>
                  {activePrompt === index && (
                    <div className="text-accent">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-8">
              <Button className="btn-accent w-full group">
                Try Your Own Prompt
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right - Code Output */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-950 rounded-2xl shadow-premium-hover border border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4 font-mono">Generated.jsx</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                  AI Generated
                </div>
              </div>
              
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono">
                  <code className="text-gray-300">
                    {demos[activePrompt].code}
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Status */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-premium border border-gray-100">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium text-black">Generated in 2.3s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
