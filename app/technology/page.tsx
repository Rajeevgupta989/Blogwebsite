import CategoryPage from "@/components/category/CategoryPage";

export default function TechnologyPage() {
  return (
    <CategoryPage
      title="Technology"
      description="Clear explanations, tools, comparisons, and insights into technology, AI, and digital trends shaping the modern world."
      articles={[
        {
          title: "Pros & Cons of AI in Healthcare",
          slug: "ai-in-healthcare",
        },
        {
          title: "Best AI Tools for Students",
          slug: "best-ai-tools-for-students",
        },
        {
          title: "ChatGPT vs Gemini: Which Is Better?",
          slug: "chatgpt-vs-gemini",
        },
      ]}
    />
  );
}
