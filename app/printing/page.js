'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Upload, FileText, Check, MapPin, Clock, Phone, Mail, User, ChevronDown, Loader } from 'lucide-react';

export default function PrintingBooking() {
  const [currentStep, setCurrentStep] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Print configuration
  const [colorMode, setColorMode] = useState('bw');
  const [sides, setSides] = useState('single');
  const [paperSize, setPaperSize] = useState('a4');
  const [copies, setCopies] = useState(1);
  
  // Delivery
  const [deliveryMethod, setDeliveryMethod] = useState(null);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  
  // Customer details
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  const fileInputRef = useRef(null);
  const bookingRef = useRef(null);

  // Calculate price
  const calculatePrice = () => {
    if (!uploadedFile) return 0;
    const basePrice = colorMode === 'color' ? 2 : 1;
    const sidesMultiplier = sides === 'double' ? 0.75 : 1;
    const sizeMultiplier = paperSize === 'a3' ? 1.5 : 1;
    const deliveryFee = deliveryMethod === 'delivery' ? 5 : 0;
    
    return ((basePrice * pageCount * sidesMultiplier * sizeMultiplier * copies) + deliveryFee).toFixed(2);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type === 'application/pdf') {
      setUploadedFile(file);
      // Simulate page count detection
      const simulatedPages = Math.floor(Math.random() * 20) + 1;
      setPageCount(simulatedPages);
      setCurrentStep(1);
    }
  };

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleConfirmOrder = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      alert('Order confirmed! You will receive a confirmation email shortly.');
      setIsProcessing(false);
    }, 2000);
  };

  const steps = [
    { number: 1, title: 'Upload', completed: uploadedFile !== null },
    { number: 2, title: 'Configure', completed: currentStep > 1 },
    { number: 3, title: 'Delivery', completed: deliveryMethod !== null },
    { number: 4, title: 'Details', completed: customerName && customerEmail && customerPhone },
  ];

  return (
    <>
      <Header />
      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-6xl lg:text-8xl font-bold text-white glow-text leading-tight animate-fade-in-up">
                Print. Upload. Receive.
              </h1>
              <div className="w-32 h-px bg-white mx-auto glow-border animate-width-expand"></div>
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed animate-fade-in-up-delay">
                Upload your documents, choose your print options, and get them delivered or ready for pickup at Doha Mall.
              </p>
              <div className="pt-8">
                <button
                  onClick={scrollToBooking}
                  className="group relative inline-flex items-center justify-center px-12 py-5 bg-black border-2 border-white text-white font-bold rounded-lg overflow-hidden text-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">Start Print Order</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/40" />
          </div>
        </section>

        {/* Booking Interface */}
        <section ref={bookingRef} className="py-24 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Progress Steps */}
              <div className="mb-16">
                <div className="flex items-center justify-center space-x-4 md:space-x-8">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          step.completed 
                            ? 'border-white bg-white text-black glow-border' 
                            : currentStep >= index 
                              ? 'border-white text-white' 
                              : 'border-white/30 text-white/30'
                        }`}>
                          {step.completed ? (
                            <Check className="w-6 h-6" />
                          ) : (
                            <span className="font-bold">{step.number}</span>
                          )}
                        </div>
                        <span className={`text-sm mt-2 transition-colors ${
                          currentStep >= index ? 'text-white' : 'text-white/30'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-16 md:w-24 h-px mx-4 transition-colors ${
                          currentStep > index ? 'bg-white' : 'bg-white/30'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Step 1: Upload Document */}
                  <div className={`transition-all duration-500 ${currentStep >= 0 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                    <h2 className="text-3xl font-bold text-white mb-6 glow-text-sm">1. Upload Document</h2>
                    
                    {!uploadedFile ? (
                      <div
                        className={`relative border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition-all duration-300 ${
                          dragActive 
                            ? 'border-white bg-white/10 scale-[1.02]' 
                            : 'border-white/30 hover:border-white/50 hover:bg-white/5'
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className={`w-16 h-16 mx-auto mb-4 transition-all ${dragActive ? 'text-white scale-110' : 'text-white/50'}`} />
                        <p className="text-xl text-white mb-2">Drop your PDF here or click to upload</p>
                        <p className="text-sm text-white/50">PDF only • Max 50MB</p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="application/pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <div className="bg-white/5 border border-white/20 rounded-xl p-6 glow-border">
                        <div className="flex items-start space-x-4">
                          <FileText className="w-8 h-8 text-white flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-white font-semibold mb-1">{uploadedFile.name}</p>
                            <p className="text-white/60 text-sm">{pageCount} pages • {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                            <div className="w-full h-1 bg-white/20 rounded-full mt-3 overflow-hidden">
                              <div className="h-full bg-white animate-width-expand"></div>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setUploadedFile(null);
                              setPageCount(0);
                              setCurrentStep(0);
                            }}
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step 2: Print Configuration */}
                  {uploadedFile && (
                    <div className={`transition-all duration-500 ${currentStep >= 1 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                      <h2 className="text-3xl font-bold text-white mb-6 glow-text-sm">2. Print Configuration</h2>
                      
                      <div className="space-y-6">
                        {/* Color Mode */}
                        <div>
                          <label className="text-white/70 text-sm mb-3 block">Print Mode</label>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { value: 'bw', label: 'Black & White' },
                              { value: 'color', label: 'Color' }
                            ].map(option => (
                              <button
                                key={option.value}
                                onClick={() => {
                                  setColorMode(option.value);
                                  if (currentStep < 2) setCurrentStep(2);
                                }}
                                className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                                  colorMode === option.value
                                    ? 'bg-white text-black border-white'
                                    : 'bg-black text-white border-white/20 hover:border-white/40'
                                }`}
                              >
                                <span className="font-semibold">{option.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Sides */}
                        <div>
                          <label className="text-white/70 text-sm mb-3 block">Printing Sides</label>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { value: 'single', label: 'Single-Sided' },
                              { value: 'double', label: 'Double-Sided' }
                            ].map(option => (
                              <button
                                key={option.value}
                                onClick={() => setSides(option.value)}
                                className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                                  sides === option.value
                                    ? 'bg-white text-black border-white'
                                    : 'bg-black text-white border-white/20 hover:border-white/40'
                                }`}
                              >
                                <span className="font-semibold">{option.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Paper Size */}
                        <div>
                          <label className="text-white/70 text-sm mb-3 block">Paper Size</label>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { value: 'a4', label: 'A4' },
                              { value: 'a3', label: 'A3' }
                            ].map(option => (
                              <button
                                key={option.value}
                                onClick={() => setPaperSize(option.value)}
                                className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                                  paperSize === option.value
                                    ? 'bg-white text-black border-white'
                                    : 'bg-black text-white border-white/20 hover:border-white/40'
                                }`}
                              >
                                <span className="font-semibold">{option.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Copies */}
                        <div>
                          <label className="text-white/70 text-sm mb-3 block">Number of Copies</label>
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => setCopies(Math.max(1, copies - 1))}
                              className="w-12 h-12 border-2 border-white/20 hover:border-white rounded-lg text-white transition-all"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={copies}
                              onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
                              className="flex-1 bg-white/5 border-2 border-white/20 rounded-lg px-6 py-3 text-white text-center text-xl font-bold focus:outline-none focus:border-white transition-colors"
                            />
                            <button
                              onClick={() => setCopies(copies + 1)}
                              className="w-12 h-12 border-2 border-white/20 hover:border-white rounded-lg text-white transition-all"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Delivery Method */}
                  {currentStep >= 2 && (
                    <div className="transition-all duration-500">
                      <h2 className="text-3xl font-bold text-white mb-6 glow-text-sm">3. Delivery or Pickup</h2>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <button
                          onClick={() => {
                            setDeliveryMethod('delivery');
                            if (currentStep < 3) setCurrentStep(3);
                          }}
                          className={`p-8 rounded-xl border-2 text-left transition-all duration-300 ${
                            deliveryMethod === 'delivery'
                              ? 'bg-white text-black border-white scale-[1.02]'
                              : 'bg-black text-white border-white/20 hover:border-white/40'
                          }`}
                        >
                          <MapPin className={`w-8 h-8 mb-4 ${deliveryMethod === 'delivery' ? 'text-black' : 'text-white'}`} />
                          <h3 className="text-xl font-bold mb-2">Home Delivery</h3>
                          <p className={deliveryMethod === 'delivery' ? 'text-black/70' : 'text-white/70'}>
                            Get your prints delivered to your doorstep
                          </p>
                        </button>

                        <button
                          onClick={() => {
                            setDeliveryMethod('pickup');
                            if (currentStep < 3) setCurrentStep(3);
                          }}
                          className={`p-8 rounded-xl border-2 text-left transition-all duration-300 ${
                            deliveryMethod === 'pickup'
                              ? 'bg-white text-black border-white scale-[1.02]'
                              : 'bg-black text-white border-white/20 hover:border-white/40'
                          }`}
                        >
                          <Clock className={`w-8 h-8 mb-4 ${deliveryMethod === 'pickup' ? 'text-black' : 'text-white'}`} />
                          <h3 className="text-xl font-bold mb-2">Pickup from Doha Mall</h3>
                          <p className={deliveryMethod === 'pickup' ? 'text-black/70' : 'text-white/70'}>
                            Collect from our printing studio
                          </p>
                        </button>
                      </div>

                      {/* Delivery Details */}
                      {deliveryMethod === 'delivery' && (
                        <div className="space-y-4 animate-fade-in-up">
                          <div className="relative">
                            <input
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder="Delivery Address"
                              className="w-full bg-transparent border-b-2 border-white/20 focus:border-white px-2 py-3 text-white placeholder-white/40 transition-colors focus:outline-none"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Phone Number"
                              className="w-full bg-transparent border-b-2 border-white/20 focus:border-white px-2 py-3 text-white placeholder-white/40 transition-colors focus:outline-none"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              value={deliveryTime}
                              onChange={(e) => setDeliveryTime(e.target.value)}
                              placeholder="Preferred Delivery Time (Optional)"
                              className="w-full bg-transparent border-b-2 border-white/20 focus:border-white px-2 py-3 text-white placeholder-white/40 transition-colors focus:outline-none"
                            />
                          </div>
                        </div>
                      )}

                      {/* Pickup Details */}
                      {deliveryMethod === 'pickup' && (
                        <div className="bg-white/5 border border-white/20 rounded-xl p-8 animate-fade-in-up">
                          <h4 className="text-xl font-bold text-white mb-4">Pickup Location</h4>
                          <p className="text-white/70 mb-4">
                            Blackpearl Printing Studio<br />
                            Doha Mall, Ground Floor<br />
                            Wellington, New Zealand
                          </p>
                          <div className="pt-4 border-t border-white/10">
                            <p className="text-sm text-white/50 mb-2">Business Hours:</p>
                            <p className="text-white">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p className="text-white">Sat: 10:00 AM - 4:00 PM</p>
                            <p className="text-white">Sun: Closed</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 4: Customer Details */}
                  {deliveryMethod && (
                    <div className="transition-all duration-500 animate-fade-in-up">
                      <h2 className="text-3xl font-bold text-white mb-6 glow-text-sm">4. Your Details</h2>
                      
                      <div className="space-y-6">
                        <div className="relative">
                          <User className="absolute left-0 top-3 w-5 h-5 text-white/40" />
                          <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="Full Name"
                            className="w-full bg-transparent border-b-2 border-white/20 focus:border-white pl-8 py-3 text-white placeholder-white/40 transition-colors focus:outline-none"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-0 top-3 w-5 h-5 text-white/40" />
                          <input
                            type="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            placeholder="Email Address"
                            className="w-full bg-transparent border-b-2 border-white/20 focus:border-white pl-8 py-3 text-white placeholder-white/40 transition-colors focus:outline-none"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-0 top-3 w-5 h-5 text-white/40" />
                          <input
                            type="tel"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            placeholder="Phone Number"
                            className="w-full bg-transparent border-b-2 border-white/20 focus:border-white pl-8 py-3 text-white placeholder-white/40 transition-colors focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Summary - Sticky Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 bg-white/5 border border-white/20 rounded-xl p-8 glow-border">
                    <h3 className="text-2xl font-bold text-white mb-6 glow-text-sm">Order Summary</h3>
                    
                    {uploadedFile ? (
                      <div className="space-y-4">
                        <div className="pb-4 border-b border-white/10">
                          <p className="text-white/60 text-sm mb-1">Document</p>
                          <p className="text-white font-semibold truncate">{uploadedFile.name}</p>
                        </div>
                        
                        <div className="pb-4 border-b border-white/10">
                          <p className="text-white/60 text-sm mb-1">Pages</p>
                          <p className="text-white font-semibold">{pageCount} pages</p>
                        </div>
                        
                        {currentStep >= 1 && (
                          <>
                            <div className="pb-4 border-b border-white/10">
                              <p className="text-white/60 text-sm mb-1">Print Mode</p>
                              <p className="text-white font-semibold">{colorMode === 'color' ? 'Color' : 'Black & White'}</p>
                            </div>
                            
                            <div className="pb-4 border-b border-white/10">
                              <p className="text-white/60 text-sm mb-1">Sides</p>
                              <p className="text-white font-semibold">{sides === 'double' ? 'Double-Sided' : 'Single-Sided'}</p>
                            </div>
                            
                            <div className="pb-4 border-b border-white/10">
                              <p className="text-white/60 text-sm mb-1">Paper Size</p>
                              <p className="text-white font-semibold">{paperSize.toUpperCase()}</p>
                            </div>
                            
                            <div className="pb-4 border-b border-white/10">
                              <p className="text-white/60 text-sm mb-1">Copies</p>
                              <p className="text-white font-semibold">{copies}</p>
                            </div>
                          </>
                        )}
                        
                        {deliveryMethod && (
                          <div className="pb-4 border-b border-white/10">
                            <p className="text-white/60 text-sm mb-1">Delivery</p>
                            <p className="text-white font-semibold">
                              {deliveryMethod === 'delivery' ? 'Home Delivery' : 'Pickup from Doha Mall'}
                            </p>
                          </div>
                        )}
                        
                        <div className="pt-4">
                          <p className="text-white/60 text-sm mb-2">Estimated Total</p>
                          <p className="text-4xl font-bold text-white glow-text">QAR {calculatePrice()}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-white/40 text-center py-8">Upload a document to get started</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              {customerName && customerEmail && customerPhone && (
                <div className="mt-16 text-center animate-fade-in-up">
                  <button
                    onClick={handleConfirmOrder}
                    disabled={isProcessing}
                    className={`group relative inline-flex items-center justify-center px-16 py-6 bg-white text-black font-bold rounded-lg overflow-hidden text-xl transition-all duration-300 glow-button ${
                      isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <Loader className="w-6 h-6 mr-3 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Confirm Print Order</span>
                    )}
                  </button>
                  <p className="text-white/50 text-sm mt-4">
                    Secure file handling. Professional print quality.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

