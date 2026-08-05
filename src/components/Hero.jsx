import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <section className="py-16 bg-stone-50 md:py-20">
      <div className="flex flex-col-reverse items-center gap-10 px-6 md:flex-row md:justify-between md:px-12">
        <div className="w-full text-center md:w-1/2 md:text-right">
          <h1 className="text-4xl font-bold text-stone-800 leading-relaxed md:text-5xl">
            دنیایی از کتاب‌ها را کشف کنید
          </h1>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            معرفی کتاب‌های ارزشمند همراه با خلاصه و تیزر صوتی.
          </p>

          <div className="mt-8">
            <Button>مشاهده کتاب‌ها</Button>
          </div>
        </div>

        <div className="w-full flex justify-center md:w-1/2">
          <img
            className="w-72 object-contain rounded-2xl md:w-96"
            src="/images/heroImg.png"
            alt="Hero-Book"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
