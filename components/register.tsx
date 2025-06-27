"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMemoPad } from "react-icons/ci";

export default function RegisterPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 p-4 text-sm border rounded">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2  text-xs font-medium w-full"
      >
        <CiMemoPad className=" dark:text-gray-100 text-black" />
        <span>Returning customer? <span className="font-semibold">Click here to login</span></span>

      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${open ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
      >
        <div className="space-y-3 border border-gray-500 rounded p-4">
          <div className="mt-4 space-y-3 ">
            <p className="text-xs text-gray-600">
              If you have shopped with us before, please enter your details below.
              If you are a new customer, please proceed to the Billing section.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input className="w-full border rounded px-2 py-1" type="text" />
              </div>
              <div>
                <input
                  className="w-full border rounded px-2 py-1"
                  type="password"
                />
              </div>
              <div className="flex items-center col-span-full">
                <input className="mr-2" id="remember" type="checkbox" />
                <label className="text-xs" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <button
                className="col-span-full bg-orange-500 text-white rounded py-2 text-center"
                type="submit"
              >
                Login
              </button>
              <div className="col-span-full rounded text-end">
                <Link href="/" className="text-emerald-500">Lost your password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
