'use client';

import React from 'react';
import { Search, Filter, Star } from 'lucide-react';

const ProductPage = () => {
  const [activeFilters, setActiveFilters] = React.useState({
    brands: [],
    sizes: [],
    conditions: [],
    priceRange: [0, 5000000],
  });
  const [sortBy, setSortBy] = React.useState('newest');
  const [showFilters, setShowFilters] = React.useState(false);

  const products = [
    { name: 'Nike Air Max 90', price: 1200000, rating: 4.5, condition: 'Like New', image: '/nike1.jpg' },
    { name: 'Adidas Ultra Boost', price: 1500000, rating: 4.8, condition: 'Very Good', image: '/adidas.jpg' },
    { name: 'Puma RS-X', price: 1000000, rating: 4.3, condition: 'Good', image: '/puma.jpg' },
    { name: 'New Balance 574', price: 900000, rating: 4.0, condition: 'Fair', image: '/images/new-balance-574.jpg' },
    { name: 'Nike Air Force 1', price: 1100000, rating: 4.7, condition: 'Like New', image: '/images/nike-air-force-1.jpg' },
    { name: 'Adidas Yeezy Boost 350', price: 2500000, rating: 4.9, condition: 'Like New', image: '/images/adidas-yeezy-boost-350.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Our Products</h1>
          
          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-black"
                />
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-black"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`sm:w-64 ${showFilters ? 'block' : 'hidden sm:block'}`}>
            <div className="bg-blue-400 p-6 rounded-lg shadow-sm sticky top-32">
              <div className="space-y-8">
                {/* Brand Filter */}
                <section>
                <h3 className="font-semibold mb-4 text-gray-900">Brand</h3>
                  <div className="space-y-2">
                    {['Nike', 'Adidas', 'Puma', 'New Balance'].map((brand) => (
                      <label key={brand} className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </section>

                {/* Size Filter */}
                <section>
                  <h3 className="font-semibold mb-4 text-gray-900">Size</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[38, 39, 40, 41, 42, 43, 44, 45].map((size) => (
                      <button
                        key={size}
                        className="px-3 py-2 border rounded-md hover:bg-gray-50 text-gray-700"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Condition Filter */}
                <section>
                  <h3 className="font-semibold mb-4 text-gray-900">Condition</h3>
                  <div className="space-y-2">
                    {['Like New', 'Very Good', 'Good', 'Fair'].map((condition) => (
                      <label key={condition} className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                        <span>{condition}</span>
                      </label>
                    ))}
                  </div>
                </section>

                {/* Price Range */}
                <section>
                  <h3 className="font-semibold mb-4 text-gray-900">Price Range</h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      className="w-full accent-blue-500"
                    />
                    <div className="flex justify-between gap-4">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-full px-3 py-1.5 border rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-full px-3 py-1.5 border rounded focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="aspect-square bg-gray-100 rounded-t-lg object-cover" />
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {product.condition}
                    </span>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1 text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm">Size 42</p>
                    <p className="text-gray-500 text-sm mb-4">Original - Complete Box</p>
                    
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-gray-900">
                        Rp {product.price.toLocaleString('id-ID')}
                      </p>
                      <button className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors">
                        Add to Wish
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex gap-2">
                <button className ="px-4 py-2 border rounded-lg hover:bg-gray-50 text-gray-700">
                  Previous
                </button>
                {[1, 2].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 border rounded-lg ${
                      page === 1
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 text-gray-700">
                  Next
                </button>
              </nav>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;