import { ShieldCheck, TrendingUp, Users, Clock } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    icon: ShieldCheck,
    title: "CRA Compliance Focus",
    desc: "We ensure your filings are accurate, compliant, and fully aligned with Canadian tax regulations.",
  },
  {
    icon: TrendingUp,
    title: "Tax Optimization",
    desc: "Strategic planning to help reduce taxes and improve financial efficiency.",
  },
  {
    icon: Users,
    title: "Dedicated Client Support",
    desc: "Direct access to experienced professionals who understand your business.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    desc: "We prioritize deadlines so you never face penalties or late filings.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8FAFC]">

      <Container>

        <SectionTitle
          title="Why Businesses Choose Us"
          subtitle="We provide reliable, accurate, and strategic accounting solutions designed for Canadian businesses and individuals."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0B2D4D]/5 mb-5">
                  <Icon className="text-[#0B2D4D]" size={26} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B2D4D]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}