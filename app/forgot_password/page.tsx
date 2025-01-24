'use client';

import React from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
      <button 
          onClick={() => window.location.href = '/admin'}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </button>
      <div className="bg-white rounded-xl shadow-lg p-8">
          {!submitted ? (
            <>
        <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-black">Reset Password</h2>
                <p className="text-gray-600 mt-2">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
                  <label className="block text-sm font-medium mb-2 text-black">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Send Reset Instructions
                </button>
        </form>
        </>
    ) : (
        <div className="text-center">
            <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              { <><h3 className="text-xl font-bold mb-2 text-black">Check Your Email</h3><p className="text-gray-600 mb-6">
            We've sent password reset instructions to:
                    <br />
            <span className="font-medium">{email}</span>
        </p></> }
            <button 
                onClick={() => setSubmitted(false)}
                className="text-blue-600 hover:underline"
              >
                Try another email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;