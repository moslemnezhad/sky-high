import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "fa" || i18n.language === "ar"
        ? "rtl"
        : "ltr";

    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const navItems = [
    {
      name: t("navbar.home"),
      path: "/",
    },
    {
      name: t("navbar.about"),
      path: "/about",
    },
    {
      name: t("navbar.services"),
      path: "/services",
    },
    {
      name: t("navbar.resources"),
      path: "/resources",
    },
    {
      name: t("navbar.contact"),
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <NavLink
            to="/"
            className="flex items-center gap-4"
          >

            <img
              src="/logo.png"
              alt="Sky High Financial"
              className="h-14 w-auto"
            />

            <div className="hidden md:block">

              <h2 className="font-bold text-xl text-[#0B2D4D] tracking-wide">
                SKY HIGH
              </h2>

              <p className="text-xs uppercase tracking-[0.25em] text-[#C8A24A]">
                Financial Management Inc.
              </p>

            </div>

          </NavLink>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#0B2D4D] border-b-2 border-[#C8A24A] pb-1"
                      : "text-gray-700 hover:text-[#C8A24A]"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-6">

            <div className="flex items-center gap-2 text-sm">

              <Globe className="w-4 h-4 text-[#0B2D4D]" />

              <button
                onClick={() => changeLanguage("en")}
                className={`hover:text-[#C8A24A] ${
                  i18n.language === "en"
                    ? "font-bold text-[#C8A24A]"
                    : ""
                }`}
              >
                EN
              </button>

              <span>|</span>

              <button
                onClick={() => changeLanguage("fa")}
                className={`hover:text-[#C8A24A] ${
                  i18n.language === "fa"
                    ? "font-bold text-[#C8A24A]"
                    : ""
                }`}
              >
                فارسی
              </button>

              <span>|</span>

              <button
                onClick={() => changeLanguage("ar")}
                className={`hover:text-[#C8A24A] ${
                  i18n.language === "ar"
                    ? "font-bold text-[#C8A24A]"
                    : ""
                }`}
              >
                العربية
              </button>

            </div>

            <NavLink
              to="/contact"
              className="bg-[#0B2D4D] hover:bg-[#143e63] text-white px-6 py-3 rounded-xl font-semibold transition shadow"
            >
              {t("navbar.book")}
            </NavLink>

          </div>

          {/* Mobile */}

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen
              ? <X className="w-7 h-7 text-[#0B2D4D]" />
              : <Menu className="w-7 h-7 text-[#0B2D4D]" />}
          </button>

        </div>

      </div>

      {menuOpen && (

        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">

          <div className="px-6 py-6 space-y-5">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className="block font-medium text-[#0B2D4D]"
              >
                {item.name}
              </NavLink>

            ))}

            <hr />

            <div className="flex gap-5">

              <button onClick={() => changeLanguage("en")}>
                EN
              </button>

              <button onClick={() => changeLanguage("fa")}>
                فارسی
              </button>

              <button onClick={() => changeLanguage("ar")}>
                العربية
              </button>

            </div>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-[#0B2D4D] text-white py-3 rounded-xl font-semibold"
            >
              {t("navbar.book")}
            </NavLink>

          </div>

        </div>

      )}

    </header>
  );
}