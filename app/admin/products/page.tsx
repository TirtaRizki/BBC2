export default function ProductsPage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Products Management</h1>
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
        <select className="p-2 border rounded">
          <option>All Brands</option>
          <option>Nike</option>
          <option>Adidas</option>
        </select>
        <select className="p-2 border rounded">
          <option>All Conditions</option>
          <option>New</option>
          <option>Used</option>
        </select>
        <select className="p-2 border rounded">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <table className="w-full border-collapse border">
        <thead className="bg-gray-200">
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
            <td className="border p-2">Nike Air Max 90</td>
            <td className="border p-2">Nike</td>
            <td className="border p-2">42</td>
            <td className="border p-2">Rp 1.200.000</td>
            <td className="border p-2 text-green-500">Active</td>
            <td className="border p-2">
              <button className="text-blue-500 mr-2">Edit</button>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
  