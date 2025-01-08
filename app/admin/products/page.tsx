export default function ProductsPage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Products Management</h1>
        <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded w-full max-w-md"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
          + Add New Product
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <select className="p-2 border rounded text-black">
          <option>All Brands</option>
          <option>Nike</option>
          <option>Adidas</option>
        </select>
        <select className="p-2 border rounded text-black">
          <option>All Conditions</option>
          <option>New</option>
          <option>Used</option>
        </select>
        <select className="p-2 border rounded text-black">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <table className="w-full border-collapse border">
        <thead className="bg-green-600">
          <tr>
            <th className="border p-2">Product</th>
            <th className="border p-2">Brand</th>
            <th className="border p-2">Size</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-black text-left">Nike Air Max 90</td>
            <td className="border p-2 text-black text-center">Nike</td>
            <td className="border p-2 text-black text-center">42</td>
            <td className="border p-2 text-black text-center">Rp 1.200.000</td>
            <td className="border p-2 text-green-500 text-center">Active</td>
            <td className="border p-2">
              <button className="text-blue-500 mr-2 text-center">Edit</button>
              <button className="text-red-500 text-center">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2 text-black text-left">Nike Air Max Jordan</td>
            <td className="border p-2 text-black text-center">Nike</td>
            <td className="border p-2 text-black text-center">41</td>
            <td className="border p-2 text-black text-center">Rp 1.100.000</td>
            <td className="border p-2 text-green-500 text-center">Active</td>
            <td className="border p-2">
              <button className="text-blue-500 mr-2 text-center">Edit</button>
              <button className="text-red-500 text-center">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2 text-black text-left">Adidas Samba</td>
            <td className="border p-2 text-black text-center">Adidas</td>
            <td className="border p-2 text-black text-center">43</td>
            <td className="border p-2 text-black text-center">Rp 1.000.000</td>
            <td className="border p-2 text-green-500 text-center">Active</td>
            <td className="border p-2">
              <button className="text-blue-500 mr-2 text-center">Edit</button>
              <button className="text-red-500 text-center">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
  