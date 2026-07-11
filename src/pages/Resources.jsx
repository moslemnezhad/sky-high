import PageHero from "../components/common/PageHero";
import CategoryGrid from "../components/resources/CategoryGrid";
import DownloadCenter from "../components/resources/DownloadCenter";
import TaxDeadlines from "../components/resources/TaxDeadlines";

export default function Resources() {
  return (
    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="LEARN & EXPLORE"
        title="Knowledge for Better Financial Decisions"
        description="Browse practical guides and trusted resources covering Canadian taxes, bookkeeping, payroll, GST/HST, and small business topics to help you better understand your financial responsibilities."
      />

      {/* Browse by Category */}
      <CategoryGrid />

      {/* Free Business Resources */}
      <DownloadCenter />

      {/* CRA Tax Deadlines */}
      <TaxDeadlines />
    </>
  );
}