import React, { useId, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const id = useId();
  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 8 || name.trim() === "") {
      toast.error("نام کاربری باید حداقل 8 کاراکتر باشد.", {
        duration: 1000,
        position: "top-center",
      });
      return;
    }
    if (email.trim() === "") {
      toast.error("لطفاً ایمیل خود را وارد کنید.");
      return;
    }
    if (message.trim() === "") {
      toast.error("لطفا پیام خود را وارد کنید.");
      return;
    }
    toast.success("پیام شما با موفقیت ارسال شد");

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <section className="py-12 bg-stone-50 md:py-20">
      <div className="flex flex-col items-center gap-10 px-6 md:flex-row md:justify-between md:px-12">
        <div className="w-full text-center md:w-1/2 md:text-right">
          <h2 className="text-3xl font-bold text-stone-800 leading-relaxed md:text-4xl">
            ارتباط با ما
          </h2>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            اگر سوالی درباره کتاب‌ها، پیشنهادها یا همکاری دارید، خوشحال می‌شویم
            با ما در ارتباط باشید.
          </p>

          <div className="mt-6 text-stone-700">
            <p>ایمیل: info@example.com</p>
            <p className="mt-2">تلفن: 09123456789</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-white p-6 rounded-2xl shadow-[0_8_20px_rgba(0,0,0,0.08)] md:w-1/2 md:p-8"
        >
          <div className="mb-5">
            <label htmlFor={id + "name"} className="block mb-2 text-stone-700">
              نام
            </label>

            <input
              id={id + "name"}
              type="text"
              className="w-full px-4 py-3 border border-stone-200 rounded-lg outline-none focus:border-amber-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor={id + "email"} className="block mb-2 text-stone-700">
              ایمیل
            </label>

            <input
              id={id + "email"}
              type="email"
              className="w-full px-4 py-3 border border-stone-200 rounded-lg outline-none focus:border-amber-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor={id + "message"}
              className="block mb-2 text-stone-700"
            >
              پیام
            </label>

            <textarea
              id={id + "message"}
              className="w-full h-32 px-4 py-3 border border-stone-200 rounded-lg outline-none resize-none focus:border-amber-700"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition"
          >
            ارسال پیام
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
}

export default Contact;
