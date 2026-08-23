import React, { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

function LoginModal({ onClose, loginToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("لطفاً ایمیل خود را وارد کنید.");
      return;
    }
    if (password.length < 8 || password.trim() === "") {
      toast.error("رمزعبور حداقل باید 8 کاراکتر داشته باشد.");
      return;
    }
    toast.success("پیام شما با موفقیت ارسال شد");
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-stone-800 md:text-3xl">
              ورود به حساب کاربری
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-800"
            >
              <X size={24} />
            </button>
          </div>

          <p className="mt-2 text-sm text-stone-500">
            برای ادامه وارد حساب خود شوید
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="login-email"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              ایمیل
            </label>

            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید"
              className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="login-password"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              رمز عبور
            </label>

            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
            />
          </div>
          <div className="mb-5 flex items-center gap-2">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-amber-700"
            />

            <label
              htmlFor="remember-me"
              className="cursor-pointer text-sm text-stone-600"
            >
              مرا به خاطر بسپار
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-amber-700 py-3 font-medium text-white transition hover:bg-amber-800"
          >
            ورود
          </button>
          <div className="mt-6 text-center text-sm text-stone-500">
            <span>حساب کاربری ندارید؟ </span>
            <button
              onClick={loginToRegister}
              type="button"
              className="font-medium cursor-pointer text-amber-700 transition hover:text-amber-800 hover:underline"
            >
              ثبت‌نام کنید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
