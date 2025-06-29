import React, { useState, useEffect } from 'react';
import { Shield, Eye, EyeOff, CheckCircle2, AlertTriangle, Lock, ArrowRight, Smartphone, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ResetPassword() {
  const [step, setStep] = useState<'form' | 'success' | 'error'>('form');
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasValidTokens, setHasValidTokens] = useState(false);
  const [sessionInitialized, setSessionInitialized] = useState(false);

  useEffect(() => {
    initializeSession();
  }, []);

  const initializeSession = async () => {
    try {
      // Check if we have tokens in the URL (indicating this is a direct reset link)
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token');
      const refreshToken = urlParams.get('refresh_token');
      const errorParam = urlParams.get('error');
      const errorDescription = urlParams.get('error_description');
      const type = urlParams.get('type');

      // Handle errors from Supabase
      if (errorParam || errorDescription) {
        setError(errorDescription || errorParam || 'Invalid reset link');
        setStep('error');
        return;
      }

      // If we have tokens and this is a recovery type, set the session
      if (accessToken && refreshToken && type === 'recovery') {
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });

        if (error) {
          console.error('Error setting session:', error);
          setError('Invalid or expired reset link. Please request a new password reset.');
          setStep('error');
          return;
        }

        if (data.session) {
          setHasValidTokens(true);
          setStep('form');
        }
      } else if (accessToken && refreshToken) {
        // Fallback for other token scenarios
        setHasValidTokens(true);
        setStep('form');
      } else {
        // No tokens - check if user has an active session
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setHasValidTokens(true);
          setStep('form');
        } else {
          // No valid session or tokens
          setHasValidTokens(false);
          setStep('form');
        }
      }
    } catch (error) {
      console.error('Session initialization error:', error);
      setError('Failed to initialize password reset. Please try again.');
      setStep('error');
    } finally {
      setSessionInitialized(true);
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return null;
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthLabel = (strength: number) => {
    if (strength <= 1) return { label: 'Weak', color: 'text-red-500' };
    if (strength <= 2) return { label: 'Fair', color: 'text-yellow-500' };
    if (strength <= 3) return { label: 'Good', color: 'text-blue-500' };
    return { label: 'Strong', color: 'text-green-500' };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Update the user's password using Supabase
      const { error } = await supabase.auth.updateUser({
        password: formData.password
      });

      if (error) {
        console.error('Password update error:', error);
        
        // Handle specific error cases
        if (error.message.includes('session_not_found') || error.message.includes('invalid_token')) {
          setError('Your reset link has expired. Please request a new password reset.');
          setStep('error');
        } else if (error.message.includes('same_password')) {
          setError('New password must be different from your current password.');
        } else {
          setError(error.message || 'Failed to update password. Please try again.');
        }
        return;
      }

      // Password updated successfully
      setStep('success');
      
      // Clear the URL parameters to prevent reuse
      window.history.replaceState({}, document.title, window.location.pathname);
      
    } catch (err: any) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(''); // Clear error when user starts typing
  };

  const handleOpenApp = () => {
    // Try to open the app with deep link
    window.location.href = 'dritchwear://reset-password';
    
    // Fallback: redirect to app store after a delay
    setTimeout(() => {
      if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
        window.location.href = 'https://apps.apple.com/app/dritchwear';
      } else {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.dritchwear.app';
      }
    }, 2000);
  };

  // Show loading while initializing session
  if (!sessionInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-brand-purple border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Initializing...</h1>
          <p className="text-gray-600">Setting up your password reset</p>
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Password Updated!</h1>
            <p className="text-gray-600">
              Your password has been successfully updated. You can now sign in with your new password.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleOpenApp}
              className="w-full bg-brand-purple text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-purple-dark transition-colors duration-300"
            >
              <Smartphone size={20} />
              Open Dritchwear App to Sign In
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
        </div>
      </div>
    );
  }

  if (step === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-red-500" size={48} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset Link Invalid</h1>
            <p className="text-gray-600 mb-4">
              This password reset link is invalid or has expired.
            </p>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <button
              onClick={handleOpenApp}
              className="w-full bg-brand-purple text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-purple-dark transition-colors duration-300"
            >
              <Smartphone size={20} />
              Open App to Reset Password
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
        </div>
      </div>
    );
  }

  // Main password reset form
  const passwordStrength = getPasswordStrength(formData.password);
  const strengthInfo = getStrengthLabel(passwordStrength);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-purple-light to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="text-brand-purple" size={48} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset Your Password</h1>
          <p className="text-gray-600">
            {hasValidTokens 
              ? "Enter your new password below to complete the reset process."
              : "Create a new password for your Dritchwear account."
            }
          </p>
        </div>

        {/* Token Warning */}
        {!hasValidTokens && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-amber-800 text-sm">Authentication Required</p>
                <p className="text-amber-700 text-sm">
                  For security, password resets require a valid reset link from your email. If you don't have the link, please request a new password reset from the mobile app.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* New Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                placeholder="Enter new password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Password strength:</span>
                  <span className={`text-xs font-medium ${strengthInfo.color}`}>
                    {strengthInfo.label}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      passwordStrength <= 1 ? 'bg-red-500' :
                      passwordStrength <= 2 ? 'bg-yellow-500' :
                      passwordStrength <= 3 ? 'bg-blue-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${(passwordStrength / 5) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Use at least 6 characters with a mix of letters, numbers, and symbols
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                placeholder="Confirm new password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !formData.password || !formData.confirmPassword}
            className="w-full bg-brand-purple text-white py-3 px-6 rounded-xl font-semibold hover:bg-brand-purple-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Updating Password...
              </>
            ) : (
              'Update Password'
            )}
          </button>
        </form>

        {/* Alternative: Mobile App Option */}
        <div className="mt-8 pt-6 border-t">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600">Prefer to use the mobile app?</p>
          </div>
          
          <button
            onClick={handleOpenApp}
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors duration-300 mb-4"
          >
            <Smartphone size={18} />
            Open in Dritchwear App
          </button>

          {/* Download Links */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-3">Don't have the app?</p>
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

        {/* Security Note */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Shield className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-blue-800 text-sm">Security Tips</p>
              <ul className="text-blue-700 text-sm mt-1 space-y-1">
                <li>• Use a unique password you haven't used before</li>
                <li>• Include uppercase, lowercase, numbers, and symbols</li>
                <li>• Avoid personal information like names or dates</li>
                <li>• Consider using a password manager</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t text-center">
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