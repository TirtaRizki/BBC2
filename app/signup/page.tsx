'use client';

import React from 'react';
import { User, Mail, Lock, Building, Phone, ArrowLeft } from 'lucide-react';

// Define the interface for form data
interface FormData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    role: string;
    storeName: string;
}

const AdminRegistration: React.FC = () => {
    const [formData, setFormData] = React.useState<FormData>({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: 'admin',
        storeName: ''
    });
    const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.fullName) newErrors.fullName = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
            // Optionally reset the form
            setFormData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
                phone: '',
                role: 'admin',
                storeName: ''
            });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
            <button onClick={() => window.location.href = '/login'} className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
                </button>
            { <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-black">Create Admin Account</h2>
                        <p className="text-gray-600 mt-2">Fill in the details to register a new admin account</p>
                    </div>
                    <div>
                            <label className="block text-sm font-medium mb-2 text-black">Full Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
                                />
                                <User  className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                            </div>
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-black">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                />
                                <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-black">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                                />
                                <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-black">Phone Number</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                                />
                                <Phone className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                            </div>
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-black">Store Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.storeName}
                                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                                <Building className="absolute left- 3 top-2.5 text-gray-400 w-5 h-5" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-black">Admin Role</label>
                            <select
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            >
                                <option value="admin">Store Admin</option>
                                <option value="super_admin">Super Admin</option>
                                <option value="manager">Store Manager</option>
                            </select>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                            Create Account
                        </button>

            </div> }
            </div>
        </div>
    );
};

export default AdminRegistration;