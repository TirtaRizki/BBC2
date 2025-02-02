'use client';

import React from 'react';
import { ChevronRight, Truck, Shield, BadgeCheck } from 'lucide-react';

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = React.useState('Sneakers');

  const categories = [
    { name: 'Sneakers', count: 120 },
    { name: 'Sports', count: 85 },
    { name: 'Casual', count: 64 },
    { name: 'Formal', count: 42 },
    { name: 'Limited Edition', count: 23 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Categories</h1>
              <p className="text-blue-100">Discover our curated collection of premium second-hand shoes</p>
            </div>
            <div className="flex gap-4">
              {['All Brands', 'New Arrivals', 'Best Sellers'].map((item) => (
                <button key={item} className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-b text-black">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BadgeCheck, title: '100% Authentic', desc: 'Guaranteed original brands' },
              { icon: Shield, title: 'Secure Payment', desc: 'Multiple payment options' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Nationwide shipping' }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Category List */}
          <div className="md:w-64">
            <div className="bg-white rounded-xl shadow-sm p-6 text-black">
              <h2 className="font-bold mb-4">Browse Categories</h2>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === cat.name
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-sm text-gray-500">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 text-black">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span>Categories</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-blue-600">{activeCategory}</span>
              </div>

              <h2 className="text-2xl font-bold mb-6">{activeCategory}</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-lg transition-all hover:shadow-md"
                  >
                    <div className="aspect-square bg-gray-100"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <p className="text-white font-medium">Nike Air Max</p>
                        <p className="text-white/80 text-sm">Starting from Rp 800.000</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Collections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              {[
                { title: 'Limited Edition', desc: 'Rare finds from premium brands' },
                { title: 'New Arrivals', desc: 'Fresh additions to our collection' }
              ].map((collection) => (
                <div
                  key={collection.title}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold mb-2">{collection.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{collection.desc}</p>
                  <button className="text-blue-600 text-sm font-medium">
                    View Collection
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;