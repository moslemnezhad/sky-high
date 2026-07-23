import { useParams, Link } from "react-router-dom";
import { CheckCircle, ChevronRight } from "lucide-react";
import { getServiceBySlug } from "../../content/services";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-[#0B2D4D]">
          Service Not Found
        </h2>
      </div>
    );
  }

    return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative h-[70vh] min-h-[520px] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.hero.image})`,
          }}
        />

        <div className="absolute inset-0 bg-[#071F35]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071F35]/90 via-[#071F35]/55 to-transparent" />


        <div className="relative max-w-7xl mx-auto px-6 w-full">


          <div className="flex items-center gap-2 text-sm text-gray-300 mb-8">

            <Link to="/" className="hover:text-[#C8A24A]">
              Home
            </Link>

            <ChevronRight className="w-4 h-4" />

            <Link to="/services" className="hover:text-[#C8A24A]">
              Services
            </Link>

            <ChevronRight className="w-4 h-4" />

            <span className="text-white">
              {service.hero.title}
            </span>

          </div>


          <div className="max-w-3xl">

            <div className="w-20 h-1 bg-[#C8A24A] rounded-full mb-6" />


            <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold mb-4">
              Professional Service
            </p>


            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {service.hero.title}
            </h1>


            <p className="mt-8 text-xl leading-8 text-gray-200">
              {service.hero.subtitle}
            </p>


            <Link
              to="/contact"
              className="inline-flex mt-10 bg-[#C8A24A] hover:bg-[#d6b15b] text-[#071F35] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              Book Consultation
            </Link>

          </div>

        </div>

      </section>

           {/* ================= OVERVIEW ================= */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            {service.overview.title}
          </h2>

          <div className="w-20 h-1 bg-[#C8A24A] mt-5 mb-10 rounded-full" />

          <p className="text-gray-600 leading-9 text-lg">
            {service.overview.description}
          </p>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}

      <section className="bg-[#F8FAFC] py-24">

        <div className="max-w-6xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            {service.benefits.title}
          </h2>


          <div className="w-20 h-1 bg-[#C8A24A] mx-auto mt-5 mb-14 rounded-full" />


          <div className="grid md:grid-cols-2 gap-8">


            {service.benefits.items.map((benefit, index) => (

              <div
                key={index}
                className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >

                <CheckCircle className="text-[#C8A24A] mt-1 shrink-0" />

                <p className="text-gray-700 leading-7">
                  {benefit}
                </p>

              </div>

            ))}


          </div>


        </div>

      </section>

            {/* ================= INCLUDED ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            {service.includes.title}
          </h2>


          <div className="w-20 h-1 bg-[#C8A24A] mx-auto mt-5 mb-14 rounded-full" />


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {service.includes.items.map((item, index) => (

              <div
                key={index}
                className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >

                <CheckCircle className="text-[#C8A24A] mb-4" />

                <p className="text-gray-700 leading-7">
                  {item}
                </p>

              </div>

            ))}


          </div>


        </div>

      </section>


      {/* ================= WHO WE HELP ================= */}

      <section className="bg-[#F8FAFC] py-24">

        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            {service.whoWeHelp.title}
          </h2>


          <div className="w-20 h-1 bg-[#C8A24A] mx-auto mt-5 mb-14 rounded-full" />


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


            {service.whoWeHelp.items.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl border p-6 text-center shadow-sm hover:shadow-lg transition"
              >

                {item}

              </div>

            ))}


          </div>


        </div>

      </section>

            {/* ================= PROCESS ================= */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            {service.process.title}
          </h2>


          <div className="w-20 h-1 bg-[#C8A24A] mt-5 mb-12 rounded-full" />


          <div className="space-y-8">


            {service.process.steps.map((step, index) => (

              <div
                key={index}
                className="flex gap-6"
              >

                <div className="w-10 h-10 rounded-full bg-[#C8A24A] text-[#071F35] flex items-center justify-center font-bold shrink-0">

                  {index + 1}

                </div>


                <p className="text-gray-700 leading-8">
                  {step}
                </p>


              </div>

            ))}


          </div>


        </div>

      </section>



      {/* ================= FAQ ================= */}


      <section className="bg-[#F8FAFC] py-24">


        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">

            {service.faqs.title}

          </h2>


          <div className="w-20 h-1 bg-[#C8A24A] mx-auto mt-5 mb-14 rounded-full" />



          <div className="space-y-6">


            {service.faqs.items.map((faq, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >


                <h3 className="text-xl font-bold text-[#0B2D4D]">

                  {faq.question}

                </h3>


                <p className="mt-4 text-gray-600 leading-7">

                  {faq.answer}

                </p>


              </div>

            ))}


          </div>


        </div>


      </section>




      {/* ================= CTA ================= */}


      <section className="py-24">


        <div className="max-w-5xl mx-auto px-6 text-center">


          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2D4D]">

            {service.cta.title}

          </h2>


          <p className="mt-8 text-xl text-gray-600 leading-8">

            {service.cta.description}

          </p>



          <Link

            to="/contact"

            className="inline-flex mt-12 bg-[#0B2D4D] hover:bg-[#143e63] text-white px-10 py-4 rounded-xl font-semibold transition"

          >

            {service.cta.button}

          </Link>


        </div>


      </section>


    </div>
  );
}