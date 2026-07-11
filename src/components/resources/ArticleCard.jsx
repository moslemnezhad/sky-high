import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 rounded-full bg-[#C8A24A] px-4 py-2 text-xs font-semibold text-[#0B2D4D]">

          {article.categoryName}

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-[#0B2D4D] group-hover:text-[#C8A24A] transition">

          {article.title}

        </h3>

        <p className="mt-4 text-gray-600 leading-7">

          {article.excerpt}

        </p>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">

          <div className="flex items-center gap-2">

            <Clock size={16} />

            {article.readTime}

          </div>

          <div className="flex items-center gap-2">

            <Calendar size={16} />

            {article.lastUpdated}

          </div>

        </div>

        <Link
          to={`/resources/${article.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B2D4D] transition hover:text-[#C8A24A]"
        >
          Read Article

          <ArrowRight size={18} />

        </Link>

      </div>

    </article>
  );
}