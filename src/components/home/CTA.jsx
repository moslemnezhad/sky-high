import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 bg-[#0B2D4D] text-white">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            Ready to Simplify Your Accounting?
          </h2>

          <p className="mt-6 text-blue-100">
            Get professional tax and accounting support tailored for Canadian individuals and businesses.
            Book a consultation today and get expert guidance.
          </p>

          <div className="mt-10 flex justify-center">
            <Link to="/contact">
              <Button variant="primary" className="flex items-center gap-2">
                Book Free Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

        </div>

      </Container>
    </section>
  );
}