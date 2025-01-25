'use client';

import React, { useState } from 'react';
import { Search, UserPlus, Mail, Phone, User } from 'lucide-react';

// Define the Admin interface
interface Admin {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    status: string;
    joinedDate: string;
}

// Define the props for AddAdminModal
interface AddAdminModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (newAdmin: Admin) => void;
}

// Define the props for EditAdminModal
interface EditAdminModalProps {
    isOpen: boolean;
    onClose: () => void;
    admin: Admin | null;
    onSubmit: (updatedAdmin: Admin) => void;
}

const UsersPage: React.FC = () => {
    const [admins, setAdmins] = useState<Admin[]>([
        {
            id: 1,
            name: 'Tirta Rizki',
            email: 'tirtarzk30@gmail.com',
            phone: '+62 812-7842-5988',
            role: 'Admin',
            status: 'Active',
            joinedDate: 'Feb 2017'
        }
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentAdmin, setCurrentAdmin] = useState<Admin | null>(null);

    // Add Admin Modal Component
    const AddAdminModal: React.FC<AddAdminModalProps> = ({ isOpen, onClose, onSubmit }) => {
        const [formData, setFormData] = useState<Omit<Admin, 'id' | 'joinedDate'>>({
            name: '',
            email: '',
            phone: '',
            role: 'Admin',
            status: 'Active'
        });

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const newAdmin: Admin = { 
                ...formData, 
                id: admins.length + 1, 
                joinedDate: new Date().toLocaleDateString() 
            };
            onSubmit(newAdmin);
            onClose();
        };

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
                <div className="bg-white p-6 rounded-lg w-96">
                    <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Role</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            >
                                <option>Admin</option>
                                <option>Super Admin</option>
                            </select>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button 
                                type="button" 
                                onClick={onClose} 
                                className="bg-gray-200 text-black px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Add Admin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    // Edit Admin Modal Component
    const EditAdminModal: React.FC<EditAdminModalProps> = ({ isOpen, onClose, admin, onSubmit }) => {
        const [formData, setFormData] = useState<Omit<Admin, 'id' | 'joinedDate'>>({
            name: admin?.name || '',
            email: admin?.email || '',
            phone: admin?.phone || '',
            role: admin?.role || 'Admin',
            status: admin?.status || 'Active'
        });

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (admin) {
                onSubmit({
                  ...formData, id: admin.id,
                  joinedDate: ''
                });
            }
            onClose();
        };

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
                <div className="bg-white p-6 rounded-lg w-96 text-black">
                    <h2 className="text-xl font-bold mb-4 text-black">Edit Admin</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 text-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-black">Role</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 text-black"
                            >
                                <option>Admin</option>
                                <option>Super Admin</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 text-black"
                            >
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Blocked</option>
                            </select>
                        </div>
                        <div className="flex justify-end gap-2 text-black">
                            <button 
                                type="button" 
                                onClick={onClose} 
                                className="bg-gray-200 text-black px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Update Admin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    const handleAddAdmin = (newAdmin: Admin) => {
        setAdmins([...admins, newAdmin]);
    };

    const handleEditAdmin = (updatedAdmin: Admin) => {
        setAdmins(admins.map(admin => 
            admin.id === updatedAdmin.id ? { ...admin, ...updatedAdmin } : admin
        ));
        setCurrentAdmin(null);
        setIsEditModalOpen(false);
    };

    const handleBlockAdmin = (adminId: number) => {
        setAdmins(admins.map(admin => 
            admin.id === adminId ? { ...admin, status: 'Blocked' } : admin
        ));
    };

    const handleEditClick = (admin: Admin) => {
        setCurrentAdmin(admin);
        setIsEditModalOpen(true);
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl text-black font-bold">Admin Management</h1>
                <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <User className="h-5 w-5" />
                    Add New Admin
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-black" />
                        <input
                            type="text"
                            placeholder="Search admin..."
                            className="pl-10 pr-4 py-2 border rounded-lg w-full"
                        />
                    </div>
                    <select className="border rounded-lg px-4 py-2 text-black">
                        <option>All Roles</option>
                        <option>Admin</option>
                    </select>
                    <select className="border rounded-lg px-4 py-2 text-black">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>

            {/* Admin Table */}
            <div className="bg-white text-black rounded-lg shadow">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left p-4">Admin</th>
                            <th className="text-left p-4">Email</th>
                            <th className="text-left p-4">Phone</th>
                            <th className="text-left p-4">Role</th>
                            <th className="text-left p-4">Status</th>
                            <th className="text-left p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin) => (
                            <tr key={admin.id} className="border-b">
                               <td className="p-4">
                          <div className="flex items-center gap-3">
                              <div className="h-10 w-10 bg-black rounded-full"></div>
                              <div>
                                  <p className="font-medium">{admin.name}</p>
                                  <p className="text-sm text-black">Joined {admin.joinedDate}</p>
                              </div>
                          </div>
                      </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-black" />
                                        <span>{admin.email}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-blue" />
                                        <span>{admin.phone}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <select 
                                        value={admin.role} 
                                        className="border rounded px-2 py-1"
                                    >
                                        <option>Admin</option>
                                        <option>Super Admin</option>
                                    </select>
                                </td>
                                <td className="p-4">
                                    <select 
                                        value={admin.status} 
                                        className="p-2 rounded-full"
                                    >
                                        <option className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</option>
                                        <option className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Inactive</option>
                                        <option className="bg-red-100 text-red-800 px-2 py-1 rounded-full">Blocked</option>
                                    </select>
                                </td>
                                <td className="p-4">
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleEditClick(admin)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleBlockAdmin(admin.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Block
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AddAdminModal 
                isOpen={isAddModalOpen} 
                onClose={() => setIsAddModalOpen(false)}
                onSubmit={handleAddAdmin}
            />

            {currentAdmin && (
                <EditAdminModal 
                    isOpen={isEditModalOpen} 
                    onClose={() => {
                        setIsEditModalOpen(false);
                        setCurrentAdmin(null); // Reset currentAdmin when modal is closed
                    }}
                    admin={currentAdmin}
                    onSubmit={handleEditAdmin}
                />
            )}
        </div>
    );
};

export default UsersPage;