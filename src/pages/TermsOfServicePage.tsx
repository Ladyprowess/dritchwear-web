import React from 'react';
import { Sparkles, FileText, Scale, AlertTriangle, CheckCircle, Download, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import MobileMenu from '../components/MobileMenu';

export default function TermsOfServicePage() {
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
              Terms of
              <span className="block text-yellow-300">Service</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-slide-up">
              Please read these terms carefully before using our website, mobile app, or services.
            </p>
            <p className="text-lg text-purple-200">
              Last updated: July 10, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Terms Overview</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are the essential points you should know about using Dritchwear services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Agreement</h3>
              <p className="text-gray-600">
                By using our services, you agree to be bound by these terms and conditions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fair Use</h3>
              <p className="text-gray-600">
                Use our services responsibly and in accordance with applicable laws and regulations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
              <p className="text-gray-600">
                You retain ownership of your content and have specific rights regarding your account and data.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitations</h3>
              <p className="text-gray-600">
                Our liability is limited, and certain warranties are disclaimed as outlined in these terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Dritchwear. These Terms of Service ("Terms") govern your use of our website, mobile application, and services (collectively, the "Services") operated by Dritchwear ("we," "our," or "us").
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access our Services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update these Terms at any time. Your continued use of our Services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Use of Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You must be at least 18 years old to use our Services. If you are under 18, you may use our Services only with the involvement and consent of a parent or guardian.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Registration</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To access certain features of our Services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not use our Services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of our Services</li>
              </ul>
            </div>

            {/* Products and Orders */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Products and Orders</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing and Payment</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All prices are subject to change without notice. We reserve the right to modify or discontinue products at any time. Payment must be received by us before your order is processed.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Acceptance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or suspected fraudulent activity.
              </p>
            </div>

            {/* Shipping and Returns */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Shipping and Returns</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Return Policy:</strong> Items must be returned within 2 days of receiving your order. Items are no longer eligible for return after this period. To return an item, you must contact us first through our contact form or mobile app to initiate the return process.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Return Shipping:</strong> Customers are responsible for covering the cost of return shipping to our Nigeria location. We recommend using a trackable shipping method for returns.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Shipping Times:</strong> Standard shipping takes 3-5 business days within Nigeria. Express shipping (1-2 business days) and overnight shipping are also available. International shipping typically takes 7-14 business days.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are not responsible for delays or damages caused by shipping carriers, customs, or other factors beyond our control.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Content</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services and their original content, features, and functionality are and will remain the exclusive property of Dritchwear and its licensors. The Services are protected by copyright, trademark, and other laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Content</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You retain ownership of any content you submit to our Services. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with our Services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trademark Information</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                "Dritchwear" and our logo are trademarks of Dritchwear. You may not use our trademarks without our prior written consent.
              </p>
            </div>

            {/* User Content */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Content and Conduct</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Services may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Services, including its legality, reliability, and appropriateness.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                By posting Content to the Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>The Content is yours or you have the right to use it</li>
                <li>The Content does not infringe any third-party rights</li>
                <li>The Content complies with these Terms and applicable laws</li>
              </ul>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Services, to understand our practices.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The information on our Services is provided on an "as is" basis. To the fullest extent permitted by law, we exclude:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>All conditions, warranties, and other terms which might otherwise be implied by statute, common law, or the law of equity</li>
                <li>Any liability for any direct, indirect, or consequential loss or damage incurred by any user in connection with our Services</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter, nor any other liability which cannot be excluded or limited under applicable law.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In no event shall Dritchwear, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our total liability to you for all claims arising from or relating to the Services shall not exceed the amount you paid to us for the Services in the twelve (12) months preceding the claim.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of Nigeria, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> dritchwear@gmail.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> (+234) 816-217-4443</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Lagos, Nigeria</p>
                <p className="text-gray-700"><strong>Legal Department:</strong> dritchwear@gmail.com</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop with Confidence</h2>
            <p className="text-xl text-purple-100 mb-8">
              Download our mobile app and shop with the assurance that your rights and data are protected.
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