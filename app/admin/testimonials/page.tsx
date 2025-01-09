"use client"

import { Search, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react"

const TestimonialPage = () => {
    return (
        <main>
            <h1 className="text-2xl font-bold mb-4 text-black">Testimonials Management</h1>
            <div className="bg-white rounded-lg shadow-sm p-6">
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

