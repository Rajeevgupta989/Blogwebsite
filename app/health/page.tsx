import CategoryPage from "../../components/category/CategoryPage";

export default function HealthPage() {
  return (
    <CategoryPage
      title="Health"
      description="Clear, practical health knowledge covering wellness, fitness, mental health, nutrition, and health-related technologies."
      articles={[
        {
          title: "Daily Habits for Better Immunity",
          slug: "daily-habits-for-better-immunity",
        },
        {
          title: "AI in Healthcare: Pros and Cons",
          slug: "ai-in-healthcare-pros-and-cons",
        },
        {
          title: "Simple Ways to Improve Mental Wellness",
          slug: "improve-mental-wellness",
        },
      ]}
    />
  );
}
