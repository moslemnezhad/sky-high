import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="bg-white py-14">

      <div className="max-w-4xl mx-auto px-6">

        <div className="relative">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            size={22}
          />

          <input
            type="text"
            placeholder="Search articles, guides, tax topics..."
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-5 pl-14 pr-6 text-lg outline-none transition focus:border-[#0B2D4D] focus:bg-white"
          />

        </div>

      </div>

    </section>
  );
}