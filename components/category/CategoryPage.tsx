type Article = {
  title: string;
  slug: string;
};

type Props = {
  title: string;
  description: string;
  articles: Article[];
};

export default function CategoryPage({
  title,
  description,
  articles,
}: Props) {
  return (
    <main className="container">
      {/* Category Intro */}
      <header className="category-header">
  <h1>{title}</h1>
  <p className="category-description">{description}</p>
</header>


      {/* Articles */}
      <section>
  <h2 className="section-title">Latest Articles</h2>

  <div className="article-grid">
    {articles.map((article) => (
      <article key={article.slug} className="article-card">
        <h3>{article.title}</h3>
        <p className="article-meta">Read article</p>
      </article>
    ))}
  </div>
</section>

    </main>
  );
}
