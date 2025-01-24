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
      <div className="max-w-md w-full"></div>

      <div className="bg-white rounded-xl shadow-lg p-8">
          {!submitted ? (
            <>

        <form onSubmit={handleSubmit} className="space-y-6">

        </form>
        </>
    ) : (
        <div className="text-center">


            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default ForgotPassword;