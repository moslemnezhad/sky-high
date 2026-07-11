export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#0B2D4D]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}