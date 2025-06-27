import React from "react";

import RegisterPage from "./register";
import PaymentMethods from "./checkout/PaymentMethods";
import BillingDetails from "./checkout/BillingDetails";
import CouponForm from "./checkout/CouponForm";
import OrderSummary from "./checkout/OrderSummary";
import PlaceOrder from "./checkout/PlaceOrder";

const OrderFrom = () => {
  return (
    <div className="border-3 border-[#2C3F60] mx-12">
      <div className="text-center bg-[#2C3F60] py-4 text-white">
        <h1 className="font-bold text-3xl mb-4">Order Form ​</h1>
        <h2 className="font-bold text-2xl pb-4">
          How many leads you need, write in the front box <br /> ​1 means 1000
          leads
        </h2>
      </div>
      <div className=" max-w-4xl mx-auto p-6 space-y-6">
        <RegisterPage />
        <OrderSummary />
        <BillingDetails />
        <PaymentMethods />
        <CouponForm />
        <PlaceOrder />
      </div>
    </div>
  );
};

export default OrderFrom;
