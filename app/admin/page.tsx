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

  // Features data
  const features = [
    {
      title: "Fast Delivery",
      description: "Get your products delivered quickly and on time.",
      icon: () => <Package className="h-12 w-12 text-blue-600 mx-auto" />
    },
    {
      title: "Secure Payment",
      description: "Safe and secure transactions for your peace of mind.",
      icon: () => <DollarSign className="h-12 w-12 text-green-600 mx-auto" />
    },
    {
      title: "Customer Support",
      description: "24/7 customer support to assist you anytime.",
      icon: () => <Users className="h-12 w-12 text-purple-600 mx-auto" />
    }
  ];

  return (
    <div className="h-full overflow-auto">
      <h1 className="text-2xl font-extrabold mb-6 text-black">Dashboard BBC2</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Products", value: "150", icon: <Package className="h-6 w-6 text-blue-600" /> },
          { title: "Total Orders", value: "721", icon: <ShoppingCart className="h-6 w-6 text-green-600" /> },
          { title: "Active Users", value: "892", icon: <Users className="h-6 w-6 text-purple-600" /> },
          { title: "Total Revenue", value: "Rp.7.500.000", icon: <DollarSign className="h-6 w-6 text-orange-600" /> }
        ].map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-gray-600 font-bold">{card.title}</h2>
                <p className="text-2xl text-black font-bold">{card.value}</p>
              </div>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Products Section */}
      <div className="bg-white rounded-lg shadow-md mb-8">
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
                <tr key={product.id} className="border-b">
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
              <p className="text-black">Showing Current Products</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded text-black">Previous</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                {feature.icon()}
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-black">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-500">
          {['Sneakers', 'Sports', 'Casual', 'Formal'].map((category) => (
            <div
              key={category}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
              <p className="text-center font-medium">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
