import React, { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg border rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">get paid for your opinions</h2>
        <p className="text-center mb-6 text-gray-700">
          Surveys can be fun?! Tell us how you feel to earn gift cards, vouchers and cash!
        </p>

        <form className="space-y-4">
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
          
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="input input-bordered w-full" />
            <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
          </div>

          <input type="text" placeholder="Your address (line 1):" className="input input-bordered w-full" />
          <input type="text" placeholder="Your address (line 2):" className="input input-bordered w-full" />
          <input type="text" placeholder="What is your ZIP code?" className="input input-bordered w-full" />
          <p className="text-xs text-gray-500">Please use the 5-digit format for your ZIP Code (e.g. 00000)</p>

          <div className="flex gap-4">
            <input type="number" placeholder="Age" className="input input-bordered w-full" />
            <select className="select select-bordered w-full">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <p className="text-xs text-gray-500">
            You must enter a minimum of 8 characters with at least one (1) letter and one (1) number
          </p>

          <button className="btn btn-primary w-full mt-6">Get Started Free</button>
        </form>
      </div>
    </section>
  );
}
