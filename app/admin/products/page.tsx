'use client';

import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    brand: string;
    size: number;
    price: string;
    status: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Nike Air Max 90', brand: 'Nike', size: 42, price: 'Rp 1.200.000', status: 'Active' },
        { id: 2, name: 'Nike Air Max Jordan', brand: 'Nike', size: 41, price: 'Rp 1.100.000', status: 'Active' },
        { id: 3, name: 'Adidas Samba', brand: 'Adidas', size: 43, price: 'Rp 1.000.000', status: 'Active' },
    ]);

    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState<Omit<Product, 'id'>>({
        name: '',
        brand: '',
        size: 0,
        price: '',
        status: ''
    });
    const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

    const handleAddProduct = () => {
        const newProduct: Product = { id: Date.now(), ...formData };
        setProducts([...products, newProduct]);
        setFormData({ name: '', brand: '', size: 0, price: '', status: '' });
        setIsModalOpen(null);
    };

    const handleEditProduct = (product: Product) => {
        setCurrentProduct(product);
        setFormData(product);
        setIsModalOpen('edit');
    };

    const handleUpdateProduct = () => {
        if (currentProduct) {
            setProducts(products.map(product => (product.id === currentProduct.id ? { ...formData, id: currentProduct.id } : product)));
            setCurrentProduct(null);
            setFormData({ name: '', brand: '', size: 0, price: '', status: '' });
            setIsModalOpen(null);
        }
    };

    const handleDeleteProduct = (id: number) => {
        setProducts(products.filter(product => product.id !== id));
        setIsModalOpen(null);
    };

    const handleBlockProduct = (id: number) => {
        setProducts(products.map(product => 
            product.id === id ? { ...product, status: 'Blocked' } : product
        ));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Products Management</h1>
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="p-2 border rounded w-full max-w-md text-black"
                />
                <button onClick={() => setIsModalOpen('add')} className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                    + Add New Product
                </button>
            </div>
            <table className="w-full border-collapse border text-black">
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
                    {products.map(product => (
                        <tr key={product.id}>
                            <td className="border p-2 text-black text-left">{product.name}</td>
                            <td className="border p-2 text-black text-center">{product.brand}</td>
                            <td className="border p-2 text-black text-center">{product.size}</td>
                            <td className="border p-2 text-black text-center">{product.price}</td>
                            <td className="border p-2 text-green-500 text-center">{product.status}</td>
                            <td className="border p-2">
                                <button onClick={() => handleEditProduct(product)} className="text-blue-500 mr-2">Edit</button>
                                <button onClick={() => handleBlockProduct(product.id)} className="text-yellow-500 mr-2">Block</button>
                                <button onClick={() => setIsModalOpen('delete')} className="text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen === 'add' && (
                <Modal title="Add Product" onClose={() => setIsModalOpen(null)}>
                    <ProductForm formData={formData} setFormData={setFormData} onSubmit={handleAddProduct} />
                </Modal>
            )}

            {isModalOpen === 'edit' && currentProduct && (
                <Modal title="Edit Product" onClose={() => setIsModalOpen(null)}>
                    <ProductForm formData={formData} setFormData={setFormData} onSubmit={handleUpdateProduct} />
                </Modal>
            )}

            {isModalOpen === 'delete' && currentProduct && (
                <Modal title="Delete Product" onClose={() => setIsModalOpen(null)}>
                    <p>Are you sure you want to delete this product?</p>
                    <button onClick={() => handleDeleteProduct(currentProduct.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                </Modal>
            )}
        </div>
    );
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-black">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-red-500">X</button>
                </div>
                {children}
            </div>
        </div>
    );
}

function ProductForm({ formData, setFormData, onSubmit }: { formData: Omit<Product, 'id'>; setFormData: (data: Omit<Product, 'id'>) => void; onSubmit: () => void }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="p-2 border rounded w-full mb-2 text-black"
            />
            <input
                type="text"
                placeholder="Brand"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="p-2 border rounded w-full mb-2 text-black" 
            />
            <input
                type="number"
                placeholder="Size"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: Number(e.target.value) })}
                className="p-2 border rounded w-full mb-2 text-black"
            />
            <input
                type="text"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="p-2 border rounded w-full mb-2 text-black "
            />
            <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="p-2 border rounded w-full mb-2 text-black"
            >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
    );
}
