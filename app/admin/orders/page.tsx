'use client';

import React, { useState } from 'react';

const OrdersPage = () => {
    const [orders] = useState([
        { id: '#ORD-12345', customer: 'Nurhidayat', products: '2 items', total: 'Rp 2.400.000', status: 'Pending', date: '2024-03-01' },
        { id: '#ORD-22345', customer: 'Tirta Rizki', products: '3 items', total: 'Rp 3.600.000', status: 'Pending', date: '2024-03-02' },
    ]);

    return (
        <div>
            <h1 className='text-black'>Orders Management</h1>
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Search by order ID or customer..."
                    style={{ padding: '10px', flex: 1 }}
                />
                <select style={{ padding: '10px' }}>
                    <option className='text-black'>All Status</option>
                    <option className='text-black'>Pending</option>
                    <option className='text-black'>Completed</option>
                </select>
                <input type="date" style={{ padding: '10px' }} />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead className='text-black'>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Order ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Customer</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Products</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Date</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-black'>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.customer}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.products}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.total}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                <select>
                                    <option>{order.status}</option>
                                    <option>Completed</option>
                                </select>
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.date}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                <button style={{ color: 'blue', textDecoration: 'underline' }}>View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
