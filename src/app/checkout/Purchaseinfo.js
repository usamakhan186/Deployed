
"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Purchaseinfo = () => {
   
    const [currentSlide, setCurrentSlide] = useState(1);
    
    
    return (
        
        <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">How to make a purchase</h2>
                <button className="text-red-500 hover:text-red-600">
                    Less
                </button>
            </div>
            
            <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                    <img src="/1.png" alt="Purchase process" className="w-32 rounded-full" />
                </div>
                <div>
                    <p className="text-gray-600">
                        You are just a few steps away from your new car! What will probably interest you the most - 
                        <span className="font-medium"> the total price already includes everything you need to bring your new car</span>, 
                        MOT and registration. If you do not want any additional services such as financing, 
                        insurance, warranty extension, air conditioning cleaning and others, 
                        <span className="font-medium"> you will not pay an extra euro</span>.
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                            key={dot}
                            className={`w-2 h-2 rounded-full ${
                                currentSlide === dot ? 'bg-red-500' : 'bg-gray-200'
                            }`}
                        />
                    ))}
                </div>
                <div className="text-gray-500">
                    1 / 5
                </div>
                <div className="flex gap-2">
                    <button 
                        className="p-1 rounded-lg hover:bg-gray-100"
                        onClick={() => setCurrentSlide(Math.max(1, currentSlide - 1))}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                        className="p-1 rounded-lg hover:bg-gray-100"
                        onClick={() => setCurrentSlide(Math.min(5, currentSlide + 1))}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};
  


export default Purchaseinfo