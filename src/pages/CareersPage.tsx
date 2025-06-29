import React, { useState } from 'react';
import { Sparkles, Users, Heart, Briefcase, MapPin, Clock, DollarSign, GraduationCap, Download, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

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

  const jobOpenings = [
    {
      title: "Senior Fashion Designer",
      department: "Design",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦2,400,000 - ₦3,600,000",
      description: "Lead our design team in creating innovative fashion pieces that define the Dritchwear aesthetic. You'll work closely with our creative director to develop seasonal collections.",
      requirements: [
        "5+ years of fashion design experience",
        "Bachelor's degree in Fashion Design or related field",
        "Proficiency in Adobe Creative Suite",
        "Strong understanding of garment construction",
        "Experience with sustainable fashion practices"
      ]
    },
    {
      title: "E-commerce Manager",
      department: "Digital",
      location: "Remote",
      type: "Full-time",
      salary: "₦2,100,000 - ₦2,850,000",
      description: "Drive our online sales strategy and optimize the digital shopping experience. You'll manage our e-commerce platform and mobile app commerce features.",
      requirements: [
        "3+ years of e-commerce experience",
        "Experience with Shopify, mobile commerce",
        "Strong analytical and data-driven mindset",
        "Knowledge of digital marketing strategies",
        "Experience with A/B testing and conversion optimization"
      ]
    },
    {
      title: "Sustainability Coordinator",
      department: "Operations",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦1,650,000 - ₦2,250,000",
      description: "Lead our sustainability initiatives and ensure our commitment to ethical fashion practices. You'll work with suppliers and internal teams to implement eco-friendly processes.",
      requirements: [
        "2+ years in sustainability or environmental roles",
        "Knowledge of sustainable fashion practices",
        "Experience with supply chain management",
        "Strong project management skills",
        "Passion for environmental responsibility"
      ]
    },
    {
      title: "Mobile App Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      salary: "₦2,700,000 - ₦3,900,000",
      description: "Enhance our mobile app experience with new features like AR fitting room, personalized recommendations, and seamless shopping flows.",
      requirements: [
        "4+ years of mobile development experience",
        "Proficiency in React Native or Flutter",
        "Experience with AR/VR technologies",
        "Knowledge of e-commerce integrations",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "Customer Experience Specialist",
      department: "Customer Service",
      location: "Lagos, Nigeria / Remote",
      type: "Full-time",
      salary: "₦1,350,000 - ₦1,800,000",
      description: "Provide exceptional customer support through our mobile app, website, and social channels. Help customers with orders, returns, and product questions.",
      requirements: [
        "2+ years of customer service experience",
        "Excellent communication skills",
        "Experience with live chat and social media support",
        "Problem-solving mindset",
        "Passion for fashion and customer satisfaction"
      ]
    },
    {
      title: "Marketing Intern",
      department: "Marketing",
      location: "Lagos, Nigeria",
      type: "Internship",
      salary: "₦600/hour",
      description: "Support our marketing team with social media content creation, influencer partnerships, and campaign execution. Perfect for students or recent graduates.",
      requirements: [
        "Currently enrolled in Marketing, Communications, or related field",
        "Strong social media presence and understanding",
        "Creative mindset with attention to detail",
        "Basic knowledge of design tools (Canva, Photoshop)",
        "Enthusiasm for fashion and brand building"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO policy"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Professional development budget, conference attendance, and skill-building programs"
    },
    {
      icon: DollarSign,
      title: "Financial Benefits",
      description: "Competitive salary, equity options, pension contributions, and employee discounts"
    }
  ];

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
              Join Our
              <span className="block text-yellow-300">Team</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-slide-up">
              Help us shape the future of fashion. Build your career with a company that values creativity, innovation, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Dritchwear?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building more than just a fashion brand - we're creating a community of passionate individuals who believe in making a positive impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-brand-purple" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Discover opportunities to grow your career with Dritchwear. All positions are either remote or based in Lagos, Nigeria.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign size={16} />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-brand-purple text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-purple-dark transition-colors duration-300">
                      {selectedJob === index ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                </div>
                
                {selectedJob === index && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <div className="pt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Job Description</h4>
                      <p className="text-gray-600 mb-6">{job.description}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2 text-gray-600 mb-6">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href={`mailto:dritchwear@gmail.com?subject=Application for ${job.title}&body=Hi Dritchwear Team,%0D%0A%0D%0AI'm interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0AThank you for your consideration.`}
                        className="bg-brand-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-purple-dark transition-colors duration-300 inline-flex items-center gap-2"
                      >
                        <Send size={18} />
                        Apply Now
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Dritchwear, we believe that great fashion comes from great people. Our culture is built on collaboration, creativity, and a shared commitment to making fashion more sustainable and accessible.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We foster an environment where everyone's voice is heard, ideas are celebrated, and personal growth is encouraged. Whether you're working remotely or in our Lagos office, you'll be part of a team that's passionate about what we do.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                  <span className="text-gray-700 font-medium">Inclusive and diverse workplace</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                  <span className="text-gray-700 font-medium">Innovation-driven environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                  <span className="text-gray-700 font-medium">Commitment to sustainability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                  <span className="text-gray-700 font-medium">Work-life balance focus</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-brand-purple/10 to-purple-100 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dritchwear Team"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Here's what you can expect when you apply to join our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply</h3>
              <p className="text-gray-600">
                Submit your application through email with your resume and a cover letter explaining why you're excited about Dritchwear.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interview</h3>
              <p className="text-gray-600">
                If your application stands out, we'll schedule a video call to get to know you better and discuss the role in detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Welcome</h3>
              <p className="text-gray-600">
                If we're a mutual fit, we'll extend an offer and welcome you to the Dritchwear family with a comprehensive onboarding process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="app-download" className="py-20 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Download className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-purple-100 mb-8">
              Experience the Dritchwear difference firsthand. Download our app to see what we're building together.
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