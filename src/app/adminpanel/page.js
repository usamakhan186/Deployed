'use client';

import { useState } from 'react';
import AdminLayout from './components/AdminLayout';

export default function AdminPanel() {
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      customer: 'John Doe',
      carModel: 'Toyota Camry 2023',
      price: 35000,
      inspectionPrice: 299,
      status: 'pending_inspection',
      date: '2024-03-15',
      contact: '+1 234-567-8900',
      location: 'New York, NY'
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      carModel: 'Honda Civic 2024',
      price: 28000,
      inspectionPrice: 249,
      status: 'inspection_scheduled',
      date: '2024-03-16',
      contact: '+1 234-567-8901',
      location: 'Los Angeles, CA'
    },
    // Add more sample orders as needed
  ]);

  const orderStatuses = [
    { value: 'pending_inspection', label: 'Pending Inspection' },
    { value: 'inspection_scheduled', label: 'Inspection Scheduled' },
    { value: 'inspection_completed', label: 'Inspection Completed' },
    { value: 'payment_pending', label: 'Payment Pending' },
    { value: 'payment_completed', label: 'Payment Completed' },
    { value: 'delivery_scheduled', label: 'Delivery Scheduled' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authA, setAuthA] = useState(false);

  const usern = 'admin';
  const passw = 'admin';

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === usern && password === passw) {
      setAuthA(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleInspectionPriceChange = (orderId, price) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, inspectionPrice: parseFloat(price) } : order
      )
    );
  };

  const getStatusColor = (status) => {
    const colors = {
      pending_inspection: 'bg-yellow-100 text-yellow-800',
      inspection_scheduled: 'bg-blue-100 text-blue-800',
      inspection_completed: 'bg-green-100 text-green-800',
      payment_pending: 'bg-orange-100 text-orange-800',
      payment_completed: 'bg-purple-100 text-purple-800',
      delivery_scheduled: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      {authA ? (
        <AdminLayout>
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Car Orders Management</h1>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Car Model
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Inspection Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.carModel}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${order.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="number"
                            value={order.inspectionPrice}
                            onChange={(e) =>
                              handleInspectionPriceChange(order.id, e.target.value)
                            }
                            className="w-24 px-2 py-1 border rounded focus:ring-blue-500 focus:border-blue-500"
                            min="0"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={order.status}
                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                            className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          >
                            {orderStatuses.map((status) => (
                              <option key={status.value} value={status.value}>
                                {status.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.contact}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-900 mr-2">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AdminLayout>
      ) : (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      )}
    </>
  );
}
