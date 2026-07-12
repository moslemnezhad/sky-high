import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { Link } from "react-router-dom";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#0B2D4D] text-white">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            {t("home.cta.title")}
          </h2>

          <p className="mt-6 text-blue-100">
            {t("home.cta.description")}
          </p>

          <div className="mt-10 flex justify-center">
            <Link to="/contact">
              <Button variant="primary" className="flex items-center gap-2">
                {t("home.cta.button")}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

        </div>

      </Container>
    </section>
  );
}