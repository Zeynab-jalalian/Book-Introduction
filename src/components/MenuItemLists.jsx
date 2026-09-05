import React from "react";
import { Link } from "react-router";

function MenuItemLists() {
  const menuItems = [
    { id: 1, title: "خانه", path: "/" },
    { id: 2, title: "کتاب‌ها", path: "/books" },
    { id: 3, title: "دسته‌بندی‌ها", path: "/categories" },
    { id: 4, title: "درباره ما", path: "/about" },
    { id: 5, title: "ارتباط با ما", path: "/contact" },
  ];
  return (
    <>
      <ul className="flex flex-col items-center gap-6 text-xl md:flex-row md:gap-8">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              className="w-full text-center border-b border-stone-200 py-2.5 last:border-none md:w-auto md:border-none md:py-0"
            >
              <Link
                to={item.path}
                className="font-medium text-stone-700 hover:text-amber-700 transition-colors duration-300 cursor-pointer"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MenuItemLists;
