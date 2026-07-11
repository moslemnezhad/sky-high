import { Link } from "react-router-dom";
import { categories } from "../../content/categories";

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
          Browse by Category
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Find articles by topic.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((cat) => (

            <Link
              key={cat.id}
              to={`/resources/${cat.id}`}
              className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="h-2 w-16 rounded-full"
                style={{ background: cat.color }}
              />

              <h3 className="mt-8 text-xl font-bold text-[#0B2D4D] group-hover:text-[#C8A24A] transition">
                {cat.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {cat.description}
              </p>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}