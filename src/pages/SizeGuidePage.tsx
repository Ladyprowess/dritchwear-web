import React from 'react';
import { Sparkles, Ruler, User, Users, Download, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function SizeGuidePage() {
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
              Size
              <span className="block text-yellow-300">Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-slide-up">
              Find your perfect fit with our comprehensive sizing guide for all Dritchwear products.
            </p>
          </div>
        </div>
      </section>

      {/* How to Measure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Measure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to get accurate measurements for the perfect fit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ruler className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Use a Measuring Tape</h3>
              <p className="text-gray-600">
                Use a flexible measuring tape for the most accurate measurements. If you don't have one, use a string and measure it against a ruler.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wear Fitted Clothing</h3>
              <p className="text-gray-600">
                Take measurements over fitted clothing or undergarments for the most accurate results. Avoid bulky clothing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Help</h3>
              <p className="text-gray-600">
                Ask someone to help you measure for the most accurate results, especially for back measurements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Size Chart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Women's Size Chart</h2>
            <p className="text-xl text-gray-600">
              All measurements are in inches. For the best fit, measure yourself and compare to our size chart.
            </p>
          </div>
          
          <div className="overflow-x-auto bg-gray-50 rounded-2xl p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 font-semibold text-gray-900">Size</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">Bust</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">Waist</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">Hips</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">Length</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">XS</td>
                  <td className="py-4 px-6 text-gray-600">32-34</td>
                  <td className="py-4 px-6 text-gray-600">24-26</td>
                  <td className="py-4 px-6 text-gray-600">34-36</td>
                  <td className="py-4 px-6 text-gray-600">25-26</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">S</td>
                  <td className="py-4 px-6 text-gray-600">34-36</td>
                  <td className="py-4 px-6 text-gray-600">26-28</td>
                  <td className="py-4 px-6 text-gray-600">36-38</td>
                  <td className="py-4 px-6 text-gray-600">26-27</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">M</td>
                  <td className="py-4 px-6 text-gray-600">36-38</td>
                  <td className="py-4 px-6 text-gray-600">28-30</td>
                  <td className="py-4 px-6 text-gray-600">38-40</td>
                  <td className="py-4 px-6 text-gray-600">27-28</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">L</td>
                  <td className="py-4 px-6 text-gray-600">38-40</td>
                  <td className="py-4 px-6 text-gray-600">30-32</td>
                  <td className="py-4 px-6 text-gray-600">40-42</td>
                  <td className="py-4 px-6 text-gray-600">28-29</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">XL</td>
                  <td className="py-4 px-6 text-gray-600">40-42</td>
                  <td className="py-4 px-6 text-gray-600">32-34</td>
                  <td className="py-4 px-6 text-gray-600">42-44</td>
                  <td className="py-4 px-6 text-gray-600">29-30</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-brand-purple">XXL</td>
                  <td className="py-4 px-6 text-gray-600">42-44</td>
                  <td className="py-4 px-6 text-gray-600">34-36</td>
                  <td className="py-4 px-6 text-gray-600">44-46</td>
                  <td className="py-4 px-6 text-gray-600">30-31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Men's Size Chart */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Men's Size Chart</h2>
            <p className="text-xl text-gray-600">
              All measurements are in inches. For the best fit, measure yourself and compare to our size chart.
            </p>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-2xl p-6 shadow-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 font-semibold text-gray-900">Size</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">Chest</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">Waist</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">Hips</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">Length</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">XS</td>
                  <td className="py-4 px-6 text-gray-600">34-36</td>
                  <td className="py-4 px-6 text-gray-600">28-30</td>
                  <td className="py-4 px-6 text-gray-600">34-36</td>
                  <td className="py-4 px-6 text-gray-600">27-28</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">S</td>
                  <td className="py-4 px-6 text-gray-600">36-38</td>
                  <td className="py-4 px-6 text-gray-600">30-32</td>
                  <td className="py-4 px-6 text-gray-600">36-38</td>
                  <td className="py-4 px-6 text-gray-600">28-29</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">M</td>
                  <td className="py-4 px-6 text-gray-600">38-40</td>
                  <td className="py-4 px-6 text-gray-600">32-34</td>
                  <td className="py-4 px-6 text-gray-600">38-40</td>
                  <td className="py-4 px-6 text-gray-600">29-30</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">L</td>
                  <td className="py-4 px-6 text-gray-600">40-42</td>
                  <td className="py-4 px-6 text-gray-600">34-36</td>
                  <td className="py-4 px-6 text-gray-600">40-42</td>
                  <td className="py-4 px-6 text-gray-600">30-31</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-brand-purple">XL</td>
                  <td className="py-4 px-6 text-gray-600">42-44</td>
                  <td className="py-4 px-6 text-gray-600">36-38</td>
                  <td className="py-4 px-6 text-gray-600">42-44</td>
                  <td className="py-4 px-6 text-gray-600">31-32</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-brand-purple">XXL</td>
                  <td className="py-4 px-6 text-gray-600">44-46</td>
                  <td className="py-4 px-6 text-gray-600">38-40</td>
                  <td className="py-4 px-6 text-gray-600">44-46</td>
                  <td className="py-4 px-6 text-gray-600">32-33</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fit Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fit Guide</h2>
            <p className="text-xl text-gray-600">
              Understanding our different fits to help you choose the perfect style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Slim Fit</h3>
              <p className="text-gray-600 mb-6">
                A tailored, close-to-body fit that follows your natural silhouette. Perfect for a modern, streamlined look.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Fitted through chest and waist</li>
                <li>• Tapered sleeves</li>
                <li>• Contemporary styling</li>
                <li>• Best for athletic builds</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regular Fit</h3>
              <p className="text-gray-600 mb-6">
                Our classic fit with comfortable room through the chest and waist. The most versatile option for everyday wear.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Comfortable through chest</li>
                <li>• Relaxed but not loose</li>
                <li>• Classic styling</li>
                <li>• Suitable for all body types</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Relaxed Fit</h3>
              <p className="text-gray-600 mb-6">
                A loose, comfortable fit with extra room throughout. Ideal for casual wear and layering.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Generous through chest and waist</li>
                <li>• Comfortable for layering</li>
                <li>• Casual styling</li>
                <li>• Great for comfort-focused wear</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Size Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sizing Tips</h2>
            <p className="text-xl text-gray-600">
              Expert advice to help you find your perfect fit every time.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">General Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>When in doubt, size up for a more comfortable fit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consider the fabric - stretchy materials may fit differently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Check the product description for specific fit notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span>Measure your favorite fitting garment for comparison</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Still Unsure?</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Our customer service team is here to help you find the perfect fit. Contact us with your measurements and we'll recommend the best size.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="bg-brand-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-purple-dark transition-colors duration-300 text-center"
                    >
                      Contact Support
                    </a>
                    <button
                      onClick={handleAppDownload}
                      className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
                    >
                      Live Chat in App
                    </button>
                  </div>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop With Ease on Our App</h2>
            <p className="text-xl text-purple-100 mb-8">
              Use our mobile app to explore products, place orders, and track deliveries—anytime, anywhere.
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