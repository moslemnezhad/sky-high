import Container from "../common/Container";

const stats = [
  { value: "10+ Years", label: "Professional Experience" },
  { value: "500+", label: "Tax Returns Completed" },
  { value: "100%", label: "CRA Compliance Focus" },
  { value: "24/7", label: "Client-Oriented Support Mindset" },
];

export default function Stats() {
  return (
    <section className="bg-[#0B2D4D] text-white py-24">

      <Container>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold">
            Trusted by Individuals & Businesses
          </h2>

          <p className="mt-4 text-blue-100 text-sm">
            We focus on accuracy, compliance, and long-term financial confidence for our clients across Canada.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {stats.map((item, i) => (
            <div key={i} className="group">

              <div className="text-4xl font-bold text-[#C8A24A] group-hover:scale-105 transition">
                {item.value}
              </div>

              <div className="mt-3 text-blue-100 text-sm">
                {item.label}
              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}