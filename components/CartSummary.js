"use client";

import { useCart } from "@/context/context";

import CartItem from "@/components/CartItem";
import { checkout } from "@/lib/checkout";

export default function CartSummary() {
  const { items } = useCart();
  
  const handleCheckout = (event) => {
    event.preventDefault();
    checkout(items);
  };


  console.log(items);
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {items?.map((price) => (
        <CartItem key={price.id} price={price} />
      ))}
       <div className="flex flex-col gap-3 items-center pt-3">
          <h1 className="text-lg font-semibold m-4">Total: 100$</h1>
          <div className="flex flex-row gap-3 ">
            <button className="py-2 rounded-md px-4 text-slate-50 hover:cursor-pointer bg-pink-500 hover:bg-pink-800 text-lg font-semibold">
              Reset Cart
            </button>
            <button
              onClick={handleCheckout}
              className="py-2 rounded-md px-4 text-slate-50 hover:cursor-pointer bg-lime-500 hover:bg-lime-800 text-lg font-semibold"
            >
              Checkout
            </button>
          </div>
        </div>
    </div>
  );
}
