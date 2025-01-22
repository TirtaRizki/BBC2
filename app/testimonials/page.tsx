'use client';

import React from 'react';
import { Star, Clock } from 'lucide-react';

const TestimonialPage = () => {
  const testimonials = [
    {
        name: 'John Doe',
      role: 'Verified Buyer',
      review:
        'Amazing quality and service! The shoes were exactly as described and the authentication process gave me peace of mind.',
      date: '2 weeks ago',
      rating: 5,
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
    <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.review}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        </div>
    </div>
  );
};

export default TestimonialPage;