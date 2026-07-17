import { useTranslation } from "react-i18next";

import PageHero from "../components/common/PageHero";
import CategoryGrid from "../components/resources/CategoryGrid";
import DownloadCenter from "../components/resources/DownloadCenter";
import TaxDeadlines from "../components/resources/TaxDeadlines";
import ResourcesCTA from "../components/resources/ResourcesCTA";

export default function Resources() {

  const { t } = useTranslation();

    return (
    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow={t("resources.hero.eyebrow")}
        title={t("resources.hero.title")}
        description={t("resources.hero.description")}
      />

      <CategoryGrid />

      <DownloadCenter />

      <TaxDeadlines />

      <ResourcesCTA />

    </>
  );
}