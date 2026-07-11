import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#071F35] text-white">

      {/* Gold Top Border */}

      <div className="h-1 bg-[#C8A24A]" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

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

              Professional accounting, bookkeeping,
              payroll, tax planning and advisory services
              for individuals and businesses across Canada.

            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="bg-[#0B2D4D] px-3 py-1 rounded-full text-sm">
                English
              </span>

              <span className="bg-[#0B2D4D] px-3 py-1 rounded-full text-sm">
                فارسی
              </span>

              <span className="bg-[#0B2D4D] px-3 py-1 rounded-full text-sm">
                العربية
              </span>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <div className="space-y-4">

              {[
                "Accounting",
                "Bookkeeping",
                "Payroll",
                "Corporate Tax",
                "Personal Tax",
                "Cross-Border Tax",
                "CRA Compliance",
                "Financial Advisory",
              ].map((item) => (

                <Link
                  key={item}
                  to="/services"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C8A24A] transition"
                >
                  <ChevronRight className="w-4 h-4" />
                  {item}
                </Link>

              ))}

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Company
            </h3>

            <div className="space-y-4">

              <Link
                to="/"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                Services
              </Link>

              <Link
                to="/resources"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                Resources
              </Link>

              <Link
                to="/contact"
                className="block text-gray-300 hover:text-[#C8A24A]"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone className="text-[#C8A24A]" />

                <div>

                  <div className="font-medium">
                    Phone
                  </div>

                  <div className="text-gray-300">
                    +1 (778) 903-1528
                  </div>

                </div>

              </div>

              <div className="flex gap-3">

                <Mail className="text-[#C8A24A]" />

                <div>

                  <div className="font-medium">
                    Email
                  </div>

                  <div className="text-gray-300 break-all">
                    skyhighfm.inc@gmail.com
                  </div>

                </div>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-[#C8A24A]" />

                <div>

                  <div className="font-medium">
                    Service Area
                  </div>

                  <div className="text-gray-300">
                    Canada & USA
                  </div>

                </div>

              </div>

              <div className="flex gap-3">

                <Clock3 className="text-[#C8A24A]" />

                <div>

                  <div className="font-medium">
                    Business Hours
                  </div>

                  <div className="text-gray-300">
                    Mon – Fri
                    <br />
                    9:00 AM – 6:00 PM
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">

            © {new Date().getFullYear()} Sky High Financial Management Inc.
            All Rights Reserved.

          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#C8A24A]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#C8A24A]"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}