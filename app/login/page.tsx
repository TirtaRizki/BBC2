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



        </form>
      </div>
    </LoginLayout>
  );
};

export default AdminLogin;