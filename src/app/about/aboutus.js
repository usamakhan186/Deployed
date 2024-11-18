// app/about/page.js
'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
const Stat = ({ number, label }) => (
  <div className="p-6 text-center transform transition-all hover:scale-105">
    <h3 className="text-4xl font-bold text-gray-900 mb-2">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const Value = ({ icon, title, description }) => (
  <div className="p-6 text-center bg-white rounded-lg shadow-lg transform transition-all hover:-translate-y-1">
    <div className="w-16 h-16 bg-[#ef4444] rounded-full mx-auto mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutPage = () => {
  const stats = [
    { number: "54,000+", label: "Cars Successfully Traded" },
    { number: "50,000+", label: "Active Listings" },
    { number: "4,500+", label: "Customer Reviews" }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Transparency",
      description: "Clear pricing and honest communication throughout your journey"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Efficiency",
      description: "Streamlined processes for quick and reliable deliveries"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security",
      description: "Safe and secure transactions with verified sellers"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Transforming European Car Import Experience
          </h1>
          <p className="text-xl max-w-2xl">
            Leading the way in transparent, efficient, and reliable European car imports with over 54,000 successful deliveries.
          </p>
        </div>
      </header>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Since our establishment, Fast Car has been revolutionizing the European car import industry. 
                We've built our reputation on transparency, reliability, and customer satisfaction, 
                making European car imports accessible to everyone.
              </p>
              <p className="text-gray-600">
                Our mission is to simplify the car import process while maintaining the highest standards 
                of quality and service. We've developed robust partnerships across Europe to ensure 
                seamless transactions and reliable deliveries.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/api/placeholder/600/400"
                alt="Our team at work"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Value key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={`/api/placeholder/200/200`}
                    alt={`Team member ${index + 1}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="text-gray-600">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Import Your Dream Car?</h2>
          <p className="mb-8 text-lg text-black">
            Get in touch with our team and start your journey today.
          </p>
          <Link href="/contact"
          >
            <button className="bg-[#ef4444] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#7e2222] transition-colors">
            Contact Us
          </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;