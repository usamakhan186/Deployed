"use client"
import React, { useState } from 'react';
import { Phone, Mail, Check, Minus,Plus, ChevronDown, InfoIcon, HelpCircle, Star} from 'lucide-react'


const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('financing-calculator').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="w-full bg-white overflow-hidden py-6">
      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-16 py-2">
          <div className="flex items-start justify-between">
            {/* Left Content */}
            <div className="w-[68%] pt-10">
              <h1 className="text-black text-[44px] font-bold leading-[1.2] tracking-tight mb-5">
                Financing without worries,
                <br />
                choices without compromise
              </h1>
              <p className="text-[#4A5568] text-lg mb-8 max-w-[90%] leading-relaxed">
                We can even arrange imported car financing, allowing you to
                choose from a wide range of cars across Europe.
              </p>
              <button
                onClick={scrollToCalculator}
                className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center gap-2 text-base font-medium"
              >
                I want a hire purchase <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Right Content - Image Section */}
            <div className="w-[55%] relative min-h-[500px]">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />

              {/* Floating UI Elements */}


              {/* Main Image Section */}
              <div className="relative h-full">
                <img
                  src="https://carvago.com/_next/image?url=%2Fimages%2Ffinancing-lp%2Fimg-hero-financing-2x.webp&w=1536&q=75"
                  alt="Car financing illustration"
                  className="w-full h-auto object-contain z-10 relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="px-4 pt-6">
          {/* Image Section for Mobile */}
          <div className="relative h-[280px] mb-6">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />

            {/* Floating UI Elements */}
            <div className="absolute top-4 right-4 w-28 h-14 bg-white rounded-lg shadow-lg opacity-90 z-20" />
            <div className="absolute top-24 right-8 w-28 h-14 bg-white rounded-lg shadow-lg opacity-90 z-20" />

            {/* Main Image */}
            <img
              src="https://carvago.com/_next/image?url=%2Fimages%2Ffinancing-lp%2Fimg-hero-financing-2x.webp&w=1536&q=75"
              alt="Car financing illustration"
              className="w-full h-full object-contain relative z-10"
            />
          </div>

          {/* Text Content */}
          <div className="mb-8">
            <h1 className="text-[#1A237E] text-[28px] font-bold leading-[1.2] tracking-tight mb-4">
              Financing without
              <br />
              worries, choices
              <br />
              without compromise
            </h1>
            <p className="text-[#4A5568] text-base leading-relaxed">
              We can even arrange imported car financing, allowing you to choose from a wide range of cars across Europe.
            </p>
          </div>

          {/* Button */}
          <button
            className="w-full bg-[#4355F9] text-white py-4 rounded-lg flex items-center justify-center gap-2 text-base font-medium mb-6"
          >
            I want a hire purchase <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};



const StatsSection = () => (
  <div className="bg-white ">
    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
      <div className="text-center">
        <h2 className="lg:text-6xl font-bold text-red-500 mb-2 pb-2">7.79 %</h2>
        <p className="text-gray-600">Interest rate from 7.79 %</p>
      </div>
      <div className="text-center">
        <h2 className="lg:text-6xl font-bold text-red-500  mb-2 pb-2">Simplicity</h2>
        <p className="text-gray-600">A transparent process</p>
      </div>
      <div className="text-center">
        <h2 className="lg:text-6xl font-bold text-red-500  mb-2 pb-2">87 %</h2>
        <p className="lg:text-gray-600">Application success rate up to 87 %</p>
      </div>
    </div>
  </div>
);

const FinanceCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState(200);
  const [paybackPeriod, setPaybackPeriod] = useState(48);
  const [downPayment, setDownPayment] = useState(30);

  const calculateLoanDetails = () => {
    const carPrice = 11601;
    const downPaymentAmount = (carPrice * downPayment) / 100;
    const loanAmount = carPrice - downPaymentAmount;
    return {
      downPaymentAmount: downPaymentAmount.toFixed(0),
      loanAmount: loanAmount.toFixed(0)
    };
  };

  const handleSliderChange = (e, setValue) => {
    const value = Number(e.target.value);
    const min = Number(e.target.min);
    const max = Number(e.target.max);
    const progress = ((value - min) / (max - min)) * 100;
    e.target.style.setProperty('--range-progress', `${progress}%`);
    setValue(value);
  };

  return (
    <div id="financing-calculator" className="w-full min-h-screen bg-white py-12 lg:py-16 px-4 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24 items-start pt-10 ">
          {/* Left Content */}
          <div className="lg:w-[360px] mb-10 lg:mb-0 ml-32 ">
            <h1 className="text-[32px] lg:text-[40px] font-bold text-black leading-[1.2]">
              Pick your payment
              <br />
              plan and choose your

              car
            </h1>
            {/* Arrow */}
            <div className="hidden lg:block  ml-16 mb-72 bg-red ">
              <svg
                viewBox="0 0 60 80"

                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main curved line with exact downward curve */}
                <path
                  d="M10 10 C 10 30, 20 50, 45 65"
                  stroke="#EF4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Sharp arrow head */}
                <path
                  d="M38 60 L 45 65 L 40 55"
                  stroke="#EF4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Calculator Card */}
          <div className="lg:flex-1 w-full max-w-[640px] ml-28">
            <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#4355F9]/10 rounded-lg">
                    <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="none">
                      <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6 8h8M6 12h6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-gray-600">Fair loans approved within 1 hour</span>
                </div>
                <img
                  src="/leasing-service.svg"
                  alt="Leasing Service"
                  className="h-8"
                />
              </div>

              {/* Monthly Payment */}
              <div className="mb-10">
                <div className="flex justify-between mb-3">
                  <span className="text-[14px] text-[#64748B]">Monthly payment</span>
                  <span className="text-[14px] font-semibold">€{monthlyPayment}</span>
                </div>
                <div className="slider-container">
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    value={monthlyPayment}
                    onChange={(e) => handleSliderChange(e, setMonthlyPayment)}
                    className="range-slider"
                  />
                </div>
              </div>


              {/* Payback Period */}
              <div className="mb-10">
                <div className="flex justify-between mb-3">
                  <span className="text-[14px] text-[#64748B]">Payback period</span>
                  <span className="text-[14px] font-semibold">{paybackPeriod} months</span>
                </div>
                <div className="slider-container">
                  <input
                    type="range"
                    min="6"
                    max="72"
                    step="6"
                    value={paybackPeriod}
                    onChange={(e) => setPaybackPeriod(Number(e.target.value))}
                    className="range-slider"
                    style={{
                      background: `linear-gradient(to right, rgb(239 68 68) ${(paybackPeriod - 6) / (72 - 6) * 100}%, #E2E8F0 ${(paybackPeriod - 6) / (72 - 6) * 100}%)`
                    }}
                  />
                  <div className="flex justify-between mt-2 px-0.5">
                    {[6, 12, 24, 36, 48, 60, 72].map(month => (
                      <span key={month} className="text-[12px] text-[#94A3B8]">{month}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Down Payment */}
              <div className="mb-10">
                <div className="flex justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[14px] text-[#64748B]">Down payment (%)</span>
                    <HelpCircle className="w-4 h-4 text-[#94A3B8]" />
                  </div>
                  <span className="text-[14px] font-semibold">
                    {downPayment}% = €{calculateLoanDetails().downPaymentAmount}
                  </span>
                </div>
                <div className="slider-container">
                  <input
                    type="range"
                    min="20"
                    max="90"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="range-slider"
                    style={{
                      background: `linear-gradient(to right, rgb(239 68 68) ${(downPayment - 20) / (90 - 20) * 100}%, #E2E8F0 ${(downPayment - 20) / (90 - 20) * 100}%)`
                    }}
                  />
                  <div className="flex justify-between mt-2 px-0.5">
                    {['20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'].map(percent => (
                      <span key={percent} className="text-[12px] text-[#94A3B8]">{percent}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Loan Details */}
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#64748B]">Interest rate / APR</span>
                  <span className="font-semibold">8.44% / 8.8%</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#64748B]">Loan Amount</span>
                  <span className="font-semibold">€{calculateLoanDetails().loanAmount}</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-red-500 font-medium">Maximum car price</span>
                  <span className="font-semibold">€11,601</span>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[12px] leading-[1.6] text-[#94A3B8]">
                Fast Cars Österreich GmbH and LSG LEASING-SERVICE GmbH are exclusively brokers for
                leasing and hire purchase financing. The calculation is not a binding offer, but only a non-binding
                proposal from Carvago Österreich GmbH, which is only intended to serve as a guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





const ComparisonTable = () => {
  const features = [
    {
      label: 'Available cars',
      fastCars: 'Unlimited selection from vehicles from all over Europe.',
      usual: 'Cars registered in the Czech Republic only.',
      icon: 'car'
    },
    {
      label: 'Process',
      fastCars: 'We will sort out the financing right at the time of purchase. You will learn right away how much you can borrow.',
      usual: 'Before choosing your car, you need to check if and how much you can borrow from the bank.',
      icon: 'process'
    },
    {
      label: 'Time',
      fastCars: 'Online application form, approval in minutes.',
      usual: 'At least 3 visits to the bank, approval within days.',
      icon: 'time'
    },
    {
      label: 'Convenience',
      fastCars: 'Everything is done online from the comfort of your home.',
      usual: 'You\'ll spend a lot of time visiting the bank.',
      icon: 'convenience'
    },
    {
      label: 'Financing of services',
      fastCars: 'We will arrange the car financing, including services.',
      usual: 'The bank will only loan the price of the car itself.',
      icon: 'finance'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why finance through Fast Cars?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of car financing with our premium service
          </p>
        </div>

        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-50 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-50 rounded-full blur-2xl" />

          {/* Main Content */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b border-gray-100">
              <div className="text-lg font-semibold text-gray-400">Feature Comparison</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-red-50 rounded-full">
                  <Star className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="text-lg font-semibold text-red-500">Fast Cars</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-lg font-medium text-gray-400">Traditional Method</span>
              </div>
            </div>

            {/* Features */}
            <div className="divide-y divide-gray-100">
              {features.map((feature, index) => (
                <div 
                  key={feature.label}
                  className="grid grid-cols-3 gap-4 p-6 group hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="font-semibold text-gray-900">{feature.label}</div>
                  
                  <div className="relative">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white group-hover:bg-red-50 transition-colors duration-300 shadow-sm">
                      <Check className="w-5 h-5 mt-1 text-red-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature.fastCars}</span>
                      <div className="absolute inset-0 border border-transparent group-hover:border-red-100 rounded-xl transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4">
                    <Minus className="w-5 h-5 mt-1 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-500">{feature.usual}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2 text-red-500 font-medium">
                  <Check className="w-5 h-5" />
                  Premium Features
                </div>
                <div className="flex items-center gap-2 text-red-500 font-medium">
                  <Check className="w-5 h-5" />
                  24/7 Support
                </div>
                <div className="flex items-center gap-2 text-red-500 font-medium">
                  <Check className="w-5 h-5" />
                  Fast Approval
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const ProcessSteps = () => (
  <div className="bg-white py-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How does Fast Car financing work?</h2>
      <div className="grid grid-cols-3 gap-8">
        {[
          {
            step: '01.',
            title: "You'll choose your car.",
            description: 'Choose from our wide selection of more than 1,000,000 verified cars from all over Europe and click the "Buy" button.',
            image: '/1.png'
          },
          {
            step: '02.',
            title: 'Fill in the online application',
            description: 'Next, click the "I am interested in financing" button and fill out the application. Well take care of the rest',
            image: '/2.png'
          },
          {
            step: '03.',
            title: 'We will send you a quote',
            description: 'We will send your application to the lender for review before letting you know your specific financing options.',
            image: '/3.png'
          }
        ].map((step) => (
          <div key={step.step} className="text-center">
            <div className="mb-4">
              <img src={step.image} alt={step.title} className="w-20 h-20 rounded-full mx-auto" />
            </div>
            <h3 className="text-gray-500 mb-2">{step.step}</h3>
            <h4 className="font-bold mb-2">{step.title}</h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className={`w-full text-left p-6 bg-white rounded-2xl flex items-center justify-between transition-all duration-300 group hover:shadow-lg ${
        isOpen ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <span className={`font-semibold text-lg ${isOpen ? 'text-red-500' : 'text-gray-800'}`}>
        {question}
      </span>
      <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        {isOpen ? (
          <Minus className="w-6 h-6 text-red-500" />
        ) : (
          <Plus className="w-6 h-6 text-gray-400 group-hover:text-red-500" />
        )}
      </div>
    </button>
    {/* Answer Panel */}
    <div
      className={`overflow-hidden transition-all duration-300 bg-white rounded-2xl mt-2 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="p-6 text-gray-600 leading-relaxed">{answer}</div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Can I terminate the loan agreement prematurely?",
      answer: "Of course, you can. The easiest way is to call the Customer Service of the financial institution and express your interest in the early termination of the loan agreement. They will send you the necessary documents, the final calculation, and advise you on how to proceed."
    },
    {
      question: "Can I finance a vehicle of any age?",
      answer: "With Fast Cars, you can finance a vehicle up to a maximum of 10 years from the first registration. In the case of an older vehicle, the vehicle must be paid for in cash."
    },
    {
      question: "What documents do I need for financing?",
      answer: "You'll need: Valid ID, Proof of income (last 3 months), Proof of address, Bank statements (last 3 months). For self-employed individuals, additional documentation may be required."
    },
    {
      question: "What is the maximum loan amount available?",
      answer: "The maximum loan amount depends on various factors including your income, credit history, and the vehicle's value. We offer flexible financing options up to €100,000 for qualified applicants."
    },
    {
      question: "Is there a minimum down payment required?",
      answer: "Yes, typically we require a minimum down payment of 20% of the vehicle's purchase price. However, this may vary based on your credit profile and the specific financing program."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about our car financing services</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Need Advice Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Do you need advice?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Call Us Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 rounded-full">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <div className="font-medium text-gray-500 mb-1">Call us</div>
                  <a href="tel:+420246034700" className="text-lg font-semibold text-gray-900 hover:text-red-500 transition-colors">
                    +420 246 034 700
                  </a>
                  <div className="text-sm text-gray-500 mt-1">Mo-Su 8 am-8 pm</div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 rounded-full">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <div className="font-medium text-gray-500 mb-1">Email</div>
                  <a href="mailto:financing@fastcars.com" className="text-lg font-semibold text-gray-900 hover:text-red-500 transition-colors">
                    financing@fastcars.com
                  </a>
                  <div className="text-sm text-gray-500 mt-1">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const CarFinancingPage = () => (
  <div className="min-h-screen">
    <HeroSection />
    <StatsSection />
    <FinanceCalculator />

    <ComparisonTable />
    <ProcessSteps />
    <FAQ />
  </div>
);

export default CarFinancingPage;