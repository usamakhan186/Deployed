"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import car from '@/assets/car.jpg'

const HeroSection = () => {
  const formFields = [
    { label: "Make", placeholder: "Select make" },
    { label: "Model", placeholder: "Choose model" },
    { label: "Mileage", placeholder: "Select mileage" },
    { label: "Registration from", placeholder: "Select year" },
    { label: "Price up to", placeholder: "Select price" },
  ];

  const stats = [
    { value: 54000, label: "Cars traded" },
    { value: 50000, label: "Cars listed" },
    { value: 4500, label: "Reviews" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.value / 40);

      return setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(
              newCounters[index] + increment,
              stat.value
            );
          }
          return newCounters;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
<div
       className="bg-[#ffeded] min-h-screen relative flex flex-col bg-no-repeat bg-cover bg-[position:60%_center] sm:bg-center"
       style={{
         backgroundImage: `url(${car.src})`, // Use the imported image here
         backgroundSize: 'cover',
       }}

    >
      <div className="bg-zinc-600 bg-opacity-40 py-20 sm:py-8 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-32 pb-8 sm:pb-12 min-h-screen">
          <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0 h-full">
            {/* Left Column */}
            <div className="space-y-6 lg:space-y-8 text-white lg:flex-1">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                  We import cars, <br /> From Europe
                </h1>
                <p className="text-[#E4E4E4] text-sm sm:text-base max-w-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                </p>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-8 lg:gap-12 pt-3 sm:pt-5">
                {stats.map((stat, index) => (
                  <div key={index} className="min-w-[120px]">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                      {counters[index].toLocaleString()}+
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search Form */}
            <div className="bg-white bg-opacity-90 rounded-2xl p-4 sm:p-6 shadow-lg lg:w-[47%] w-full">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Personalize your search
                </h2>
                <div className="flex gap-1 bg-red-100 p-1 rounded-lg self-start">
                  <button className="bg-red-500 text-white px-4 py-1 rounded text-sm">
                    Used
                  </button>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
                {formFields.map((field) => (
                  <div key={field.label} className="space-y-1.5">
                    <label className="block text-gray-700 text-sm">
                      {field.label}
                    </label>
                    <div className="relative">
                      <select className="w-full border border-gray-200 rounded-lg p-2.5 appearance-none bg-white text-sm">
                        <option value="">{field.placeholder}</option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>
                ))}

                <div className="flex items-center">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300"
                    />
                    <span className="ml-2 text-gray-700 text-sm">
                      VAT deduction
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <button className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm">
                  Advanced search <ChevronDown size={16} />
                </button>
                <button className="w-full sm:w-auto bg-red-500 text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors text-sm">
                  1 043 923 Offers
                </button>
              </div>

              <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                <div className="text-xs sm:text-sm text-gray-600 mb-1">
                  Previous filters
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-900 truncate pr-4">
                    Abarth 124 Spider, Kms driven to 5 000 km, Up to €2,000,
                    First registration fr...
                  </span>
                  <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;