import React from "react";

function About() {
  return (
    <section className="py-12 bg-white md:py-20">
      <div className="flex flex-col items-center gap-10 px-6 md:flex-row md:justify-between md:px-12">
        <div className="w-full flex justify-center md:w-1/2">
          <img
            src="/images/heroImg.png"
            alt="About Book"
            className="w-72 object-contain rounded-2xl md:w-96"
          />
        </div>

        <div className="w-full text-center md:w-1/2 md:text-right">
          <h2 className="text-3xl font-bold text-stone-800 leading-relaxed md:text-4xl">
            درباره ما
          </h2>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            ما اینجا کتاب‌هایی را معرفی می‌کنیم که ارزش خواندن دارند؛ از آثار
            کلاسیک جهان تا رمان‌های ماندگار ایرانی.
          </p>

          <p className="mt-4 text-lg text-stone-600 leading-8">
            هدف ما کمک به پیدا کردن کتاب‌های مناسب با معرفی کوتاه، خلاصه و تیزر
            صوتی است.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
