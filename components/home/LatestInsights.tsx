import ArticleCard from "../ui/ArticleCard";

export default function LatestInsights() {
  return (
    <section className="container container-home home-section">
      <h2 className="section-title">Latest Insights</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        <ArticleCard title="AI in Education Explained" category="Education" />
        <ArticleCard title="Best Budget Travel Gear" category="Travel" />
        <ArticleCard title="Mental Wellness Daily Habits" category="Health" />
      </div>
    </section>
  );
}
