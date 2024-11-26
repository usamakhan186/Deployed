"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { 
  CreditCard, 
  Lock, 
  Check,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

const CheckoutPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [saveCard, setSaveCard] = useState(false);

  // Get car details from URL params
  const carDetails = {
    id: searchParams.get('carId'),
    price: Number(searchParams.get('price')),
    make: searchParams.get('make'),
    model: searchParams.get('model'),
    year: searchParams.get('year'),
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lcmNlZGVzJTIwZTUzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    features: ['Sport Package', 'Premium Sound', 'Navigation'],
    location: 'Berlin, Germany',
    mileage: '5,000 km'
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!cardNumber || !expiry || !cvc || !name || !email) {
        alert('Please fill in all required fields');
        return;
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      router.push('/payment-success');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to car details
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Car Details Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">Vehicle Details</h2>
            
            <div className="relative aspect-video mb-6">
              <img
                src={carDetails.image}
                alt={`${carDetails.make} ${carDetails.model}`}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">
                  {carDetails.make} {carDetails.model}
                </h3>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[#FC4F3F]">
                    €{carDetails.price?.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="text-gray-600">
                <p>{carDetails.year} • {carDetails.mileage} • {carDetails.location}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {carDetails.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Form Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Lock className="w-4 h-4" />
              <span>Payments are secure and encrypted</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => {
                      const value = formatCardNumber(e.target.value);
                      if (value.length <= 19) setCardNumber(value);
                    }}
                    placeholder="1234 5678 9012 3456"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FC4F3F] focus:border-transparent outline-none transition-all"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Expiry and CVC */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry date
                  </label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => {
                      const value = formatExpiry(e.target.value);
                      if (value.length <= 5) setExpiry(value);
                    }}
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FC4F3F] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 3) setCvc(value);
                    }}
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FC4F3F] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name on card
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FC4F3F] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FC4F3F] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Save Card Checkbox */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${
                      saveCard ? 'bg-[#FC4F3F] border-[#FC4F3F]' : 'border-gray-300 group-hover:border-[#FC4F3F]'
                    }`}
                    onClick={() => setSaveCard(!saveCard)}
                  >
                    {saveCard && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="text-sm text-gray-700">Save card for future payments</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FC4F3F] hover:bg-[#DC2626] text-white font-semibold py-4 rounded-lg transition-all relative overflow-hidden disabled:opacity-70"
              >
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  <span>Pay €{carDetails.price?.toLocaleString()}</span>
                )}
              </button>

              {/* Payment Methods */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <img src="/api/placeholder/32/20" alt="Visa" className="h-6" />
                <img src="/api/placeholder/32/20" alt="Mastercard" className="h-6" />
                <img src="/api/placeholder/32/20" alt="Amex" className="h-6" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;