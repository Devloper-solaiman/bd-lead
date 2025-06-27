"use client";

import React, { useState } from "react";

type Product = {
  id: string;
  name: string;
  image: string;
  unitPrice: number;
};

const products: Product[] = [
  
  {
    id: "1",
    name: "Email Leads (1-99k)",
    image: "https://i.ibb.co/WW7fjHsJ/images.jpg",
    unitPrice: 1.5,
  },
  {
    id: "2",
    name: "Email Leads (10-99k)",
    image: "https://i.ibb.co/WW7fjHsJ/images.jpg",
    unitPrice: 10,
  },
  {
    id: "3",
    name: "Email Leads (100-999k)",
    image: "https://i.ibb.co/WW7fjHsJ/images.jpg",
    unitPrice: 100,
  },
  {
    id: "4",
    name: "Custom Order",
    image: "https://i.ibb.co/SDyHkMQZ/Custom-Order.png",
    unitPrice: 0,
  },
  {
    id: "5",
    name: "Company Data Export",
    image: "https://i.ibb.co/3yvtgsrs/company.png",
    unitPrice: 0.5,
  },
  {
    id: "6",
    name: "Phone number _ $0.03 per 1",
    image: "https://i.ibb.co/ksf6gj6Q/phone.jpg",
    unitPrice: 0.03,
  },
];

export default function OrderSummary() {
  const [selected, setSelected] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<{ [id: string]: number }>(() => {
    const initial: { [id: string]: number } = {};
    products.forEach((p) => (initial[p.id] = 1));
    return initial;
  });

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[id] || 1) + delta);
      const updated = { ...prev, [id]: newQty };
      console.log("Updated quantity:", updated);
      return updated;
    });
  };

  return (
    <div className="bg-blue-100 p-4 rounded-md max-w-3xl mx-auto mt-6">
      <h3 className="font-semibold text-sm mb-3">Select package based on Search URL</h3>
      <div className="grid grid-cols-12 text-xs font-semibold text-gray-700 mb-2">
        <div className="col-span-6">Product</div>
        <div className="col-span-3 text-center">Quantity</div>
        <div className="col-span-3 text-right">Price</div>
      </div>

      {products.map((product) => {
        const quantity = quantities[product.id];
        const price = (product.unitPrice * quantity).toFixed(2);

        return (
          <div
            key={product.id}
            className="grid grid-cols-12 items-center bg-white mb-2 px-3 py-2 rounded shadow-sm"
          >
            <div className="col-span-6 flex items-center gap-2">
              <input
                type="radio"
                name="product"
                checked={selected === product.id}
                onChange={() => {
                  setSelected(product.id);
                  console.log("Selected product:", product.name);
                }}
              />
              <img src={product.image} alt={product.name} className="w-8 h-8 object-contain" />
              <span>
                {product.name} × {quantity}
              </span>
            </div>

            <div className="col-span-3 flex justify-center items-center gap-2">
              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="px-2 py-1 border rounded text-sm"
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange(product.id, 1)}
                className="px-2 py-1 border rounded text-sm"
              >
                +
              </button>
            </div>

            <div className="col-span-3 text-right font-semibold text-sm">
              {price}$ 
            </div>
          </div>
        );
      })}
    </div>
  );
}
