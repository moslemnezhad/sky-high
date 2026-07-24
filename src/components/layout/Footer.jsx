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

            <img
              src="/logo.png"
              alt="Sky High Financial"
              className="h-20 w-auto mb-6"
            />


            <h3 className="text-2xl font-bold">
              Sky High Financial
            </h3>


            <p className="mt-5 text-gray-300 leading-8">
              {t("footer.company.description")}
            </p>



            {/* Languages */}

            <div className="mt-6 flex flex-wrap gap-2 ltr">


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