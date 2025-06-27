import BillingDetails from "@/components/checkout/BillingDetails";
import CouponForm from "@/components/checkout/CouponForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import PlaceOrder from "@/components/checkout/PlaceOrder";
import React from "react";


export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-gray-50">
      <PaymentMethods />
      <BillingDetails />
      <CouponForm />
      <OrderSummary />
      <PlaceOrder />
    </div>
  );
}
