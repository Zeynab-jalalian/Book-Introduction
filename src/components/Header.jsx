import React, { useState } from "react";
import Logo from "./Logo";
import MenuItemLists from "./MenuItemLists";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }
  function showLogin() {
    setIsLogin(true);
    setIsModalOpen(true);
  }
  function showRegister() {
    setIsLogin(false);
    setIsModalOpen(true);
  }

  return (
    <header className="relative flex justify-between items-center px-6 py-5 bg-stone-50 border-b border-stone-200 shadow-[0_8px_20px_rgba(0,0,0,0.05)] md:px-12">
      <Logo />

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <MenuItemLists />
      </nav>

      {/* Desktop Login / Register */}
      <div className="hidden md:flex items-center gap-3">
        <button
          className="px-4 py-2 text-amber-800 font-medium border border-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition"
          onClick={showLogin}
        >
          ورود
        </button>

        <button
          className="px-4 py-2 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition"
          onClick={showRegister}
        >
          ثبت‌نام
        </button>
      </div>

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

          <div className="flex justify-center gap-3 mt-6 px-6">
            <button
              className="flex-1 px-4 py-2 text-amber-800 font-medium border border-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition"
              onClick={showLogin}
            >
              ورود
            </button>

            <button
              className="flex-1 px-4 py-2 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition"
              onClick={showRegister}
            >
              ثبت‌نام
            </button>
          </div>
        </nav>
      )}
      {isModalOpen &&
        (isLogin ? (
          <LoginModal
            onClose={() => {
              setIsModalOpen(false);
            }}
            setIsModalOpen={setIsModalOpen}
          />
        ) : (
          <RegisterModal
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        ))}
    </header>
  );
}

export default Header;
