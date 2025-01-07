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
      </div>
    );
  }
  