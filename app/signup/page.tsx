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

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">


            </div>
        </div>
    );
};

export default AdminRegistration;