import { Clock, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedArticle() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">

          <p className="text-sm tracking-[0.3em] text-[#C8A24A] font-semibold uppercase">
            Featured Insight
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2D4D] mt-4">
            Latest Financial Guidance
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Stay updated with expert insights on Canadian tax planning,
            corporate compliance, and financial strategy.
          </p>

        </div>

        {/* Featured Card */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl border bg-gradient-to-br from-[#0B2D4D] to-[#123D66] text-white">

          {/* Image overlay placeholder */}
          <div className="absolute inset-0 opacity-20 bg-[url('/resources/featured.jpg')] bg-cover bg-center" />

          <div className="relative p-12 md:p-16">

            {/* Badge */}
            <div className="inline-block bg-[#C8A24A] text-[#0B2D4D] px-4 py-2 rounded-full text-sm font-semibold">
              Featured Article
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold mt-6 leading-tight">
              Corporate Tax Filing Deadlines in Canada
            </h3>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 mt-6 text-blue-100 text-sm">

              <div className="flex items-center gap-2">
                <Clock size={16} />
                6 min read
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={16} />
                Updated July 2026
              </div>

            </div>

            {/* Description */}
            <p className="mt-6 text-blue-100 max-w-2xl leading-7">
              Understand CRA corporate tax filing deadlines, installment
              requirements, and penalties for Canadian corporations. This guide
              helps business owners stay compliant and avoid unnecessary fines.
            </p>

            {/* CTA */}
            <div className="mt-10">

              <Link
                to="/resources/corporate-tax-deadlines-canada"
                className="inline-flex items-center gap-2 bg-[#C8A24A] text-[#0B2D4D] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Read Full Article
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}