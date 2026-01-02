export default function ArticlePage() {
  return (
    <main className="container article-page">
      
      {/* Article Header */}
      <header className="article-header">
        <h1>Pros & Cons of AI in Healthcare</h1>

        <div className="article-meta">
          <span>Technology</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        <p className="article-intro">
          Artificial Intelligence is transforming healthcare in many ways.
          This article explores the key advantages and limitations of AI in
          the healthcare industry.
        </p>
      </header>

      {/* Table of Contents (UI only) */}
      <aside className="article-toc">
        <h3>Table of Contents</h3>
        <ul>
          <li>What is AI in Healthcare?</li>
          <li>Pros of AI in Healthcare</li>
          <li>Cons of AI in Healthcare</li>
          <li>Final Thoughts</li>
        </ul>
      </aside>

      {/* Main Content */}
      <article className="article-content">
        <h2>What is AI in Healthcare?</h2>
        <p>
          AI in healthcare refers to the use of machine learning algorithms,
          data analysis, and automation to improve medical outcomes.
        </p>

        <h2>Pros of AI in Healthcare</h2>
        <p>
          AI helps in early diagnosis, personalised treatment, and efficient
          data processing.
        </p>

        <h2>Cons of AI in Healthcare</h2>
        <p>
          Challenges include data privacy, bias, and dependency on technology.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          AI will continue to play a significant role in healthcare, but it
          must be implemented responsibly.
        </p>
      </article>

      {/* CTA Placeholder */}
      <section className="article-cta">
        <p>
          👉 Looking for useful tools or resources related to this topic?
          We’ll recommend the best ones here.
        </p>
      </section>

      {/* Related Articles */}
      <section className="related-articles">
        <h3>Related Articles</h3>

        <ul>
          <li>Best AI Tools for Healthcare Professionals</li>
          <li>How AI is Changing Medical Diagnostics</li>
          <li>Ethical Challenges of AI in Medicine</li>
        </ul>
      </section>

    </main>
  );
}
