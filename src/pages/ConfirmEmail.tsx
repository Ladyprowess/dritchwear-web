import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Mail, ArrowRight, Smartphone, Download, Shield } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function EmailConfirmation() {
  const [step, setStep] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [sessionInitialized, setSessionInitialized] = useState(false);

  useEffect(() => {
    initializeSessionAndConfirm();
  }, []);

  const initializeSessionAndConfirm = async () => {
    try {
      // Check if we have tokens in the URL
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token');
      const refreshToken = urlParams.get('refresh_token');
      const errorParam = urlParams.get('error');
      const errorDescription = urlParams.get('error_description');
      const type = urlParams.get('type');

      console.log('URL params:', { accessToken: !!accessToken, refreshToken: !!refreshToken, type, errorParam });

      // Handle errors from Supabase
      if (errorParam || errorDescription) {
        setError(errorDescription || errorParam || 'Invalid confirmation link');
        setStep('error');
        setSessionInitialized(true);
        return;
      }

      // If we have tokens and this is an email confirmation type, set the session first
      if (accessToken && refreshToken && type === 'signup') {
        console.log('Setting session for email confirmation...');
        
        const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });

        if (sessionError) {
          console.error('Error setting session:', sessionError);
          setError('Invalid or expired confirmation link. Please request a new confirmation email.');
          setStep('error');
          setSessionInitialized(true);
          return;
        }

        if (sessionData.session && sessionData.user) {
          console.log('Session set successfully, user:', sessionData.user.email);
          setUserEmail(sessionData.user.email || '');
          
          // Check if email is already confirmed
          if (sessionData.user.email_confirmed_at) {
            console.log('Email already confirmed');
            setStep('success');
          } else {
            // Email confirmation is handled automatically by Supabase when setting the session
            // from a signup confirmation link, so we should be good to go
            console.log('Email confirmation processed');
            setStep('success');
          }
        } else {
          setError('Failed to establish session. Please try clicking the confirmation link again.');
          setStep('error');
        }
      } else if (accessToken && refreshToken) {
        // Handle other token scenarios
        console.log('Handling other token scenario...');
        
        const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });

        if (sessionError) {
          console.error('Error setting session:', sessionError);
          setError('Invalid or expired confirmation link.');
          setStep('error');
        } else if (sessionData.session && sessionData.user) {
          setUserEmail(sessionData.user.email || '');
          setStep('success');
        } else {
          setError('Failed to confirm email. Please try again.');
          setStep('error');
        }
      } else {
        // No tokens - check if user has an active session
        console.log('No tokens found, checking existing session...');
        
        const { data: { session } } = await supabase.auth.getSession();
        if (session && session.user) {
          setUserEmail(session.user.email || '');
          if (session.user.email_confirmed_at) {
            setStep('success');
          } else {
            setError('Email confirmation required. Please check your email for a confirmation link.');
            setStep('error');
          }
        } else {
          // No valid session or tokens
          setError('No confirmation link found. Please check your email and click the confirmation link.');
          setStep('error');
        }
      }

      // Clear the URL parameters to prevent reuse
      window.history.replaceState({}, document.title, window.location.pathname);
      
    } catch (error) {
      console.error('Email confirmation error:', error);
      setError('An unexpected error occurred during email confirmation. Please try again.');
      setStep('error');
    } finally {
      setSessionInitialized(true);
    }
  };

  const handleOpenApp = () => {
    // Try to open the app with deep link
    window.location.href = 'dritchwear://email-confirmed';
    
    // Fallback: redirect to app store after a delay
    setTimeout(() => {
      if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
        window.location.href = 'https://apps.apple.com/app/dritchwear';
      } else {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.dritchwear.app';
      }
    }, 2000);
  };

  const handleResendConfirmation = async () => {
    if (!userEmail) {
      setError('No email address found. Please sign up again.');
      return;
    }

    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: userEmail
      });

      if (error) {
        console.error('Resend error:', error);
        setError(error.message || 'Failed to resend confirmation email.');
      } else {
        setError(''); // Clear any existing error
        // You might want to show a success message here
        alert('Confirmation email sent! Please check your inbox.');
      }
    } catch (err) {
      console.error('Unexpected resend error:', err);
      setError('Failed to resend confirmation email. Please try again.');
    }
  };

  // Show loading while initializing session
  if (!sessionInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-brand-purple border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Confirming Email...</h1>
          <p className="text-gray-600">Please wait while we verify your email address</p>
        </div>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-green-500" size={48} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Email Confirmed!</h1>
            <p className="text-gray-600 mb-2">
              Your email address has been successfully verified.
            </p>
            {userEmail && (
              <p className="text-sm text-gray-500">
                ✓ {userEmail}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <button
              onClick={handleOpenApp}
              className="w-full bg-brand-purple text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-purple-dark transition-colors duration-300"
            >
              <Smartphone size={20} />
              Open Dritchwear App
            </button>

            <div className="text-center">
              <a
                href="/"
                className="inline-flex items-center text-brand-purple font-medium hover:text-brand-purple-dark transition-colors duration-300"
              >
                Back to Dritchwear.com <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Download Links */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-gray-500 mb-3">Don't have the app yet?</p>
            <div className="flex gap-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.dritchwear.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-black text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-300 text-xs"
              >
                <Download size={14} />
                Google Play
              </a>
              <a
                href="https://apps.apple.com/app/dritchwear"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-300 text-xs"
              >
                <Download size={14} />
                App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="text-red-500" size={48} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Confirmation Failed</h1>
          <p className="text-gray-600 mb-4">
            We couldn't confirm your email address.
          </p>
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {userEmail && (
            <button
              onClick={handleResendConfirmation}
              className="w-full bg-brand-purple text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-purple-dark transition-colors duration-300"
            >
              <Mail size={20} />
              Resend Confirmation Email
            </button>
          )}

          <button
            onClick={handleOpenApp}
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors duration-300"
          >
            <Smartphone size={18} />
            Open Dritchwear App
          </button>

          <div className="text-center">
            <a
              href="/"
              className="inline-flex items-center text-brand-purple font-medium hover:text-brand-purple-dark transition-colors duration-300"
            >
              Back to Dritchwear.com <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 pt-6 border-t">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-blue-800 text-sm">Need Help?</p>
                <ul className="text-blue-700 text-sm mt-1 space-y-1">
                  <li>• Check your spam/junk folder for the confirmation email</li>
                  <li>• Make sure you clicked the most recent confirmation link</li>
                  <li>• Try signing up again if the link is too old</li>
                  <li>• Contact support if the problem persists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}