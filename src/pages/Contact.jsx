import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
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
              {t("contact.hero.eyebrow")}
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-tight">
              {t("contact.hero.title")}
            </h1>

            <p className="mt-8 text-xl leading-8 text-gray-200">
              {t("contact.hero.description")} 
                            
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
                {t("contact.intro.eyebrow")}
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0B2D4D]">
                {t("contact.intro.title")}
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                {t("contact.intro.description")}                
              </p>

            <div className="grid gap-6 mt-10 sm:grid-cols-2">

              {/* Phone */}

              <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">

                <Phone className="w-8 h-8 text-[#C8A24A]" />

                <h3 className="mt-5 font-semibold text-[#0B2D4D]">
                  {t("contact.cards.phone")}
                </h3>

                <p className="mt-2 text-gray-600">
                  {t("contact.cards.phoneValue")}
                </p>

              </div>


              {/* WhatsApp */}

              <a
                href="https://wa.me/17789031528"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition block"
              >

                <MessageCircle className="w-8 h-8 text-[#25D366]" />

                <h3 className="mt-5 font-semibold text-[#0B2D4D]">
                  {t("contact.cards.whatsapp")}
                </h3>

                <p className="mt-2 text-gray-600">
                  {t("contact.cards.whatsappValue")}
                </p>

              </a>


              {/* Email */}

              <a
                href="mailto:skyhighfm.inc@gmail.com"
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition block"
              >

                <Mail className="w-8 h-8 text-[#C8A24A]" />

                <h3 className="mt-5 font-semibold text-[#0B2D4D]">
                  {t("contact.cards.email")}
                </h3>

                <p className="mt-2 text-gray-600 break-all">
                  {t("contact.cards.emailValue")}
                </p>

              </a>


              {/* Office Hours */}

              <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">

                <Clock className="w-8 h-8 text-[#C8A24A]" />

                <h3 className="mt-5 font-semibold text-[#0B2D4D]">
                  {t("contact.cards.hours")}
                </h3>

                <p className="mt-2 text-gray-600">
                  {t("contact.cards.hoursValue")}
                  <br />
                  {t("contact.cards.hoursValue2")}
                </p>

              </div>


              {/* Serving Canada */}

              <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition sm:col-span-2">

                <MapPin className="w-8 h-8 text-[#C8A24A]" />

                <h3 className="mt-5 font-semibold text-[#0B2D4D]">
                  {t("contact.cards.serving")}
                </h3>

                <p className="mt-2 text-gray-600">
                  {t("contact.cards.servingValue")}
                </p>

              </div>

            </div>

            </div>

            {/* RIGHT */}

            <div className="bg-slate-50 rounded-3xl p-10 shadow-sm">

              <h3 className="text-2xl font-bold text-[#0B2D4D] mb-8">
                {t("contact.form.title")}
              </h3>

              <form onSubmit={sendEmail} className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("contact.form.phone")}
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                />

                <input
                  type="text"
                  name="company"
                  placeholder={t("contact.form.company")}
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                />

                <select
                  name="service"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                >
                 <option value="">
                    {t("contact.form.service")}
                  </option>
                  <option>{t("contact.services.accounting")}</option>
                  <option>{t("contact.services.bookkeeping")}</option>
                  <option>{t("contact.services.payroll")}</option>
                  <option>{t("contact.services.corporateTax")}</option>
                  <option>{t("contact.services.personalTax")}</option>
                  <option>{t("contact.services.financialAdvisory")}</option>
                  <option>{t("contact.services.businessConsulting")}</option>
                  <option>{t("contact.services.craCompliance")}</option>
                  <option>{t("contact.services.crossBorder")}</option>
                  <option>{t("contact.services.taxPlanning")}</option>
                  <option>{t("contact.services.general")}</option>                  
                </select>

                <textarea
                  name="message"
                  rows="6"
                  placeholder={t("contact.form.message")}
                  required
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C8A24A]"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0B2D4D] py-4 text-white font-semibold transition-all duration-300 hover:bg-[#143e63]"
                >
                  {loading  
                  ? t("contact.form.sending")
                  : t("contact.form.send")}
                </button>

                {success && (
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-green-700 text-center">
                    {t("contact.success.message")}                    
                  </div>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold">

              {t("contact.faq.eyebrow")}

            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0B2D4D]">

              {t("contact.faq.title")}

            </h2>

            <p className="mt-6 text-gray-600 leading-8">

              {t("contact.faq.description")}

            </p>

          </div>

          <div className="mt-14 space-y-6">

            {[1,2,3,4].map((item)=>(

              <div
                key={item}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              >

                <h3 className="text-xl font-semibold text-[#0B2D4D]">

                  {t(`contact.faq.items.q${item}.question`)}

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  {t(`contact.faq.items.q${item}.answer`)}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="py-24 bg-[#0B2D4D]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">

            {t("contact.cta.eyebrow")}

          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">

            {t("contact.cta.title")}

          </h2>

          <p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">

            {t("contact.cta.description")}

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="tel:+17789031528"
              className="inline-flex items-center justify-center rounded-xl bg-[#C8A24A] px-8 py-4 font-semibold text-[#071F35] transition hover:bg-[#d6b15b]"
            >
              {t("contact.cta.call")}
            </a>

            <a
              href="https://wa.me/17789031528"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              {t("contact.cta.whatsapp")}
            </a>

          </div>

        </div>

      </section>
    </>
  );
}