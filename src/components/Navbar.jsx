import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { i18n } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };


  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];


  return (

    <header
      dir="ltr"
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-white/90
        border-b border-gray-200
        shadow-sm
      "
    >

      <div className="max-w-7xl mx-auto px-6">


        <div className="flex items-center justify-between h-20">


          {/* Logo */}

          <NavLink
            to="/"
            className="flex items-center gap-3"
          >

            <img
              src="/logo.png"
              alt="Sky High Financial"
              className="h-14 w-auto"
            />


            <div className="hidden md:block">

              <div className="font-bold text-xl tracking-wide text-[#0B2D4D]">
                SKY HIGH
              </div>


              <div className="text-xs tracking-wider text-[#C8A24A] uppercase">
                Financial Management Inc.
              </div>


            </div>


          </NavLink>



          {/* Desktop Menu */}

          <nav
            dir="ltr"
            className="hidden lg:flex items-center gap-8"
          >

            {navItems.map((item) => (

              <NavLink

                key={item.path}

                to={item.path}

                end={item.path === "/"}

                className={({ isActive }) =>
                  `
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-[#0B2D4D] border-b-2 border-[#C8A24A] pb-1"
                      : "text-gray-700 hover:text-[#C8A24A]"
                  }
                  `
                }

              >

                {item.name}

              </NavLink>

            ))}


          </nav>




          {/* Right Side */}

          <div
            dir="ltr"
            className="hidden lg:flex items-center gap-5"
          >


            {/* Language */}

            <div className="flex items-center gap-2">


              <Globe
                className="w-4 h-4 text-[#0B2D4D]"
              />


              <button
                onClick={() => changeLanguage("en")}
                className="text-sm hover:text-[#C8A24A]"
              >
                EN
              </button>


              <span>|</span>


              <button
                onClick={() => changeLanguage("fa")}
                className="text-sm hover:text-[#C8A24A]"
              >
                فارسی
              </button>


              <span>|</span>


              <button
                onClick={() => changeLanguage("ar")}
                className="text-sm hover:text-[#C8A24A]"
              >
                العربية
              </button>


            </div>




            <NavLink

              to="/contact"

              className="
                bg-[#0B2D4D]
                hover:bg-[#143e63]
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                transition
                duration-300
              "

            >

              Book Consultation

            </NavLink>


          </div>





          {/* Mobile Button */}

          <button

            className="lg:hidden"

            onClick={() => setMenuOpen(!menuOpen)}

          >

            {menuOpen ? (

              <X className="w-7 h-7" />

            ) : (

              <Menu className="w-7 h-7" />

            )}

          </button>


        </div>


      </div>





      {/* Mobile Menu */}

      {menuOpen && (

        <div
          dir="ltr"
          className="lg:hidden bg-white border-t"
        >


          <div className="px-6 py-6 space-y-5">


            {navItems.map((item) => (

              <NavLink

                key={item.path}

                to={item.path}

                end={item.path === "/"}

                onClick={() => setMenuOpen(false)}

                className="
                  block
                  font-medium
                  text-[#0B2D4D]
                "

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

              className="
                block
                text-center
                bg-[#0B2D4D]
                text-white
                py-3
                rounded-lg
              "

            >

              Book Consultation

            </NavLink>


          </div>


        </div>

      )}


    </header>

  );

}