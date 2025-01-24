"use client"

import { Search, Star, ThumbsDown, ThumbsUp, Package, Shield, Tag, Clock, Image, MapPin, Calendar, Award, MessageCircle, Share2, Flag, Edit, Trash2 } from "lucide-react";
import React, { useState } from "react"

const TestimonialPage = () => {
    const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

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

                {/* filter by shoe condition */}
                <select className="px-3 py-2 border rounded-lg text-gray-600">
                    <option value="">Shoe Condition</option>
                    <option value="like-new">Like New (90-100%)</option>
                    <option value="excellent">Excellent (80-89%)</option>
                    <option value="good">Good (70-79%)</option>
                    <option value="fair">Fair (Below 70%)</option>
                </select>

                {/* filter by shoe size */}
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
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="text-sm text-black">With Size Feedback</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="text-sm text-black">Local Pickups Only</span>
                </label>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                        <div>
                            <p className="font-medium text-black">Galih Pribadi Utomo</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Clock className="h-4 w-4" />
                                <span>Purchased 2 months ago</span>
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Verified Purchase</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">Overall Rating</span>
                    </div>
                </div>

                {/* Product Details */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-4">
                        <div className="h-20 w-20 bg-gray-200 rounded"></div>
                        <div>
                            <h3 className="font-medium text-black">Nike Air Jordan 1 Mid</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">Size: 42</span>
                                <span className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded">Condition: 85%</span>
                                <span className="text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded">Usage: 6 months</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 mb-4">
                    "Layanan dan kualitas yang luar biasa! Sepatu yang saya beli dalam kondisi
                    sangat baik dan persis seperti yang dijelaskan. Pasti akan membeli lagi!"
                </p>

                {/* Detailed Ratings */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-black" />
                        <span className="text-sm text-black">Condition: 4.5/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-black" />
                        <span className="text-sm text-black">Authenticity: 5/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-black" />
                        <span className="text-sm text-black">Value: 4/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-black" />
                        <span className="text-sm text-black">Comfort: 4.5/5</span>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="flex gap-2 mb-4">
                    <div className="h-20 w-20 bg-gray-200 rounded"></div>
                    <div className="h-20 w-20 bg-gray-200 rounded"></div>
                    <div className="h-20 w-20 bg-gray-200 rounded"></div>
                </div>

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
                        <button className="flex items-center gap-1 text-gray-600">
                            <MessageCircle className="h-4 w-4" />
                            <span>Comment (3)</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-600">
                            <Share2 className="h-4 w-4" />
                            <span>Share</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-600">
                            <Flag className="h-4 w-4" />
                            <span>Report</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <select className="border rounded px-2 py-1 text-sm text-black">
                            <option>Dipublikasikan</option>
                            <option>Tersembunyi</option>
                            <option>Menunggu</option>
                        </select>
                    </div>
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