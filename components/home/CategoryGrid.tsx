import Link from "next/link";

const categories = [
  { name: "Technology", slug: "/technology" },
  { name: "Travel", slug: "/travel" },
  { name: "Health", slug: "/health" },
  { name: "Personal Finance", slug: "/personal-finance" },
  { name: "Business", slug: "/business" },
  { name: "Education", slug: "/education" },
];

export default function CategoryGrid() {
  return (
    <section className="container container-home home-section">
      <h2 className="section-title">Explore by Category</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <Link key={cat.slug} href={cat.slug}>
            <div className="card category-card">
              <h3>{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
