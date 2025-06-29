import React from 'react';
import { Sparkles, Shield, Eye, Lock, Users, Download, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import MobileMenu from '../components/MobileMenu';

export default function PrivacyPolicyPage() {
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
              <a href="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
                <Sparkles className="h-8 w-8 text-brand-purple mr-2" />
                <span className="text-2xl font-bold text-gray-900">Dritchwear</span>
              </a>
            </div>
            
            {/* Desktop menu - hidden on mobile */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={scrollToAppDownload} className="text-gray-600 hover:text-brand-purple px-3 py-2 text-sm font-medium transition-colors">Shop</button>
                <button onClick={scrollToAppDownload} className="text-gray-600 hover:text-brand-purple px-3 py-2 text-sm font-medium transition-colors">Collections</button>
                <a href="/about" className="text-gray-600 hover:text-brand-purple px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="/contact" className="text-gray-600 hover:text-brand-purple px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Desktop icons - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={handleAppDownload} className="text-gray-600 hover:text-brand-purple transition-colors">
                <Download className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile menu */}
            <MobileMenu 
              onAppDownload={handleAppDownload}
              scrollToAppDownload={scrollToAppDownload}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Privacy
              <span className="block text-yellow-300">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-slide-up">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-lg text-purple-200">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to protecting your privacy and being transparent about how we handle your data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection</h3>
              <p className="text-gray-600">
                We use industry-standard security measures to protect your personal information from unauthorized access.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We clearly explain what data we collect, why we collect it, and how we use it to improve your experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Control</h3>
              <p className="text-gray-600">
                You have control over your data. You can access, update, or delete your information at any time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Selling</h3>
              <p className="text-gray-600">
                We never sell your personal information to third parties. Your data is used solely to enhance your Dritchwear experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dritchwear ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or make a purchase from us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Create an account on our website or mobile app</li>
                <li>Make a purchase or attempt to make a purchase</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Contact us for customer support</li>
                <li>Participate in surveys, contests, or promotions</li>
                <li>Leave reviews or comments on our products</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website or use our mobile app, we may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information (type, operating system, screen resolution)</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website or app</li>
                <li>Search terms used to find our website</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Processing and fulfilling your orders</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Personalizing your shopping experience and product recommendations</li>
                <li>Sending you marketing communications (with your consent)</li>
                <li>Improving our website, mobile app, and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information with trusted third-party service providers who assist us in operating our business, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Payment processors</li>
                <li>Shipping and logistics companies</li>
                <li>Email marketing platforms</li>
                <li>Analytics providers</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, property, or safety, or that of others.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request limitation of how we process your data</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To exercise these rights, please contact us at dritchwear@gmail.com or through our mobile app.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mobile app may also use analytics tools and advertising identifiers to improve functionality and provide personalized experiences.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> dritchwear@gmail.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> (+234) 816-217-4443</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Lagos, Nigeria</p>
                <p className="text-gray-700"><strong>Data Protection Officer:</strong> dritchwear@gmail.com</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Privacy-First Shopping</h2>
            <p className="text-xl text-purple-100 mb-8">
              Experience secure shopping with our mobile app. Your privacy and data protection are our top priorities.
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