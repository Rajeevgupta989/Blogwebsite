import ArticleCard from "../ui/ArticleCard";

export default function FeaturedArticles() {
  return (
    <section className="container container-home home-section">
      <h2 className="section-title">Featured Knowledge</h2>

      <div className="article-grid">
        <ArticleCard
          title="Pros & Cons of AI in Healthcare"
          category="Technology"
        />
        <ArticleCard
          title="7-Day Rajasthan Itinerary"
          category="Travel"
        />
        <ArticleCard
          title="How SIPs Work for Beginners"
          category="Finance"
        />
      </div>
    </section>
  );
}
