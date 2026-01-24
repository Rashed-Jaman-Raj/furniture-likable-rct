import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom'; 


const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card',
  });

  const navigate = useNavigate(); // 👉 Nevigation Hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\nName: ${formData.name}\nTotal: $${totalPrice}`);

    clearCart();

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: 'card',
    });

    // 👉Redirect to home page when Close button is pressed
    navigate('/');
  };

  const handleClose = () => {
    // 👉 Redirect to home page when Close  button is pressed
    navigate('/');
  };

  return (
    <div className="container mx-auto bg-gray-100 min-h-screen">
      <h2 className="text-2xl text-white top-0 bg-black p-10 font-semibold mb-20"></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Info */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="phone" name="phone" placeholder="phone no" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
            <textarea name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="card">Credit/Debit Card</option>
              <option value="cash">Cash on Delivery</option>
              <option value="mbanking">Mobile Banking</option>
              <option value="paypal">paypal</option>
              <option value="payoneer">payoneer</option>
            </select>
          </div>
          <button type="submit" className="mt-6 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 cursor-pointer">
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-2">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <hr className="my-4" />
              <h3 className="text-lg font-semibold">Total: ${totalPrice}</h3>
              <button onClick={handleClose} className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer">
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
