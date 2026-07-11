export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      rounded-3xl
      backdrop-blur-lg
      bg-white/80
      border
      border-white
      shadow-xl
      p-8
      ${className}
      `}
    >
      {children}
    </div>
  );
}