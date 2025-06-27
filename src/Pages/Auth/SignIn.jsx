import React, { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg border rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">Welcome Back</h2>
        <p className="text-center mb-6 text-gray-700">
          Sign in to your account to continue earning rewards.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />

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

          <div className="text-right text-sm">
            <a href="#" className="link link-hover text-blue-600">
              Forgot password?
            </a>
          </div>

          <button className="btn btn-primary w-full mt-2">Login</button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <button className="btn bg-white text-black border border-[#e5e5e5] flex items-center justify-center gap-2">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path fill="#fff" d="m0 0H512V512H0" />
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </g>
            </svg>
            Login with Google
          </button>

          <button className="btn bg-[#1A77F2] text-white border-[#005fd8] flex items-center justify-center gap-2">
            <svg
              aria-label="Facebook logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
              />
            </svg>
            Login with Facebook
          </button>
        </div>
      </div>
    </section>
  );
}
