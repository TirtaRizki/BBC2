'use client';

import { Bell } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    // State untuk setiap input
    const [storeName, setStoreName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    // Fungsi untuk handle submit 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Store Settings Submitted:");
        console.log({ storeName, contactEmail, phoneNumber, address });
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
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Bell className="h-5 w-5 text-primary text-black" />
                            <h2 className="text-xl font-bold text-gray-800">Notification Settings</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-800">Order Notifications</p>
                                    <p className="text-sm text-gray-600">Receive notifications for new orders</p>
                                </div>
                                <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-800">Review Notifications</p>
                                    <p className="text-sm text-gray-600">Receive notifications for new reviews</p>
                                </div>
                                <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                            </div>
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
                    </div>
                </form>
            </div>
        </div>
    );
}