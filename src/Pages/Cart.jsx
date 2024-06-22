import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/ProductSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.products.cart);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    mobileNo: ''
  });
  const [proceedClicked, setProceedClicked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);
  };

  const handleProceedToCheckout = () => {
    setProceedClicked(true);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
   
    alert('Order placed successfully!');
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      pincode: '',
      state: '',
      mobileNo: ''
    });
    setProceedClicked(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-3/4 pr-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((product) => (
                <div key={product.id} className="flex items-center justify-between border-b border-gray-300 py-2">
                  <div className="flex items-center">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <p className="font-bold">{product.name}</p>
                      <p className="text-gray-500">${product.price}</p>
                    </div>
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800 focus:outline-none"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4">
                <p className="font-bold">Total: ${calculateTotal()}</p>
                <p className="text-sm text-gray-500">Delivery charge may apply.</p>
              </div>
              {proceedClicked && (
                <div className="mt-8 p-4 bg-gray-100 rounded-md">
                  <h2 className="text-xl font-bold mb-4">Checkout</h2>
                  <form onSubmit={handleCheckout}>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="border p-2 rounded"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="border p-2 rounded"
                        required
                      />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                        className="border p-2 rounded"
                        required
                      />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="border p-2 rounded"
                        required
                      />
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="Pincode"
                        className="border p-2 rounded"
                        required
                      />
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className="border p-2 rounded"
                        required
                      />
                      <input
                        type="text"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                        className="border p-2 rounded"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Checkout
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="w-1/4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery charge:</span>
              <span>$0.00</span>
            </div>
            <div className="border-t border-gray-300 pt-2">
              <div className="flex justify-between mt-2">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${calculateTotal()}</span>
              </div>
            </div>
            <button
              onClick={handleProceedToCheckout}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
