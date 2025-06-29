import React from 'react';
import { Sparkles, RotateCcw, Package, Clock, CheckCircle, AlertCircle, Download, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export default function ReturnsPage() {
  const handleAppDownload = () => {
    if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
      window.open('https://apps.apple.com/app/dritchwear', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.dritchwear.app', '_blank');
    }
  };

  const scrollToAppDownload = () => {
    const appSection = document.getElementById('app-download');
    if (appSection) {
      appSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <Sparkles className="h-8 w-8 text-brand-purple mr-2" />
                <span className="text-2xl font-bold text-gray-900">Dritchwear</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={scrollToAppDownload} className="text-gray-600 hover:text-brand-purple px-3 py-2 text-sm font-medium transition-colors">Shop</button>
                <button onClick={scrollToAppDownload} className="text-gray-600 hover:text-brand-purple px-3 py-2 text-sm font-medium transition-colors">Collections</button>
                <a href="/about" className="text-gray-600 hover:text-brand-purple px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="/contact" className="text-gray-600 hover:text-brand-purple px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={handleAppDownload} className="text-gray-600 hover:text-brand-purple transition-colors">
                <Download className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Returns &
              <span className="block text-yellow-300">Exchanges</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-slide-up">
              We want you to love your Dritchwear purchase. If you're not completely satisfied, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Return Policy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple return process within 2 days of receiving your order.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2-Day Window</h3>
              <p className="text-gray-600">
                Return or exchange items within 2 days of delivery. Items are no longer eligible for return after this period.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Pays Shipping</h3>
              <p className="text-gray-600">
                Customers are responsible for return shipping costs. We recommend using a trackable shipping method.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us First</h3>
              <p className="text-gray-600">
                To return an item, send us a message through our contact form or mobile app to initiate the return process.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">
                If there's a quality issue with your item, we'll replace it or provide a full refund within the return window.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Return Items</h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to return or exchange your Dritchwear items.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Send us a message through our contact form or mobile app within 2 days of receiving your order. Include your order number and reason for return.
              </p>
              <a
                href="/contact"
                className="bg-brand-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-purple-dark transition-colors duration-300 inline-block"
              >
                Contact Us
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Items</h3>
              <p className="text-gray-600 mb-6">
                Pack items in original packaging with tags attached. Include the return authorization number we provide and your order details.
              </p>
              <button
                onClick={handleAppDownload}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Get Help in App
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ship & Track</h3>
              <p className="text-gray-600 mb-6">
                Ship your package to our Nigeria address using a trackable method. You'll cover the shipping cost for returns.
              </p>
              <button
                onClick={handleAppDownload}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Track Return
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Return Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Return Conditions</h2>
            <p className="text-xl text-gray-600">
              To ensure a smooth return process, please review these requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Eligible for Return</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Items in original condition with tags attached</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Unworn, unwashed, and undamaged items</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Items returned within 2 days of delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Items in original packaging when possible</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Return authorization obtained from customer service</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Not Eligible for Return</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Items returned after 2 days of delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personalized or customized items</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Undergarments and swimwear (for hygiene reasons)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Items damaged by normal wear and tear</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Items without return authorization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Refund Information</h2>
            <p className="text-xl text-gray-600">
              Understanding how and when you'll receive your refund.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Refund Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-purple font-semibold">1-2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Days</h4>
                    <p className="text-gray-600">Processing time once we receive your return in Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-purple font-semibold">3-5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Days</h4>
                    <p className="text-gray-600">Refund appears in your original payment method</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-purple font-semibold">24h</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Store Credit</h4>
                    <p className="text-gray-600">Instant store credit option available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Return Shipping</h4>
                  <p className="text-gray-600 text-sm">
                    Customers cover the cost of return shipping to our Nigeria location. We recommend using a trackable service.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2-Day Limit</h4>
                  <p className="text-gray-600 text-sm">
                    Items are no longer eligible for return after 2 days of receiving your order. Contact us immediately if you need to return.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Required</h4>
                  <p className="text-gray-600 text-sm">
                    All returns must be initiated by contacting our customer service team first for authorization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nigeria Operations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nigeria Operations</h2>
            <p className="text-xl text-gray-600">
              Information about our Nigeria-based operations and shipping.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Standard shipping: 3-5 business days within Nigeria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Express shipping: 1-2 business days available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Overnight shipping option available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>International shipping: 7-14 business days</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Return Process</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contact us within 2 days of delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Customer pays return shipping to Nigeria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use trackable shipping method</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Refund processed after we receive items</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Need help with your return? Our customer service team in Nigeria is here to assist.
                </p>
                <a
                  href="/contact"
                  className="bg-brand-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-purple-dark transition-colors duration-300 inline-block"
                >
                  Contact Nigeria Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="app-download" className="py-20 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Download className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Manage Returns Easily</h2>
            <p className="text-xl text-purple-100 mb-8">
              Start returns, track status, and get instant support through our mobile app.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.dritchwear.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
            >
              <Download size={24} />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
            <a
              href="https://apps.apple.com/app/dritchwear"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
            >
              <Download size={24} />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-brand-purple mr-2" />
                <span className="text-2xl font-bold">Dritchwear</span>
              </div>
              <p className="text-gray-400 mb-4">
                Streetwear made for comfort, style, and everyday life.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/dritchwear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/dritchwear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://tiktok.com/@dritchwear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-black transition-colors"
                  aria-label="Follow us on TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/dritchwear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/dritchwear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={scrollToAppDownload} className="hover:text-white transition-colors">New Arrivals</button></li>
                <li><button onClick={scrollToAppDownload} className="hover:text-white transition-colors">Men's Collection</button></li>
                <li><button onClick={scrollToAppDownload} className="hover:text-white transition-colors">Women's Collection</button></li>
                <li><button onClick={scrollToAppDownload} className="hover:text-white transition-colors">Accessories</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/size-guide" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="/returns" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dritchwear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}