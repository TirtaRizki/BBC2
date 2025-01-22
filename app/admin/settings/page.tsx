'use client';

import { LogOut } from "lucide-react";
import { useState } from "react";


export default function SettingsPage() {
    // State untuk setiap input
    const [storeName, setStoreName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    // State untuk Notification Settings
    const [orderNotifications, setOrderNotifications] = useState(true);
    const [reviewNotifications, setReviewNotifications] = useState(true);

    // State untuk Security Settings
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Fungsi untuk handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", {
            storeSettings: { storeName, contactEmail, phoneNumber, address },
            notificationSettings: { orderNotifications, reviewNotifications },
            securitySettings: { currentPassword, newPassword, confirmPassword },
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Settings</h1>
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4 text-black">Store Settings</h2>
                <form onSubmit={handleSubmit}>
                    {/* input store name */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-black">Store Name</label>
                        <input
                            type="text"
                            value={storeName}
                            onChange={(e) => setStoreName(e.target.value)}
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                        />
                    </div>
                    {/* Input Contact Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-black">Contact Email</label>
                        <input
                            type="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                        />
                    </div>
                    {/* input phone number */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-black">Phone Number</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                        />
                    </div>
                    {/* input addres */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-black">Address</label>
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-white p-6 rounded shadow-md mb-6">
                        <h2 className="text-xl font-bold mb-4 text-black">Notification Settings</h2>
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="font-bold text-black">Order Notifications</p>
                                <p className="text-sm text-gray-500">Receive notifications for new orders</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={orderNotifications}
                                    onChange={() => setOrderNotifications(!orderNotifications)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600"></div>
                                <span className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></span>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-black">Review Notifications</p>
                                <p className="text-sm text-gray-500">Receive notifications for new reviews</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={reviewNotifications}
                                    onChange={() => setReviewNotifications(!reviewNotifications)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600"></div>
                                <span className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></span>
                            </label>
                        </div>
                    </div>

                    {/* Security Settings */}
                    <div className="bg-white p-6 rounded shadow-md mb-6">
                        <h2 className="text-xl font-bold mb-4 text-black">Security Settings</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-black">Current Password</label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Enter current password"
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-black">New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-black">Confirm New Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Save Settings
                        </button>
                        <div className="flex justify-end">
                        <a href="/login">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-red-600">
                            Logout
                            <LogOut className="w-5 h-5 text-red-600" />
                            </button>
                        </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}