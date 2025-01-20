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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Categories</h1>
          <p className="text-blue-100">
            Temukan koleksi sepatu second-hand premium kami
          </p>
        </div>
        <div className="flex gap-4">
          {['All Brands', 'New Arrivals', 'Best Sellers'].map((item) => (
            <button key={item} className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20">
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BadgeCheck, title: '100% Asli', desc: 'Dijamin merek asli' },
              { icon: Shield, title: 'Pembayaran Aman', desc: 'Beragam opsi pembayaran' },
              { icon: Truck, title: 'Pengiriman Cepat', desc: 'Pengiriman ke seluruh Indonesia' }
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

      {/* category list */}
      <div className="md:w-64">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-bold mb-4">Browse Categories</h2>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${activeCategory === cat.name
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

      {/* Category content */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <span>Home</span>
        <ChevronRight className="w-4 h-4" />
        <span>Categories</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-blue-600">{activeCategory}</span>
      </div>
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
                <p className="text-white/80 text-sm">Mulai dari Rp 800.000</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div> {/* Placeholder untuk Main Content Section */} </div>
    </div>
  );
};

export default CategoryPage;



// import React from "react";
// import { Shield, Check, Truck } from "lucide-react";

// const Categories = () => {
//   return (
//     <div className="w-full bg-blue-600 py-16">
//       <div className="container mx-auto px-4">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-white text-4xl font-bold mb-4">Categories</h2>
//         <p className="text-white/90">Discover our curated collection of premium second-hand shoes</p>
//       </div>

//       {/* Buttons Section */}
//       <div className="flex flex-wrap justify-center gap-4 mb-16">
//         <button className="bg-blue-500/50 hover:bg-blue-500/70 text-white px-6 py-2 rounded-full transition">All Brands</button>
//         <button className="bg-blue-500/50 hover:bg-blue-500/70 text-white px-6 py-2 rounded-full transition">New Arrivals</button>
//         <button className="bg-blue-500/50 hover:bg-blue-500/70 text-white px-6 py-2 rounded-full transition">Best Sellers</button>
//       </div>

//       {/* Features Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//         <div className="flex items-center gap-4">
//           <div className="bg-blue-100 p-3 rounded-full">
//           <Check className="w-6 h-6 text-blue-600" />
//           </div>
//           <div>
//             <h3 className="text-white font-semibold">100% Authentic</h3>
//             <p className="text-white/75 text-sm">Guaranteed original brands</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="bg-blue-100 p-3 rounded-full">
//           <Shield className="w-6 h-6 text-blue-600" />
//           </div>
//           <div>
//             <h3 className="text-white font-semibold">Secure Payment</h3>
//             <p className="text-white/75 text-sm">Multiple payment options</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="bg-blue-100 p-3 rounded-full">
//           <Truck className="w-6 h-6 text-blue-600" />
//           </div>
//           <div>
//             <h3 className="text-white font-semibold">Fast Delivery</h3>
//             <p className="text-white/75 text-sm">Nationwide shipping</p>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
