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
      </div>
    );
  }
  