import { Link } from "react-router-dom";

export default function PrimaryButton({
  to,
  children,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center
      px-8 py-4
      rounded-xl
      bg-[#0B2D4D]
      hover:bg-[#143e63]
      text-white
      font-semibold
      transition-all
      duration-300
      shadow-md
      hover:shadow-xl
      ${className}`}
    >
      {children}
    </Link>
  );
}