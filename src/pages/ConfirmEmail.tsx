import React, { useState, useEffect } from 'react';
import { CheckCircle, Smartphone, Download, ArrowRight, AlertTriangle, RefreshCw } from 'lucide-react';

// Mock supabase for demonstration - replace with your actual supabase import
const supabase = {
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    setSession: ({ access_token, refresh_token }) => {
      // Simulate different scenarios for testing
      if (access_token === 'expired_token') {
        return Promise.resolve({ 
          data: { session: null }, 
          error: { message: 'Token has expired' } 
        });
      }
      if (access_token === 'already_confirmed_token') {
        return Promise.resolve({ 
          data: { session: null }, 
          error: { message: 'Email link is invalid or has expired' } 
        });
      }
      // Simulate successful confirmation
      return Promise.resolve({
        data: {
          session: {
            user: {
              id: '123',
              email: 'user@example.com',
              email_confirmed_at: new Date().toISOString()
            }
          }
        },
        error: null
      });
    }
  }
};

export default function ConfirmEmail() {
  const [countdown, setCountdown] = useState(10);
  const [redirecting, setRedirecting] = useState(false);
  const [confirmationStatus, setConfirmationStatus] = useState<'loading' | 'success' | 'already_confirmed' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [debugInfo, setDebugInfo] = useState('');

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

      // Debug information
      const debugData = {
        accessToken: accessToken ? 'present' : 'missing',
        refreshToken: refreshToken ? 'present' : 'missing',
        type,
        error,
        errorDescription
      };
      setDebugInfo(JSON.stringify(debugData, null, 2));

      // Handle explicit errors from Supabase first
      if (error) {
        console.log('URL contains error parameter:', error, errorDescription);
        
        if (error === 'access_denied' || 
            errorDescription?.includes('Email link is invalid or has expired') ||
            errorDescription?.includes('already_confirmed')) {
          setConfirmationStatus('already_confirmed');
        } else {
          setConfirmationStatus('error');
          setErrorMessage(errorDescription || error);
        }
        return;
      }

      // Validate required parameters
      if (!accessToken || !refreshToken) {
        console.log('Missing required tokens');
        setConfirmationStatus('error');
        setErrorMessage('Invalid confirmation link - missing authentication tokens');
        return;
      }

      // Only proceed if this is a signup confirmation
      if (type !== 'signup') {
        console.log('Invalid confirmation type:', type);
        setConfirmationStatus('error');
        setErrorMessage('Invalid confirmation link type');
        return;
      }

      console.log('Attempting to set session with tokens...');

      // Attempt to set the session with the provided tokens
      const { data, error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      });

      if (sessionError) {
        console.error('Session error:', sessionError);
        
        // Handle specific error cases
        if (sessionError.message?.includes('Token has expired') ||
            sessionError.message?.includes('invalid_token') ||
            sessionError.message?.includes('jwt expired')) {
          setConfirmationStatus('error');
          setErrorMessage('This confirmation link has expired. Please request a new one.');
        } else if (sessionError.message?.includes('Email link is invalid or has expired') ||
                   sessionError.message?.includes('already_confirmed') ||
                   sessionError.message?.includes('signup_disabled')) {
          setConfirmationStatus('already_confirmed');
        } else {
          setConfirmationStatus('error');
          setErrorMessage(sessionError.message || 'Failed to confirm email');
        }
        return;
      }

      // Check if we got a valid session back
      if (!data.session?.user) {
        console.log('No session returned from setSession');
        setConfirmationStatus('error');
        setErrorMessage('Invalid confirmation response');
        return;
      }

      // Success! Clear URL parameters to prevent reuse
      console.log('Email confirmation successful for user:', data.session.user.email);
      setConfirmationStatus('success');
      
      // Clear URL parameters after successful confirmation
      setTimeout(() => {
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 1000);

    } catch (err: any) {
      console.error('Unexpected error during confirmation:', err);
      setConfirmationStatus('error');
      setErrorMessage('An unexpected error occurred during confirmation');
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
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="text-purple-600 animate-spin" size={48} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Confirming Email...</h1>
            <p className="text-gray-600">
              Please wait while we verify your email confirmation.
            </p>
          </div>
          
          {/* Debug info for development */}
          {debugInfo && (
            <details className="text-left mt-4">
              <summary className="text-sm text-gray-500 cursor-pointer">Debug Info</summary>
              <pre className="text-xs text-gray-400 mt-2 bg-gray-50 p-2 rounded overflow-auto">
                {debugInfo}
              </pre>
            </details>
          )}
        </div>
      </div>
    );
  }

  // Already confirmed state
  if (confirmationStatus === 'already_confirmed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex items-center justify-center p-4">
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
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors duration-300"
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
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
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
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex items-center justify-center p-4">
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
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors duration-300"
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
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex items-center justify-center p-4">
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
          <div className="bg-purple-50 rounded-xl p-6 mb-6">
            <Smartphone className="text-purple-600 mx-auto mb-3" size={32} />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Opening Dritchwear App...
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {redirecting ? 'Redirecting now...' : `Automatically redirecting in ${countdown} seconds`}
            </p>
            
            {!redirecting && (
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                ></div>
              </div>
            )}
          </div>

          <button
            onClick={handleOpenApp}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors duration-300 mb-4"
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
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
          >
            Back to Dritchwear.com <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}