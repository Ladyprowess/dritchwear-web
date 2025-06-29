import React, { useState } from 'react';
import { Menu, X, Download, Heart, ShoppingBag } from 'lucide-react';

interface MobileMenuProps {
  onAppDownload: () => void;
  scrollToAppDownload: () => void;
}

export default function MobileMenu({ onAppDownload, scrollToAppDownload }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (action: () => void) => {
    action();
    closeMenu();
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-brand-purple transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
          />
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation items */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-1 px-6">
                  <button
                    onClick={() => handleNavClick(scrollToAppDownload)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-purple rounded-lg transition-colors font-medium"
                  >
                    Shop
                  </button>
                  <button
                    onClick={() => handleNavClick(scrollToAppDownload)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-purple rounded-lg transition-colors font-medium"
                  >
                    Collections
                  </button>
                  <a
                    href="/about"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-purple rounded-lg transition-colors font-medium"
                  >
                    About
                  </a>
                  <a
                    href="/contact"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-purple rounded-lg transition-colors font-medium"
                  >
                    Contact
                  </a>
                </nav>

                {/* Divider */}
                <div className="border-t border-gray-100 my-6 mx-6" />

                {/* Support links */}
                <div className="px-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Support
                  </h3>
                  <nav className="space-y-1">
                    <a
                      href="/size-guide"
                      onClick={closeMenu}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-brand-purple rounded-lg transition-colors"
                    >
                      Size Guide
                    </a>
                    <a
                      href="/returns"
                      onClick={closeMenu}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-brand-purple rounded-lg transition-colors"
                    >
                      Returns
                    </a>
                    <a
                      href="/faq"
                      onClick={closeMenu}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-brand-purple rounded-lg transition-colors"
                    >
                      FAQ
                    </a>
                    <a
                      href="/careers"
                      onClick={closeMenu}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-brand-purple rounded-lg transition-colors"
                    >
                      Careers
                    </a>
                  </nav>
                </div>
              </div>

              {/* Footer actions */}
              <div className="border-t border-gray-100 p-6 space-y-4">
                {/* Action buttons */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <button
                    onClick={() => handleNavClick(onAppDownload)}
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    aria-label="Wishlist"
                  >
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleNavClick(onAppDownload)}
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    aria-label="Shopping bag"
                  >
                    <ShoppingBag className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Download app button */}
                <button
                  onClick={() => handleNavClick(onAppDownload)}
                  className="w-full bg-brand-purple text-white py-3 px-4 rounded-xl font-semibold hover:bg-brand-purple-dark transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download App
                </button>

                {/* App store links */}
                <div className="flex gap-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dritchwear.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex-1 bg-black text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-300 text-xs"
                  >
                    <Download size={14} />
                    Google Play
                  </a>
                  <a
                    href="https://apps.apple.com/app/dritchwear"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex-1 bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-300 text-xs"
                  >
                    <Download size={14} />
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}