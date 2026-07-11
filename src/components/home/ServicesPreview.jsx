import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../content/services";

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">

      <Container>

        <SectionTitle
          title="Our Professional Services"
          subtitle="Comprehensive accounting and tax solutions designed for individuals, startups, and established businesses in Canada."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group bg-white border rounded-2xl p-8 hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0B2D4D] group-hover:text-[#C8A24A] transition">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.subtitle}
              </p>

              {/* Divider */}
              <div className="mt-6 h-px bg-gray-100"></div>

              {/* CTA */}
              <p className="mt-6 text-sm font-semibold text-[#0B2D4D] group-hover:text-[#C8A24A] transition flex items-center gap-2">
                View Details
                <span className="group-hover:translate-x-1 transition">→</span>
              </p>

            </Link>
          ))}

        </div>

      </Container>

    </section>
  );
}