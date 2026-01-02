import Link from "next/link";

export default function EditorsPicks() {
  return (
    <section className="container container-home home-section">
      <h2 className="section-title">Editor’s Picks</h2>

      <div className="article-grid">
        <Link href="/business/ai-tools-for-small-businesses">
          <div className="card">
            <h3>Best AI Tools for Small Businesses</h3>
            <p className="article-meta">Business</p>
          </div>
        </Link>

        <Link href="/travel/complete-travel-packing-checklist">
          <div className="card">
            <h3>Complete Travel Packing Checklist</h3>
            <p className="article-meta">Travel</p>
          </div>
        </Link>

        <Link href="/personal-finance/beginners-guide-to-investing">
          <div className="card">
            <h3>Beginner’s Guide to Investing</h3>
            <p className="article-meta">Personal Finance</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
