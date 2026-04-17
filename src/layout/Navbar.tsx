import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skill" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#020617] text-[#7e93b6] px-10 shadow-lg shadow-white/10 sticky top-0 z-50">
      
      <div className="flex justify-between items-center h-14">

        <Link to="/">
          <img src={logo} width={120} height={120} alt="website logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {NavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#22D3EE] transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {NavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-center hover:text-[#22D3EE] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;