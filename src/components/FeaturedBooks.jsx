import BookCard from "./BookCard";

function FeaturedBooks() {
  const books = [
    {
      id: 1,
      title: "جنایت و مکافات",
      author: "فئودور داستایفسکی",
      category: "رمان روان‌شناختی",
      description:
        "داستان مردی جوان که درگیر کشمکش‌های اخلاقی، گناه و رستگاری می‌شود.",
      image: "heroImg.png",
      audio: true,
    },
    {
      id: 2,
      title: "برادران کارامازوف",
      author: "فئودور داستایفسکی",
      category: "فلسفی | رمان",
      description:
        "روایتی عمیق درباره ایمان، اخلاق، خانواده و پیچیدگی‌های انسان.",
      image: "heroImg.png",
      audio: true,
    },
    {
      id: 3,
      title: "سمفونی مردگان",
      author: "عباس معروفی",
      category: "رمان ایرانی",
      description:
        "داستان فروپاشی یک خانواده در بستر جامعه‌ای پر از تضاد و تنهایی.",
      image: "heroImg.png",
      audio: true,
    },
    {
      id: 4,
      title: "1984",
      author: "جورج اورول",
      category: "ادبیات سیاسی | پادآرمان‌شهر",
      description:
        "رمانی درباره کنترل، آزادی، قدرت و جامعه‌ای زیر سلطه نظارت دائمی.",
      image: "heroImg.png",
      audio: true,
    },
    {
      id: 5,
      title: "مزرعه حیوانات",
      author: "جورج اورول",
      category: "تمثیلی | سیاسی",
      description: "داستانی نمادین درباره انقلاب، قدرت و تغییر ارزش‌ها.",
      image: "heroImg.png",
      audio: true,
    },
  ];

  return (
    <>
      <section className="py-20 bg-stone-100">
        <h2 className="text-4xl font-bold text-center text-stone-800 mb-12">
          کتاب‌های منتخب
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>
    </>
  );
}

export default FeaturedBooks;
