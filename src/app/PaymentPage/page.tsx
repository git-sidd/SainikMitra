"use client";

import React, { useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const [amount, setAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/pages/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const data = await response.json();
      console.log("Order data:", data);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        name: "Sainik Mitra",
        description: "Test Transaction",
        order_id: data.orderId,
        handler: function (response: any) {
          console.log("Payment successful", response);
          router.push("/generate");
        },
        prefill: {
          name: "Siddhesh Patole",
          email: "sprp@gmail.com",
          contact: "876633333",
        },
        theme: {
          color: "#FF9933", // Saffron
        },
      };

      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        throw new Error("Razorpay SDK not loaded");
      }
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-[40vh] rounded-md flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-white to-green-100 px-4 py-8">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      {/* Indian Flag */}
      <div className="mb-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="Indian Flag" className="w-24 h-16 rounded shadow" />
      </div>

      <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-2">Contribute for a Cause</h1>
        <p className="text-sm text-gray-600 mb-6">
          Your support honors our brave martyrs. 🇮🇳 Jai Hind!
        </p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min="1"
          className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Enter amount in INR"
        />

        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 disabled:bg-gray-400"
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>

        <div className="text-xs text-gray-400 mt-6 italic">
          Every rupee is a salute to a hero.
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
