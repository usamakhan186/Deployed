"use client";
import React from "react";
import { Heart, ShieldCheck, RotateCcw, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FavoritesSection = () => {
  return (
    <section className="bg-[#FEF3F3] min-h-screen w-full py-12 px-4 md:py-16 md:px-8">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-[#1A2B49] text-2xl md:text-3xl font-bold mb-12">
          Favourite cars
        </h1>

        {/* Empty State Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 text-center">
          <div className="max-w-[280px] mx-auto">
            {/* Image container with fixed aspect ratio */}
            <div className="relative w-full aspect-square mb-6">
              <Image
                src="/favorite-cars.svg"
                alt="Favorite cars"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Information text */}
            <p className="text-gray mb-6">
              You add a car to favourites by clicking on a heart icon.
            </p>
            
            {/* CTA Button */}
            <Link href="/cars">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3.5 px-4 rounded-lg transition-colors text-sm font-medium">
                1 166 631 Offers
              </button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Money Back Guarantee */}
          <div className="bg-white p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#F8F9FF] rounded-lg">
                <RotateCcw className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 className="font-semibold text-red-500 mb-2">
                  Money back guarantee
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you don't fall in love with the vehicle, simply return it to us.
                </p>
              </div>
            </div>
          </div>

          {/* Safe Purchase */}
          <div className="bg-white p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#F8F9FF] rounded-lg">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 className="font-semibold text-red-500 mb-2">
                  Safe purchase
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We guarantee the technical condition of every vehicle sold.
                </p>
              </div>
            </div>
          </div>

          {/* 6-month Warranty */}
          <div className="bg-white p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#F8F9FF] rounded-lg">
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 className="font-semibold text-red-500 mb-2">
                  6-month warranty
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  In addition, with every car you receive an extended warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoritesSection;