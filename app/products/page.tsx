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
                    <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
                </div>
                <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center justify-center px-4 py-2 border rounded-lg"
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

        {/* <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 text-black"> */}
          {/* Filters Sidebar */}
          {/* <div className={`md:w-64 bg-blue-300 p-6 rounded-lg shadow-sm ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="space-y-6"> */}
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

    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 text-black">
          <div className={`md:w-64 bg-blue-300 p-6 rounded-lg shadow-sm ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="space-y-6"></div>
          </div>

          <div className="flex-1">
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Previous</button>
                {[1, 2].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 border rounded-lg ${
                      page === 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductPage;
