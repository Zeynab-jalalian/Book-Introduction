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
      <ul className="flex gap-8 text-xl">
        {menuItems.map((item) => {
          return (
            <li key={item}>
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
