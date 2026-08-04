function BookCard({ id, title, author, category, description, image, audio }) {
  return (
    <article className="w-72 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden">
      <img
        src={`/images/${image}`}
        alt={title}
        className="w-full h-80 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-stone-800">{title}</h3>

        <p className="mt-3 text-stone-600">{author}</p>

        <p className="mt-2 text-amber-700">{category}</p>

        <p className="mt-4 text-stone-600 leading-7 text-sm">{description}</p>

        <button className="mt-6 bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-800 transition">
          مشاهده جزئیات
        </button>
      </div>
    </article>
  );
}

export default BookCard;
