export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-200";

  const variants = {
    primary: "bg-[#C8A24A] text-[#0B2D4D] hover:opacity-90",
    secondary: "bg-[#0B2D4D] text-white hover:bg-[#123D66]",
    outline: "border border-[#0B2D4D] text-[#0B2D4D] hover:bg-[#0B2D4D] hover:text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}