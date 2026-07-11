import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-[#0B2D4D] py-20 text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <Mail className="mx-auto text-[#C8A24A]" size={40} />

        <h2 className="mt-6 text-4xl font-bold">
          Stay Updated with Tax Insights
        </h2>

        <p className="mt-4 text-blue-100">
          Receive CRA updates, tax tips, and financial planning insights
          directly in your inbox.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-5 py-3 rounded-xl text-black outline-none"
          />

          <button className="bg-[#C8A24A] text-[#0B2D4D] font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}