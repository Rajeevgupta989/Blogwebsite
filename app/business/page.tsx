import CategoryPage from "../../components/category/CategoryPage";

export default function BusinessPage() {
  return (
    <CategoryPage
      title="Business"
      description="Insights, tools, and practical knowledge for startups, marketing, productivity, and modern business growth."
      articles={[
        {
          title: "AI Tools for Small Businesses",
          slug: "ai-tools-for-small-businesses",
        },
        {
          title: "How to Validate a Business Idea",
          slug: "validate-business-idea",
        },
        {
          title: "Productivity Habits of Successful Founders",
          slug: "productivity-habits-founders",
        },
      ]}
    />
  );
}
