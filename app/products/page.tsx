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
  );
};

export default ProductPage;
