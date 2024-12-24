
import React from 'react';
import Link from 'next/link';
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-8 mt-36">
      <div className="max-w-7xl w-full bg-white p-6">
        {/* Bag Section with 100% Left and 100% Right for mobile and 70% Left and 30% Right for larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Section (100% for mobile, 70% for larger screens) */}
          <div className="lg:col-span-8">
            <div className="bg-gray-100 font-semibold h-24 px-6 py-4">
              <h1 className="text-lg">Free Delivery</h1>
              <p className="text-sm mt-2">
                Applies to orders of ₹14,000.00 or more.
                <span className="font-bold cursor-pointer border-b border-black">
                  View details
                </span>
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-7">Bag</h2>

            {/* Cart Item 1 */}
            <div className="flex items-start border-b pb-4 mt-9">
              {/* Image Section */}
              <img
                src="/images/cartPage.jpeg"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={150}
                height={150}
                className="rounded-md border"
              />

              {/* Text Section */}
              <div className="ml-4 flex-1 space-y-1">
                <h3 className="font-medium text-gray-800">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className=" text-gray-600">
                  Men's Short-Sleeve Running Top
                </p>
                <p className=" text-gray-500">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex items-center text-gray-500 space-x-9">
                  <p>Size: L</p>
                  <p>Quantity: 1</p>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <FaRegHeart className="text-gray-600 w-6 h-6 cursor-pointer" />
                  <RiDeleteBin6Line className="text-gray-600 w-6 h-6 cursor-pointer" />
                </div>
              </div>

              {/* Price Section */}
              <div className="text-right ml-auto">
                <p className="font-medium">MRP: ₹ 3,895.00</p>
              </div>
            </div>

            {/* Cart Item 2 */}
            <div className="flex items-start border-b pb-4 mt-9">
              {/* Image Section */}
              <img
                src=""
                alt=""
                width={150}
                height={150}
                className="rounded-md border"
              />

              {/* Text Section */}
              <div className="ml-4 flex-1 space-y-1">
                <h3 className="font-medium text-gray-800">
                  Nike Air Max 97 SE
                </h3>
                <p className=" text-gray-600">Men's Shoes</p>
                <p className=" text-gray-500">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <div className="flex items-center text-gray-500 space-x-9">
                  <p>Size: 8</p>
                  <p>Quantity: 1</p>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <FaRegHeart className="text-gray-600 w-6 h-6 cursor-pointer" />
                  <RiDeleteBin6Line className="text-gray-600 w-6 h-6 cursor-pointer" />
                </div>
              </div>

              {/* Price Section */}
              <div className="text-right ml-auto">
                <p className="font-medium">MRP: ₹ 16,995.00</p>
              </div>
            </div>
          </div>

          {/* Right Section (100% for mobile, 30% for larger screens) */}
          <div className="lg:col-span-4 bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="flex mb-4 justify-between">
              <p className="text-black">Subtotal</p>
              <p className="font-medium ml-10 text-right">₹ 20,890.00</p>
            </div>
            <div className="flex mb-4 justify-between">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium ml-10">Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p className="font-medium ml-10">₹ 20,890.00</p>
            </div>
            <button className="bg-black justify-center items-center text-white font-medium py-4 rounded-full lg:w-52 h-16 w-48 mt-11">
              <Link href='/checkout'> Member Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
