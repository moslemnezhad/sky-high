import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { direction, textAlign } from "../../utils/language";

export default function PageHero({
  image,
  eyebrow,
  title,
  description,
  size = "medium",
}) {
  const location = useLocation();
  const { t } = useTranslation();

  const paths = location.pathname.split("/").filter(Boolean);

  const isResourcesPage = paths[0] === "resources";

  const breadcrumbs = [
    {
      label: t("navbar.home"),
      to: "/",
    },
  ];

  let current = "";

paths.forEach((path, index) => {
  current += "/" + path;

  let label;

  // ---------- Static pages ----------
  if (path === "about") {
    label = t("navbar.about");
  }

  else if (path === "services") {
    label = t("navbar.services");
  }

  else if (path === "resources") {
    label = t("navbar.resources");
  }

  // ---------- Resource article ----------
  else if (
    isResourcesPage &&
    index === paths.length - 1
  ) {
    label = title;
  }

  // ---------- Service detail page ----------
  else if (
    paths[0] === "services" &&
    index === paths.length - 1
  ) {
    label = title;
  }

  // ---------- Everything else ----------
  else {
    label = path
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  breadcrumbs.push({
    label,
    to: index === paths.length - 1 ? null : current,
  });
});

  const heroPadding =
    size === "large"
      ? "py-52 lg:py-72"
      : "py-24 lg:py-32";

  return (
    <section
      dir="ltr"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071F35]/75 via-[#071F35]/45 to-[#071F35]/10"></div>


      {/* Soft Overlay */}

      <div className="absolute inset-0 bg-black/10"></div>


      {/* Content */}

      <div
        className={`relative max-w-7xl mx-auto px-6 lg:px-4 xl:px-0 w-full ${heroPadding}`}
      >

        {/* ================= BREADCRUMB ================= */}

        <div
          className={`max-w-2xl mb-8 flex ${
            direction() === "rtl"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div
            className="flex flex-wrap items-center gap-2 text-xs text-blue-100"
            dir={direction()}
          >

            {breadcrumbs.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-2"
                dir={direction()}
              >

                {index !== 0 && (
                  <ChevronRight
                    size={13}
                    className="shrink-0"
                  />
                )}

                {item.to ? (

                  <Link
                    to={item.to}
                    className="hover:text-white transition duration-300"
                  >
                    {item.label}
                  </Link>

                ) : (

                  <span className="text-white font-medium">
                    {item.label}
                  </span>

                )}

              </div>

            ))}

          </div>

        </div>


        {/* ================= HERO CONTENT ================= */}

        <div className="max-w-2xl">

          {/* Eyebrow */}

          <p
            dir={direction()}
            className={`hero-eyebrow text-[#C8A24A] font-semibold ${textAlign()}`}
          >
            {eyebrow}
          </p>


          {/* Title */}

          <h1
            dir={direction()}
            className={`mt-4 text-5xl md:text-6xl font-bold text-white leading-tight ${textAlign()}`}
            style={{
              textShadow: "0 3px 10px rgba(0,0,0,.30)",
            }}
          >
            {title}
          </h1>


          {/* Description */}

          <p
            dir={direction()}
            className={`mt-6 text-xl leading-8 text-gray-200 ${textAlign()}`}
            style={{
              textShadow: "0 2px 6px rgba(0,0,0,.25)",
            }}
          >
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}