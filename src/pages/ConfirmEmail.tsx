import React, { useState, useEffect } from 'react';
import { CheckCircle, Smartphone, Download, ArrowRight } from 'lucide-react';

export default function ConfirmEmail() {
  const [countdown, setCountdown] = useState(10);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setRedirecting(true);
          handleOpenApp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenApp = () => {
    // Try to open the app with deep link
    window.location.href = 'dritchwear://confirmed';
    
    // Fallback: redirect to app store after a delay
    setTimeout(() => {
      if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
        window.location.href = 'https://apps.apple.com/app/dritchwear';
      } else {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.dritchwear.app';
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-500" size={48} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Email Confirmed!</h1>
          <p className="text-gray-600">
            Your Dritchwear account has been successfully verified.
          </p>
        </div>

        {/* App Redirect Section */}
        <div className="mb-8">
          <div className="bg-brand-purple/10 rounded-xl p-6 mb-6">
            <Smartphone className="text-brand-purple mx-auto mb-3" size={32} />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Opening Dritchwear App...
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {redirecting ? 'Redirecting now...' : `Automatically redirecting in ${countdown} seconds`}
            </p>
            
            {!redirecting && (
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-brand-purple h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                ></div>
              </div>
            )}
          </div>

          <button
            onClick={handleOpenApp}
            className="w-full bg-brand-purple text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-purple-dark transition-colors duration-300 mb-4"
          >
            <Smartphone size={20} />
            Open Dritchwear App Now
          </button>
        </div>

        {/* Download Links */}
        <div className="border-t pt-6">
          <p className="text-sm text-gray-600 mb-4">Don't have the app yet?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.dritchwear.app"
              className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-300 text-sm"
            >
              <Download size={16} />
              Google Play
            </a>
            <a
              href="https://apps.apple.com/app/dritchwear"
              className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-300 text-sm"
            >
              <Download size={16} />
              App Store
            </a>
          </div>
        </div>

        {/* Back to Website */}
        <div className="mt-6 pt-4 border-t">
          <a
            href="/"
            className="inline-flex items-center text-brand-purple font-medium hover:text-brand-purple-dark transition-colors duration-300"
          >
            Back to Dritchwear.com <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}