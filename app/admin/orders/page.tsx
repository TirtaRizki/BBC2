import React from 'react';

const OrdersPage = () => {
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
    </div>
  );
};

export default OrdersPage;
