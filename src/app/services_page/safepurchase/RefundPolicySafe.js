"use client"
import React, { useState } from 'react';
import { Phone, Mail, Check, Minus, ChevronDown, InfoIcon, HelpCircle } from 'lucide-react'


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
                    onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                    className="range-slider"
                    style={{
                      background: `linear-gradient(to right, rgb(239 68 68) ${monthlyPayment / 10}%, #E2E8F0 ${monthlyPayment / 10}%)`
                    }}
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


const ComparisonTable = () => (
  <div className="py-16 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Why finance through Fast Cars?</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border-b py-4 font-medium"></div>
        <div className="border-b py-4 font-medium text-center">Fast Cars</div>
        <div className="border-b py-4 font-medium text-center">The usual method</div>

        {[
          {
            label: 'Available cars',
            Fast: 'Unlimited selection from vehicles from all over Europe.',
            usual: 'Cars registered in the Czech Republic only.'
          },
          {
            label: 'Process',
            Fast: 'We will sort out the financing right at the time of purchase. You will learn right away how much you can borrow.',
            usual: 'Before choosing your car, you need to check if and how much you can borrow from the bank.'
          },
          {
            label: 'Time',
            Fast: 'Online application form, approval in minutes.',
            usual: 'At least 3 visits to the bank, approval within days.'
          }
        ].map((row) => (
          <React.Fragment key={row.label}>
            <div className="border-b py-4">{row.label}</div>
            <div className="border-b py-4 flex items-start gap-2">
              <Check className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{row.carvago}</span>
            </div>
            <div className="border-b py-4 flex items-start gap-2">
              <Minus className="text-gray-400 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{row.usual}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

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

const FAQ = () => (
  <div className="bg-white py-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {[
          'Can I terminate the loan agreement prematurely?',
          'Can I finance a vehicle of any age?'
        ].map((question) => (
          <button key={question} className="w-full bg-white border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50">
            <span>{question}</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Do you need advice?</h3>
        <div className="flex justify-center gap-8">
          <a href="tel:+420244034700" className="flex items-center gap-2 text-red-500">
            <Phone className="w-5 h-5" />
            +420 244 034 700
          </a>
          <a href="mailto:financing@fastcar.com" className="flex items-center gap-2 text-grey">
            <Mail className="w-5 h-5" />
            financing@fastcar.com
          </a>
        </div>
      </div>
    </div>
  </div>
);

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