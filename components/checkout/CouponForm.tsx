import React from "react";

export default function CouponForm() {
  return (
    <section className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Have a coupon?</h2>
      <div className="flex items-center gap-2 text-sm">
        <input
          className="flex-1 border rounded px-2 py-1"
          placeholder="Coupon code"
          type="text"
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded">
          Apply
        </button>
      </div>
    </section>
  );
}
