export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B2D4D]">
      {children}
    </div>
  );
}