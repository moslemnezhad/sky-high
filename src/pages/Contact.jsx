import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  Globe,
  Clock,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_d724gei",
        "template_96tnm0g",
        e.target,
        "epSUZrPu0SEn2pnir"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();
        },
        () => {
          setLoading(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative h-[75vh] min-h-[450px] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
          }}
        />

{/* Soft Overlay */}
<div className="absolute inset-0 bg-[#071F35]/20" />

{/* Left Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-[#071F35]/65 via-[#071F35]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
              WE'RE HERE TO HELP
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-tight">
              Let's Start a Conversation
            </h1>

            <p className="mt-8 text-xl leading-8 text-gray-200">
              Have questions or need professional accounting advice? 
              Contact Sky High Financial Management to discuss your personal or business needs and schedule a consultation.
              
            </p>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}

            <div>

              <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold">
                Get In Touch
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0B2D4D]">
                We'd Love To Hear From You
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Contact us today to schedule a consultation or ask
                any questions about our accounting and tax services.
              </p>

              <div className="space-y-6 mt-10">

                <div className="flex gap-4 items-start">
                  <Phone className="text-[#C8A24A]" />
                  <div>
                    <h3 className="font-semibold text-[#0B2D4D]">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      (778) 903-1528
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="text-[#C8A24A]" />
                  <div>
                    <h3 className="font-semibold text-[#0B2D4D]">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      skyhighfm.inc@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Globe className="text-[#C8A24A]" />
                  <div>
                    <h3 className="font-semibold text-[#0B2D4D]">
                      Website
                    </h3>
                    <p className="text-gray-600">
                      www.skyhighfinancial.ca
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="text-[#C8A24A]" />
                  <div>
                    <h3 className="font-semibold text-[#0B2D4D]">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday – Friday
                      <br />
                      9:00 AM – 5:00 PM PST
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="text-[#C8A24A]" />
                  <div>
                    <h3 className="font-semibold text-[#0B2D4D]">
                      Serving
                    </h3>
                    <p className="text-gray-600">
                      Businesses across Canada
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-slate-50 rounded-3xl p-10 shadow-sm">

              <h3 className="text-2xl font-bold text-[#0B2D4D] mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={sendEmail} className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                />

                <select
                  name="service"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                >
                  <option value="">Select a Service</option>
                  <option>Accounting</option>
                  <option>Bookkeeping</option>
                  <option>Payroll</option>
                  <option>Corporate Tax</option>
                  <option>Personal Tax</option>
                  <option>Financial Advisory</option>
                  <option>Business Consulting</option>
                  <option>CRA Compliance</option>
                  <option>Cross-Border Tax</option>
                  <option>Tax Planning</option>
                  <option>General Inquiry</option>
                </select>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0B2D4D] py-4 text-white font-semibold transition-all duration-300 hover:bg-[#143e63]"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-green-700 text-center">
                    ✓ Thank you! Your message has been sent successfully.
                    We'll get back to you within one business day.
                  </div>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}