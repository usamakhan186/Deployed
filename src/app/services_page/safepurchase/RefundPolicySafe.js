"use client"
import React, { useState } from 'react';
import { Shield, CreditCard, Clock, ArrowLeft, CheckCircle, HelpCircle, AlertTriangle } from 'lucide-react';

const RefundPolicyPage = () => {
  const [activeTab, setActiveTab] = useState('policy');
  const [isRefundFormOpen, setIsRefundFormOpen] = useState(false);
  
  const safetyFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Secure Transactions",
      description: "All payments are encrypted using industry-standard SSL technology"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-red-500" />,
      title: "Protected Payments",
      description: "Your payment details are never stored on our servers"
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: "30-Day Guarantee",
      description: "Full refund available within 30 days of purchase"
    }
  ];

  const refundSteps = [
    {
      step: 1,
      title: "Contact Support",
      description: "Reach out to our customer service team through the refund form below"
    },
    {
      step: 2,
      title: "Explain Your Case",
      description: "Provide details about your purchase and reason for refund"
    },
    {
      step: 3,
      title: "Verification",
      description: "Our team will review your request within 24-48 hours"
    },
    {
      step: 4,
      title: "Refund Processing",
      description: "Once approved, refunds are processed within 5-7 business days"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Refund Policy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We stand behind our products with a comprehensive refund policy to ensure your complete satisfaction
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-center space-x-4 border-b">
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === 'policy' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('policy')}
          >
            Refund Policy
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === 'safety' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('safety')}
          >
            Safe Purchase
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'policy' ? (
          <div className="space-y-12">
            {/* Policy Overview */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Our Refund Policy</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  We offer a 30-day money-back guarantee on all our products. If you're not completely satisfied with your purchase, we'll gladly refund your money, no questions asked.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">What's Covered:</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Full product price refund within 30 days of purchase</li>
                  <li>Damaged or defective products</li>
                  <li>Products not matching the description</li>
                  <li>Incorrect items received</li>
                </ul>
              </div>
            </div>

            {/* Refund Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {refundSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-red-500 font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Refund Request Form */}
            <div className="bg-white rounded-lg shadow-md p-8 flex justify-between ">
              <h2 className="text-2xl font-bold mb-6">Request a Refund</h2>
              {!isRefundFormOpen ? (
                <button
                  onClick={() => setIsRefundFormOpen(true)}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  Start Refund Request
                </button>
              ) : (
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your order number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Refund
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                      <option>Select a reason</option>
                      <option>Product not as described</option>
                      <option>Received wrong item</option>
                      <option>Product damaged</option>
                      <option>Changed my mind</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      rows="4"
                      placeholder="Please provide any additional details"
                    ></textarea>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsRefundFormOpen(false)}
                      className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Safe Purchase Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Security Certifications */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Security Certifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex items-center justify-center p-4 border rounded-lg">
                  <img src="/api/placeholder/120/60" alt="SSL Certificate" className="max-h-12" />
                </div>
                <div className="flex items-center justify-center p-4 border rounded-lg">
                  <img src="/api/placeholder/120/60" alt="PCI Compliance" className="max-h-12" />
                </div>
                <div className="flex items-center justify-center p-4 border rounded-lg">
                  <img src="/api/placeholder/120/60" alt="Norton Secured" className="max-h-12" />
                </div>
                <div className="flex items-center justify-center p-4 border rounded-lg">
                  <img src="/api/placeholder/120/60" alt="McAfee Secure" className="max-h-12" />
                </div>
              </div>
            </div>

            {/* Purchase Protection */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Purchase Protection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What's Protected:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span>100% Payment Security</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span>Identity Protection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span>Fraud Prevention</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Not Covered:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                      <span>Sharing account credentials</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                      <span>Unauthorized access due to negligence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Support */}
            <div className="bg-red-50 rounded-lg p-8">
              <div className="text-center">
                <HelpCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                <p className="text-gray-600 mb-6">
                  Our support team is available 24/7 to assist you with any questions about our safe purchase program
                </p>
                <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long does it take to process a refund?",
                answer: "Refunds are typically processed within 5-7 business days after approval."
              },
              {
                question: "Can I get a refund after 30 days?",
                answer: "Refund requests after 30 days are reviewed on a case-by-case basis."
              },
              {
                question: "What payment methods are supported for refunds?",
                answer: "We process refunds to the original payment method used for the purchase."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;