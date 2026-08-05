import React, { useState } from "react";
import Logo from "./Logo";
import MenuItemLists from "./MenuItemLists";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="relative flex justify-between items-center px-6 py-5 bg-stone-50 border-b border-stone-200 shadow-[0_8px_20px_rgba(0,0,0,0.05)] md:px-12">
      <Logo />

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <MenuItemLists />
      </nav>

      {/* Mobile Button */}
      <button
        onClick={handleMenu}
        className="md:hidden cursor-pointer transition hover:scale-110"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full right-0 w-full bg-stone-50 shadow-lg py-6 md:hidden">
          <MenuItemLists />
        </nav>
      )}
    </header>
  );
}

export default Header;
