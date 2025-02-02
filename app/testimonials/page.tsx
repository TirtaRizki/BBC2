'use client';

import React from 'react';
import { Search, Star, Clock, ThumbsUp, ThumbsDown } from 'lucide-react';

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
    {
      name: 'Galih Pribadi Utomo',
      role: 'Verified Buyer',
      review:
        'Layanan dan kualitas yang luar biasa! Sepatu yang saya beli dalam kondisi sangat baik dan persis seperti yang dijelaskan. Pasti akan membeli lagi!',
      date: '2 months ago',
      rating: 5,
    },
    {
      name: 'Tirta Rizki Ramadan',
      role: 'Verified Buyer',
      review:
        'Pengalaman berbelanja yang sangat memuaskan. Sepatu datang tepat waktu dan dalam kondisi sempurna.',
      date: '1 month ago',
      rating: 4,
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Testimonials Management</h1>

      {/* Search and basic filters */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search testimonials..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border-0 ring-1 ring-gray-200"
          />
        </div>
      </div>

      {/* Enhanced Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <select className="px-3 py-2 border rounded-lg text-gray-600">
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>

        {/* Filter All Status */}
        <select className="px-3 py-2 border rounded-lg text-gray-600">
          <option value="">All Status</option>
          <option value="published">Dipublikasikan</option>
          <option value="hidden">Tersembunyi</option>
          <option value="pending">Menunggu</option>
        </select>

        {/* Filter by shoe condition */}
        <select className="px-3 py-2 border rounded-lg text-gray-600">
          <option value="">Shoe Condition</option>
          <option value="like-new">Like New (90-100%)</option>
          <option value="excellent">Excellent (80-89%)</option>
          <option value="good">Good (70-79%)</option>
          <option value="fair">Fair (Below 70%)</option>
        </select>

        {/* Filter by shoe size */}
        <select className="px-3 py-2 border rounded-lg text-gray-600">
          <option value="">Size Range</option>
          <option value="36-37">36-37</option>
          <option value="38-39">38-39</option>
          <option value="40-41">40-41</option>
          <option value="42-43">42-43</option>
          <option value="44-45">44-45</option>
        </select>
      </div>

      {/* Filter Checkboxes */}
      <div className="flex flex-wrap gap-4 mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded text-blue-600" />
          <span className="text-sm text-black">Verified Purchases Only</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded text-blue-600" />
          <span className="text-sm text-black">With Photos</span>
        </label>
        <label className="flex items -center gap-2">
          <input type="checkbox" className="rounded text-blue-600" />
          <span className="text-sm text-black">With Size Feedback</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded text-blue-600" />
          <span className="text-sm text-black">Local Pickups Only</span>
        </label>
      </div>

      {/* Testimonials List */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium text-black">{testimonial.name}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{testimonial.date}</span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Verified Purchase</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-500">Overall Rating</span>
            </div>
          </div>
        ))}
      </div>

      {/* Next Pagination */}
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Showing 1 of {testimonials.length}</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded text-black">Sebelumnya</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Berikutnya</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialPage;