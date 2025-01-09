import React from 'react';
import { Package, ShoppingCart, Users, DollarSign } from 'lucide-react';

const DashboardPage = () => {
  // Sample recent products data
  const recentProducts = [
    {
      id: 1,
      name: "Adidas Ultraboost 22",
      brand: "Adidas",
      price: "Rp.625.000",
      status: "In Stock"
    },
    {
      id: 2,
      name: "Nike Air Zoom Pegasus 40",
      brand: "Nike",
      price: "Rp.850.000",
      status: "Low Stock"
    },
    {
      id: 3,
      name: "Puma RS-X3 Puzzle",
      brand: "Puma",
      price: "Rp.700.000",
      status: "Out of Stock"
    },
    {
      id: 4,
      name: "New Balance 990v5",
      brand: "New Balance",
      price: "Rp.900.000",
      status: "In Stock"
    },
    {
      id: 5,
      name: "Reebok Nano X2",
      brand: "Reebok",
      price: "Rp.875.000",
      status: "In Stock"
    }
  ];  

  return (
    <div className="h-full overflow-auto">
      <h1 className="text-2xl font-extrabold mb-6 text-black">Dashboard BBC2</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Products Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-gray-600 font-bold">Total Products</h2>
              <p className="text-2xl text-black font-bold">150</p>
            </div>
            <Package className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-gray-600 font-bold">Total Orders</h2>
              <p className="text-2xl text-black font-bold">721</p>
            </div>
            <ShoppingCart className="h-6 w-6 text-green-600" />
          </div>
        </div>

        {/* Active Users Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-gray-600 font-bold">Active Users</h2>
              <p className="text-2xl text-black font-bold">892</p>
            </div>
            <Users className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-gray-600 font-bold">Total Revenue</h2>
              <p className="text-2xl text-black font-bold">Rp.7.500.000</p>
            </div>
            <DollarSign className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Recent Products Section */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl text-black font-extrabold">Recent Products</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-600">Product Name</th>
                <th className="text-left p-4 font-semibold text-gray-600">Brand</th>
                <th className="text-left p-4 font-semibold text-gray-600">Price</th>
                <th className="text-left p-4 font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentProducts.map((product) => (
                <tr key={product.id} className ="border-b">
                  <td className="p-4 text-black font-bold">{product.name}</td>
                  <td className="p-4 text-black font-bold">{product.brand}</td>
                  <td className="p-4 text-black font-bold">{product.price}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.status === 'In Stock' 
                        ? 'bg-green-100 text-green-800'
                        : product.status === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              <p className="text-gray-500">Showing 1 of 10</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded">Previous</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;