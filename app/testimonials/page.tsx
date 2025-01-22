'use client';

import React from 'react';
import { Star, Clock } from 'lucide-react';

const TestimonialPage = () => {
  const testimonials = [
    {
        
    },

  ];


return (
    <div className="min-h-screen bg-gray-50 pt-16">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">What Our Customers Say</h1>
          <div className="flex justify-center items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <p className="mt-2">4.8 out of 5 based on 400+ reviews</p>
    </div>
    </div>


    <div className="max-w-7xl mx-auto px-4 py-16">


        </div>
    </div>
  );
};

export default TestimonialPage;