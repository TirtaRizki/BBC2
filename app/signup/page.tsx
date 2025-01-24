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


            </div>
        </div>
    );
};

export default AdminRegistration;