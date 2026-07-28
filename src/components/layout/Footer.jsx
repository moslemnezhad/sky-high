import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ChevronRight,
 } from "lucide-react";

import { Link } from "react-router-dom";

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
    </svg>
  );
}


function LinkedinIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.5V20h3.44V8.5zM5.22 3A2 2 0 1 0 5.22 7a2 2 0 0 0 0-4zM20.5 13.3c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.37V20h3.43v-5.7c0-1.5.28-3 2.17-3 1.87 0 1.9 1.74 1.9 3.1V20h3.43v-6.7z"/>
    </svg>
  );
}
export default function Footer() {

  const { t } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer
        dir="ltr"
        className="bg-[#071F35] text-white"
      >

      {/* Gold Top Border */}
      <div className="h-1 bg-[#C8A24A]" />


      <div className="max-w-7xl mx-auto px-6 py-20">


        <div
          dir="ltr"
          className="grid gap-12 lg:grid-cols-4"
        >

          {/* Company */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src="/logo.png"
                alt="Sky High Financial"
                className="h-16 w-16 object-contain flex-shrink-0"
              />

              <h3 className="text-xl font-bold leading-tight">
                Sky High Financial
                <br />
                Management Inc.
              </h3>

            </div>

            <p className="mt-5 text-gray-300 leading-8">
              {t("footer.company.description")}
            </p>


            <div className="mt-6 w-full">

              <p className="text-sm font-semibold text-white mb-3">
                {t("footer.social.follow")}
              </p>


              <div className="flex gap-5">

                <a
                  href="https://www.instagram.com/skyhighfm.inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-300 hover:text-[#C8A24A] hover:scale-110 transition"
                >
                  <InstagramIcon className="w-7 h-7" />
                </a>


                <a
                  href="https://www.linkedin.com/company/sky-high-financial-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-300 hover:text-[#C8A24A] hover:scale-110 transition"
                >
                  <LinkedinIcon className="w-7 h-7" />
                </a>

              </div>

            </div>


            {/* Languages */}

            <div className="mt-10 flex flex-wrap gap-2 ltr">


              <button
                onClick={() => changeLanguage("en")}
                className="
                  bg-[#0B2D4D]
                  px-3 py-1
                  rounded-full
                  text-sm
                  hover:bg-[#C8A24A]
                  transition
                "
              >
                {t("footer.languages.english")}
              </button>



              <button
                onClick={() => changeLanguage("fa")}
                className="
                  bg-[#0B2D4D]
                  px-3 py-1
                  rounded-full
                  text-sm
                  hover:bg-[#C8A24A]
                  transition
                "
              >
                {t("footer.languages.persian")}
              </button>



              <button
                onClick={() => changeLanguage("ar")}
                className="
                  bg-[#0B2D4D]
                  px-3 py-1
                  rounded-full
                  text-sm
                  hover:bg-[#C8A24A]
                  transition
                "
              >
                {t("footer.languages.arabic")}
              </button>


            </div>

            
           </div>
      

          {/* Services */}


          <div>


            <h3 className="text-xl font-semibold mb-6">
              {t("footer.services.title")}
            </h3>



            <div dir="ltr" className="space-y-4">


              {[
                {
                  name: t("footer.services.accounting"),
                  link: "/services/accounting",
                },
                {
                  name: t("footer.services.bookkeeping"),
                  link: "/services/bookkeeping",
                },
                {
                  name: t("footer.services.payroll"),
                  link: "/services/payroll",
                },
                {
                  name: t("footer.services.corporateTax"),
                  link: "/services/corporate-tax",
                },
                {
                  name: t("footer.services.personalTax"),
                  link: "/services/personal-tax",
                },
                {
                  name: t("footer.services.crossBorder"),
                  link: "/services/cross-border",
                },
                {
                  name: t("footer.services.cra"),
                  link: "/services/cra-compliance",
                },
                {
                  name: t("footer.services.advisory"),
                  link: "/services/advisory",
                },

              ].map((item) => (


                <Link
                key={item.name}
                to={item.link}
                dir="ltr"
                className="flex items-center justify-start gap-2 text-gray-300 hover:text-[#C8A24A] transition"
              >
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>


              ))}


            </div>


          </div>



          {/* Company Menu */}


          <div>


            <h3 className="text-xl font-semibold mb-6">
              {t("footer.companyMenu.title")}
            </h3>



            <div className="space-y-4">


              <Link
                to="/"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                {t("footer.companyMenu.home")}
              </Link>



              <Link
                to="/about"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                {t("footer.companyMenu.about")}
              </Link>



              <Link
                to="/services"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                {t("footer.companyMenu.services")}
              </Link>



              <Link
                to="/resources"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                {t("footer.companyMenu.resources")}
              </Link>



              <Link
                to="/contact"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                {t("navbar.contact")}
              </Link>


            </div>


          </div>



          {/* Contact */}


          <div>


            <h3 className="text-xl font-semibold mb-6">
              {t("footer.contact.title")}
            </h3>



            <div className="space-y-5">



              <div className="flex gap-3">

                <Phone className="text-[#C8A24A]" />

                <div>

                  <div className="font-medium">
                    {t("footer.contact.phone")}
                  </div>

                  <div className="text-gray-300">
                    {t("footer.contact.phoneValue")}
                  </div>

                </div>

              </div>


              <div className="flex gap-3">


                <Mail className="text-[#C8A24A]" />


                <div>

                  <div className="font-medium">
                    {t("footer.contact.email")}
                  </div>


                  <div className="text-gray-300 break-all">
                    {t("footer.contact.emailAddress")}
                  </div>


                </div>

              </div>


              <div className="flex gap-3">

                <MapPin className="text-[#C8A24A]" />

                <div>

                  <div className="font-medium">
                    {t("footer.contact.serviceArea")}
                  </div>

                  <div className="text-gray-300">
                    {t("footer.contact.serviceAreaValue")}
                  </div>

                </div>

              </div>



              <div className="flex gap-3">


                <Clock3 className="text-[#C8A24A]" />


                <div>


                  <div className="font-medium">
                    {t("footer.contact.hours")}
                  </div>


                  <div className="text-gray-300 whitespace-pre-line">
                    {t("footer.contact.hoursValue")}
                  </div>


                </div>


              </div>



            </div>


          </div>




        </div>


      </div>



      {/* Bottom */}


      <div className="border-t border-gray-700">


        <div className="
          max-w-7xl mx-auto px-6 py-6
          flex flex-col md:flex-row
          justify-between items-center
          gap-4
        ">



          <p className="text-gray-400 text-sm text-center">


            © {new Date().getFullYear()} Sky High Financial Management Inc.{" "}

            {t("footer.copyright")}


          </p>





          <div className="flex gap-6 text-sm">


            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#C8A24A]"
            >
              {t("footer.privacy")}
            </Link>




            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#C8A24A]"
            >
              {t("footer.terms")}
            </Link>



          </div>



        </div>


      </div>


    </footer>
  );
}