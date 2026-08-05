import React from "react";

function MenuItemLists() {
  const menuItems = [
    "خانه",
    "کتاب‌ها",
    "دسته‌بندی‌ها",
    "درباره ما",
    "ارتباط با ما",
  ];
  return (
    <>
      <ul className="flex flex-col items-center gap-6 text-xl md:flex-row md:gap-8">
        {menuItems.map((item) => {
          return (
            <li
              key={item}
              className="w-full text-center border-b border-stone-200 py-2.5 last:border-none md:w-auto md:border-none md:py-0"
            >
              <a className="font-medium text-stone-700 hover:text-amber-700 transition-colors duration-300 cursor-pointer">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MenuItemLists;
