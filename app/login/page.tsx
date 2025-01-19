'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Lock, User } from 'lucide-react';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

const AdminLogin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



};

return (
    <LoginLayout>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <User className="w-12 h-12 text-blue-500" />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">Admin Dashboard</h2>
          <p className="text-gray-600">SecondBrand.co</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Email Input */}
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                aria-label="Email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                aria-label="Password"
              />
            </div>
          </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between">
            <label htmlFor="remember-me" className="flex items-center text-sm text-gray-700">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
            </div>
                  {/* Submit Button */}
                  <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
};

export default AdminLogin;