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
  Link,
  PackageSearchIcon,
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
              className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
            Sepatu Bekas Branded Premium Original
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-400">
            Sepatu Bekas yang berkualitas dan original, dengan harga yang terjangkau yang di import dari Batam dan Singapore untuk memenuhi kebutuhan Konsumen .
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
          <a href="./products">Lihat Produk</a>
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
            <Filter className="w-4 h-4 text-black" />
            <span>Filter</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
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
              <div
                key={feature.title}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                {feature.icon()}
                <h3 className="text-xl font-bold text-black mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-black">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-500">
          {['Sneakers', 'Sports', 'Casual', 'Formal'].map((category) => (
            <div
              key={category}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
              <p className="text-center font-medium">{category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-black">Featured Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-200 rounded-t-lg"></div>
              <div className="p-4">
                <h4 className="font-medium mb-2 text-black">Nike Air Max</h4>
                <p className="text-gray-600 text-sm mb-2 text-black">Size 42 - Like New</p>
                <p className="font-bold text-blue-500">Rp 1.200.000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
