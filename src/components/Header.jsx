import React from "react";
import Logo from "./Logo";
import MenuItemLists from "./MenuItemLists";

function Header() {
  return (
    <header className="flex justify-around items-center px-12 py-5 bg-stone-50 border-b border-stone-200 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
      <Logo />

      <nav>
        <MenuItemLists />
      </nav>
    </header>
  );
}

export default Header;
