export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={center ? "text-center" : ""}>

      <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-bold mt-5 text-[#0B2D4D]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
}