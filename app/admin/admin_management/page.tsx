import React from 'react';
import { Search, UserPlus, Mail, Phone } from 'lucide-react';

const UsersPage = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-black font-bold">Admin Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
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
            {[1, 2, 3].map((item) => (
              <tr key={item} className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                    <div>
                      {/* <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-500">Joined Mar 2024</p> */}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {/* <Mail className="h-4 w-4 text-gray-400" />
                    <span>john@example.com</span> */}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {/* <Phone className="h-4 w-4 text-gray-400" />
                    <span>+62 812-3456-7890</span> */}
                  </div>
                </td>
                <td className="p-4 text-white" >
                  <select className="border rounded px-2 py-1">
                    {/* <option>Admin</option> */}
                  </select>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {/* Active */}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    {/* <button className="text-blue-600 hover:underline">Edit</button>
                    <button className="text-red-600 hover:underline">Block</button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;