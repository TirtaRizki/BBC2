"use client"

import { Search, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react"

const TestimonialPage = () => {
    return (
        <main className="bg-white rounded-lg shadow-sm p-6">
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
        </main>
    )
};

export default TestimonialPage;

