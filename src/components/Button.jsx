import React from "react";

function Button({ children }) {
  return (
    <button className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition">
      {children}
    </button>
  );
}

export default Button;
