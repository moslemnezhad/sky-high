import { articles } from "../../content";
import ArticleCard from "./ArticleCard";

export default function LatestArticles() {
  return (
    <section id="articles" className="bg-[#F8FAFC] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold">

            Knowledge Centre

          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0B2D4D]">

            Latest Articles

          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">

            Practical accounting and tax guidance from experienced financial professionals.

          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {articles.map((article) => (

            <ArticleCard
              key={article.id}
              article={article}
            />

          ))}

        </div>

      </div>

    </section>
  );
}