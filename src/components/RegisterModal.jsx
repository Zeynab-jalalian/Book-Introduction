import React, { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert";

function RegisterModal({ onClose, registerToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || name.length < 8) {
      toast.error("نام باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    if (email.trim() === "") {
      toast.error("لطفاً ایمیل خود را وارد کنید.");
      return;
    }

    if (password.length < 8) {
      toast.error("رمز عبور باید حداقل ۸ کاراکتر داشته باشد.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("رمزهای عبور یکسان نیستند.");
      return;
    }

    if (!acceptedTerms) {
      toast.error("لطفاً قوانین و شرایط را بپذیرید.");
      return;
    }

    Swal({
      title: "ثبت نام موفق!",
      text: "با موفقیت ثبت نام شدید.",
      icon: "success",
      button: "باشه",
    });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAcceptedTerms(false);
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
              ایجاد حساب کاربری
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
            برای ایجاد حساب اطلاعات خود را وارد کنید
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="register-name"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              نام
            </label>

            <input
              id="register-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام خود را وارد کنید"
              className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="register-email"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              ایمیل
            </label>

            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید"
              className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="register-password"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              رمز عبور
            </label>

            <input
              id="register-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="register-confirm-password"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              تکرار رمز عبور
            </label>

            <input
              id="register-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="رمز عبور را دوباره وارد کنید"
              className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
            />
          </div>
          <div className="mb-5 flex items-center gap-2">
            <input
              id="register-remember"
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-amber-700"
            />

            <label
              htmlFor="register-remember"
              className="cursor-pointer text-sm text-stone-600"
            >
              قوانین و شرایط را می‌پذیرم
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-amber-700 py-3 font-medium text-white transition hover:bg-amber-800"
          >
            ثبت‌نام
          </button>
          <div className="mt-6 text-center text-sm text-stone-500">
            <span>قبلاً حساب ساخته‌اید؟ </span>
            <button
              onClick={registerToLogin}
              type="button"
              className="font-medium cursor-pointer text-amber-700 transition hover:text-amber-800 hover:underline"
            >
              وارد شوید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
