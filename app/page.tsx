'use client';

import React from 'react';
import {
  Filter,
  Facebook,
  Instagram,
  Twitter,
  Star,
  Heart,
  Shield,
  Truck,
  Lock,
} from 'lucide-react';

// Komponen untuk Merek
const BrandSection = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {['Nike', 'Adidas', 'Puma', 'New Balance'].map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
          >
            <span className="text-2xl font-bold text-gray-400 hover:text-gray-600">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Komponen Kartu Produk
const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="relative">
      <img
        src={`/placeholder/${product.id}.jpg`}
        alt={product.name}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Heart className="w-5 h-5 text-red-500" />
      </button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">Size: {product.size}</p>
          <p className="text-blue-600 font-bold text-xl">${product.price}</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Tipe Produk
interface Product {
  id: number;
  name: string;
  price: string;
  size: string;
  rating: number;
}

// Komponen Utama
export default function Home() {
  const products: Product[] = [
    { id: 1, name: 'Nike Air Max 90', price: '129.00', size: '42', rating: 4 },
    { id: 2, name: 'Adidas Ultra Boost', price: '159.00', size: '43', rating: 5 },
    { id: 3, name: 'Nike Jordan 1', price: '199.00', size: '41', rating: 4 },
    { id: 4, name: 'Yeezy Boost 350', price: '299.00', size: '44', rating: 5 },
  ];

  const features = [
    {
      title: 'Authentic Products',
      description: 'All items are verified for authenticity.',
      icon: () => <Shield className="w-12 h-12 mx-auto text-blue-600" />,
    },
    {
      title: 'Fast Shipping',
      description: 'Get your items delivered within 3-5 business days.',
      icon: () => <Truck className="w-12 h-12 mx-auto text-green-600" />,
    },
    {
      title: 'Secure Payment',
      description: 'Shop with confidence using our secure payment system.',
      icon: () => <Lock className="w-12 h-12 mx-auto text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Second Brand Shoes
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover authentic branded shoes at unbeatable prices. Carefully
            curated and verified for quality.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Brand Section */}
      <BrandSection />

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 bg-white rounded-lg shadow-md">
                {feature.icon()}
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
