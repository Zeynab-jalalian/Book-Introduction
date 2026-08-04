import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="flex items-center justify-between px-12">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-stone-800 leading-relaxed">
            دنیایی از کتاب‌ها را کشف کنید
          </h1>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            معرفی کتاب‌های ارزشمند همراه با خلاصه و تیزر صوتی.
          </p>

          <div className="mt-8">
            <Button>مشاهده کتاب‌ها</Button>
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            className="w-96 object-contain rounded-2xl"
            src="/images/heroImg.png"
            alt="Hero-Book"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
