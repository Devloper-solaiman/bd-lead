import React from "react";
import Image from "next/image";

const methods = [
  { id: "cod", label: "Cash on Delivery", icon: "/icons/cod.svg" },
  { id: "stripe", label: "Stripe", icon: "/icons/stripe.svg" },
  { id: "visa", label: "Visa / MasterCard", icon: "/icons/visa.svg" },
  { id: "paypal", label: "PayPal", icon: "/icons/paypal.svg" },
];

export default function PaymentMethods() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Select payment method</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {methods.map((m) => (
          <label
            key={m.id}
            className="flex items-center p-2 border rounded cursor-pointer hover:shadow"
          >
            <input className="mr-2" name="payment" type="radio" value={m.id} />
            <Image alt={m.label} height={40} src={m.icon} width={40} />
            <span className="ml-2 text-sm">{m.label}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
