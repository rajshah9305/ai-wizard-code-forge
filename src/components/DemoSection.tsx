
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DemoSection = () => {
  const [activePrompt, setActivePrompt] = useState(0);
  
  const demos = [
    {
      prompt: "Create a modern landing page for a SaaS product with pricing cards",
      description: "AI generates a complete landing page with hero section, features, and pricing",
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
    }
  ];

  return (
    <section id="examples" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            See AI in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI transforms simple descriptions into fully functional React applications
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Prompt Selection */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-black mb-6">Try these prompts:</h3>
            
            {demos.map((demo, index) => (
              <div
                key={index}
                onClick={() => setActivePrompt(index)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  activePrompt === index 
                    ? 'border-accent bg-orange-50/50' 
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                    activePrompt === index 
                      ? 'bg-accent text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-black text-sm mb-1">"{demo.prompt}"</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{demo.description}</div>
                  </div>
                  {activePrompt === index && (
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Button className="w-full bg-black hover:bg-gray-900 text-white">
                Try Your Own Prompt
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right - Code Output */}
          <div className="lg:col-span-3">
            <div className="bg-gray-950 rounded-xl overflow-hidden border border-gray-800">
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">Generated.jsx</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  AI Generated
                </div>
              </div>
              
              <div className="p-6 max-h-96 overflow-y-auto">
                <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                  <code>{demos[activePrompt].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
