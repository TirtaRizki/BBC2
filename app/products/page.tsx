'use client';

import React from 'react';
import { Search, Filter, ChevronDown, Star, ArrowUpDown } from 'lucide-react';

const ProductPage = () => {
  const [activeFilters, setActiveFilters] = React.useState({
    brands: [],
    sizes: [],
    conditions: [],
    priceRange: [0, 5000000]
  });
  const [sortBy, setSortBy] = React.useState('newest');
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-blue-400 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4 text-black">Our Products</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-black"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5 bg" />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center px-4 py-2 border rounded-lg bg-black"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-black"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 text-black">
          {/* Filters Sidebar */}
          <div className={`md:w-64 bg-blue-300 p-6 rounded-lg shadow-sm ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="space-y-6">
              {/* Brand Filter */}
              <div>
                <h3 className="font-medium mb-4 text-black">Brand</h3>
                {['Nike', 'Adidas', 'Puma', 'New Balance'].map(brand => (
                  <label key={brand} className="flex items-center space-x-2 mb-2 text-black">
                    <input type="checkbox" className="rounded" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-medium mb-4 text-black">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[38, 39, 40, 41, 42, 43, 44, 45].map(size => (
                    <button
                      key={size}
                      className="px-3 py-2 border rounded-md hover:bg-gray-100 text-black"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div>
                <h3 className="font-medium mb-4 text-black">Condition</h3>
                {['Like New', 'Very Good', 'Good', 'Fair'].map(condition => (
                  <label key={condition} className="flex items-center space-x-2 mb-2 text-black">
                    <input type="checkbox" className="rounded" />
                    <span>{condition}</span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-4 text-black">Price Range</h3>
                <div className="space-y-4 ">
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    className="w-full " 
                  />
                  <div className="flex justify-between">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-20 px-2 py-1 border rounded"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-20 px-2 py-1 border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <div className="aspect-square bg-gray-200 rounded-t-lg"></div>
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Like New
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Nike Air Max 90</h4>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1">4.5</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Size 42</p>
                    <p className="text-gray-600 text-sm mb-4">Original - Complete Box</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">Rp 1.200.000</p>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600">
                        Add to Wish
                      </button>
                    </div>
                  </div>
                </div>
               ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2 text-black">
                <button className="px-4 py-2 border rounded-lg hover:bg-white ">Previous</button>
                {[1, 2].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 border rounded-lg ${
                      page === 1 ? 'bg-blue-500 text-black' : 'hover:bg-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 border rounded-lg hover:bg-white">Next</button>
              </div>
            </div>
          </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductPage;