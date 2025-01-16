"use client"

import { Search, Star, ThumbsDown, ThumbsUp, Package, Shield, Tag, Clock, Image, MapPin, Calendar, Award, MessageCircle, Share2, Flag, Edit, Trash2 } from "lucide-react";
import React, { useState } from "react"

const TestimonialPage = () => {
    const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
    
    return (
        <main>
            <h1 className="text-2xl font-bold mb-4 text-black">Testimonials Management</h1>

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

            <div className="flex gap-4 mb-6">
                {/* Filter All Ratings */}
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
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                        <div>
                            <p className="font-medium text-black">Galih Pribadi Utomo</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className="h-5 w-5 text-yellow-400 fill-current"
                            />
                        ))}
                    </div>
                </div>
                <p className="text-gray-600 mb-4">
                    "Layanan dan kualitas yang luar biasa! Sepatu yang saya beli dalam kondisi
                    sangat baik dan persis seperti yang dijelaskan. Pasti akan membeli lagi!"
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex gap-4">
                        <button className="flex items-center gap-1 text-green-600 hover:text-green-700">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1 text-red-600 hover:text-red-700">
                            <ThumbsDown className="h-4 w-4" />
                            <span>Dislike</span>
                        </button>
                    </div>
                    <select className="border rounded px-2 py-1 text-sm text-black">
                        <option>Dipublikasikan</option>
                        <option>Tersembunyi</option>
                        <option>Menunggu</option>
                    </select>
                </div>
            </div>

            {/* User Testimoni */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                        <div>
                            <p className="font-medium text-black">Tirta Rizki Ramadan</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className="h-5 w-5 text-yellow-400 fill-current"
                            />
                        ))}
                    </div>
                </div>
                <p className="text-gray-600 mb-4">
                    "Layanan dan kualitas yang luar biasa! Sepatu yang saya beli dalam kondisi
                    sangat baik dan persis seperti yang dijelaskan. Pasti akan membeli lagi!"
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex gap-4">
                        <button className="flex items-center gap-1 text-green-600 hover:text-green-700">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1 text-red-600 hover:text-red-700">
                            <ThumbsDown className="h-4 w-4" />
                            <span>Dislike</span>
                        </button>
                    </div>
                    <select className="border rounded px-2 py-1 text-sm text-black">
                        <option>Dipublikasikan</option>
                        <option>Tersembunyi</option>
                        <option>Menunggu</option>
                    </select>
                </div>
            </div>

            {/* Next Pagination */}
            <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                    <p className="text-gray-500">Showing 1 of 10</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border rounded text-black">Sebelumnya</button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded">
                            Berikutnya
                        </button>
                    </div>
                </div>
            </div>
        </main>


    )
};

export default TestimonialPage;