"use client";

import { useCart } from "@/context/context";
import { useState } from "react";

export default function ProductCard({ price }) {
  const { items, addItem, removeItem } = useCart();
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const addItemToCart = (price) => {
    const found = items.find((p) => p.id === price.id);

    if (found) {
      //    setDisabled(true);
      setError("No");
      return;
    } else {
      addItem(price);
      //  setDisabled(false);
    }
  };

  {
    /*
    const addItemToCart = (price) => {
      const found = items.find((item) => item.price.id === price.id);
      if (found) {
        setError("Item has been added!");
        return;
      }
      addItem({ ...price, quantity: 1 });
    };
  */
  }

  const formattedNumber = parseFloat(price.price / 100).toFixed(2);



  return (
    <article
      key={price.id}
      className="border border-slate-200 rounded-md shadow-lg py-2 px-4 flex flex-col gap-2 m-2"
    >
      <h2 className="text-md">{price.name}</h2>
      <h3 className="text-md">{formattedNumber}</h3>
      <div className="flex flex-row gap-x-2">
        <button
          onClick={() => addItemToCart(price)}
          disabled={disabled}
          className={`py-1 rounded-md px-2 border border-slate-800 hover:text-slate-50 hover:bg-lime-500 text-sm font-semibold text-slate-800 ${
            disabled ? "" : ""
          }`}
        >
          Add to Cart
        </button>
        <button
          onClick={() => removeItem(price.id)}
          disabled={disabled}
          className={`py-1 rounded-md px-2 border border-slate-800 hover:text-slate-50 hover:bg-pink-500 text-sm font-semibold text-slate-800 ${
            disabled ? "" : ""
          }`}
        >
          Remove from Cart
        </button>
      </div>
    </article>
  );
}
