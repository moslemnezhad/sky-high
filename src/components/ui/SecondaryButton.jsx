import { Link } from "react-router-dom";

export default function SecondaryButton({
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
      border-2
      border-[#0B2D4D]
      text-[#0B2D4D]
      font-semibold
      hover:bg-[#0B2D4D]
      hover:text-white
      transition-all
      duration-300
      ${className}`}
    >
      {children}
    </Link>
  );
}