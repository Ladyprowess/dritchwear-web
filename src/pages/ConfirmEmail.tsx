import React, { useState, useEffect } from 'react';
import { CheckCircle, Smartphone, Download, ArrowRight, AlertTriangle, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ConfirmEmail() {
  const [countdown, setCountdown] = useState(10);
  const [redirecting, setRedirecting] = useState(false);
  const [confirmationStatus, setConfirmationStatus] = useState<'loading' | 'success' | 'already_confirmed' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    handleEmailConfirmation();
  }, []);

  useEffect(() => {
    if (confirmationStatus === 'success') {
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
    }
  }, [confirmationStatus]);

  const handleEmailConfirmation = async () => {
    try {
      // Get URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token');
      const refreshToken = urlParams.get('refresh_token');
      const type = urlParams.get('type');
      const error = urlParams.get('error');
      const errorDescription = urlParams.get('error_description');

      // Handle explicit errors from Supabase
      if (error || errorDescription) {
        if (errorDescription?.includes('already_confirmed') || 
            error?.includes('already_confirmed') ||
            errorDescription?.includes('Email link is invalid or has expired')) {
          setConfirmationStatus('already_confirmed');
        } else {
          setConfirmationStatus('error');
          setErrorMessage(errorDescription || error || 'Confirmation failed');
        }
        return;
      }

      // Check if this is a confirmation request
      if (type === 'signup' && accessToken && refreshToken) {
        try {
          // First, check if we already have a session to avoid duplicate confirmations
          const { data: existingSession } = await supabase.auth.getSession();
          
          if (existingSession.session?.user?.email_confirmed_at) {
            // User is already confirmed and has an active session
            setConfirmationStatus('already_confirmed');
            return;
          }

          // Set the session with the tokens for first-time confirmation
          const { data, error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (sessionError) {
            console.error('Session error:', sessionError);
            
            // Check for specific error messages that indicate already confirmed
            if (sessionError.message?.includes('already_confirmed') || 
                sessionError.message?.includes('Email link is invalid or has expired') ||
                sessionError.message?.includes('Token has expired') ||
                sessionError.message?.includes('invalid_token')) {
              setConfirmationStatus('already_confirmed');
            } else {
              setConfirmationStatus('error');
              setErrorMessage(sessionError.message || 'Failed to confirm email');
            }
            return;
          }

          if (data.session?.user) {
            // Successfully set session - this means confirmation was successful
            console.log('Email confirmation successful for user:', data.session.user.email);
            setConfirmationStatus('success');

            // Clear the URL parameters to prevent reuse
            window.history.replaceState({}, document.title, window.location.pathname);
          } else {
            setConfirmationStatus('error');
            setErrorMessage('Invalid confirmation link');
          }
        } catch (err: any) {
          console.error('Confirmation error:', err);
          
          // Check if the error indicates the email was already confirmed
          if (err.message?.includes('already_confirmed') ||
              err.message?.includes('Email link is invalid or has expired')) {
            setConfirmationStatus('already_confirmed');
          } else {
            setConfirmationStatus('error');
            setErrorMessage('An unexpected error occurred during confirmation');
          }
        }
      } else {
        // No valid confirmation parameters
        setConfirmationStatus('error');
        setErrorMessage('Invalid confirmation link');
      }
    } catch (err: any) {
      console.error('Unexpected error:', err);
      setConfirmationStatus('error');
      setErrorMessage('An unexpected error occurred');
    }
  };

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

  const handleRetry = () => {
    setConfirmationStatus('loading');
    setErrorMessage('');
    handleEmailConfirmation();
  };

  // Loading state
  if (confirmationStatus === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="text-brand-purple animate-spin" size={48} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Confirming Email...</h1>
            <p className="text-gray-600">
              Please wait while we verify your email confirmation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Already confirmed state
  if (confirmationStatus === 'already_confirmed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-blue-500" size={48} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Email Already Confirmed!</h1>
            <p className="text-gray-600 mb-4">
              Your email address has already been confirmed. You can now sign in to your Dritchwear account.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-700 text-sm">
                <strong>Security Note:</strong> Email confirmation links can only be used once for your protection.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleOpenApp}
              className="w-full bg-brand-purple text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-purple-dark transition-colors duration-300"
            >
              <Smartphone size={20} />
              Open Dritchwear App to Sign In
            </button>

            <div className="border-t pt-4">
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
      </div>
    );
  }

  // Error state
  if (confirmationStatus === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-red-500" size={48} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Confirmation Failed</h1>
            <p className="text-gray-600 mb-4">
              We couldn't confirm your email address. This might be because:
            </p>
            <ul className="text-left text-gray-600 text-sm mb-4 space-y-1">
              <li>• The confirmation link has expired</li>
              <li>• The link has already been used</li>
              <li>• The link is invalid or corrupted</li>
            </ul>
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-700 text-sm">{errorMessage}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <button
              onClick={handleRetry}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors duration-300"
            >
              <RefreshCw size={20} />
              Try Again
            </button>

            <button
              onClick={handleOpenApp}
              className="w-full bg-brand-purple text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-purple-dark transition-colors duration-300"
            >
              <Smartphone size={20} />
              Open App to Resend Confirmation
            </button>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-4">Need help?</p>
              <a
                href="/contact"
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 inline-block"
              >
                Contact Support
              </a>
            </div>

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
      </div>
    );
  }

  // Success state (first-time confirmation)
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