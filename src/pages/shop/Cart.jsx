import React from 'react'
import { useCart } from './CartContext'
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import { getImgUrl } from "../../utils/getImageURL";
import detailBannerImg from "../../assets/products/productdetailimg.png"

  

const Cart = () => {
  const {cartItems, updateQuantity, removeFromCart} = useCart();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <div className='max-w-screen-2x1 container mx-auto py-30 p-4 mt-0 bg-gray-500 text-gray-600 min-h-screen' style={{backgroundImage: `Url(${detailBannerImg})`}}>
      <h2 className=' text-2xl font-semibold mb-8 text-gray-600 border-b-2'>Your Cart</h2>
      <div>
        {cartItems.length === 0 ? (<p className=' text-lg text-white'>Your Cart is empty.</p>) : (
          <>
            <div className=' space-y-2'>
              {cartItems.map((item) => (
                <div key={item.id} className=' flex items-center justify-between bg-white shadow-md p-4 rounded-md'>
                  <div className=' flex items-center gap-4'>
                  <img src={getImgUrl(item.imageUrl)} alt={item.name} className=' w-20 h-20 object-cover rounded-md'/>
                  <div>
                    <h3 className=' text-xl font-semibold'>{item.name}</h3>
                    <p className=' text-gray-600'>$ {item.price} × {item.quantity}</p>
                    <div className=' flex items-center gap-2 mt-2'>
                      <button onClick={() => updateQuantity (item.id, -1)} className=' px-2 py-1 bg-gray-200 rounded hover:bg-yellow-400 cursor-pointer'>
                        <FaMinus />
                      </button>
                      <span className=' px-3'>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className=' px-3 py-1  bg-gray-200 rounded hover:bg-green-500 cursor-pointer'>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
                  <button onClick={() => removeFromCart(item.id)} className='  bg-gray-200 hover:text-red-500 cursor-pointer text-xl'>
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>

            <div className='text-right mt-6'>
              <h3 className='text-1xl font-semibold text-white'>Total: ${totalPrice}</h3>
              <button className='mt-4 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 cursor-pointer'>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart


