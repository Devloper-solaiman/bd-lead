"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type BillingFormValues = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  postcode: string;
  phone: string;
};

export default function BillingDetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BillingFormValues>();

  // Watch all fields and log whenever they change
  const allValues = watch();

  useEffect(() => {
    console.log("BillingDetails changed:", allValues);
  }, [allValues]);

  const onSubmit = (data: BillingFormValues) => {
    console.log("BillingDetails submitted:", data);
    // এখান থেকে API কল বা অন্য কোনো লজিক যুক্ত করতে পারেন
  };

  return (
    <section className="mt-6 p-6 rounded shadow-sm max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Billing details</h2>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block mb-1" htmlFor="firstName">
            First name *
          </label>
          <input
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            className="w-full border border-gray-500 bg-[#DAE7FF] rounded px-2 py-1"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1" htmlFor="lastName">
            Last name *
          </label>
          <input
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full border rounded border-gray-500 bg-[#DAE7FF] px-2 py-1"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-1" htmlFor="streetAddress">
            Street address *
          </label>
          <input
            id="streetAddress"
            {...register("streetAddress", {
              required: "Street address is required",
            })}
            className="w-full border rounded border-gray-500 bg-[#DAE7FF] px-2 py-1"
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-xs mt-1">
              {errors.streetAddress.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1" htmlFor="city">
            City *
          </label>
          <input
            id="city"
            {...register("city", { required: "City is required" })}
            className="w-full border rounded border-gray-500 bg-[#DAE7FF] px-2 py-1"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1" htmlFor="postcode">
            Postcode / ZIP *
          </label>
          <input
            id="postcode"
            {...register("postcode", { required: "Postcode is required" })}
            className="w-full border rounded border-gray-500 bg-[#DAE7FF] px-2 py-1"
          />
          {errors.postcode && (
            <p className="text-red-500 text-xs mt-1">
              {errors.postcode.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-1" htmlFor="phone">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full border rounded border-gray-500 bg-[#DAE7FF] px-2 py-1"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <button
            className="w-full bg-blue-600 text-white rounded py-2 mt-2 disabled:opacity-50"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Continue to Payment"}
          </button>
        </div>
      </form>
    </section>
  );
}
