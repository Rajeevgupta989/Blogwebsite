import CategoryPage from "../../components/category/CategoryPage";

export default function PersonalFinancePage() {
  return (
    <CategoryPage
      title="Personal Finance"
      description="Simple guides on saving, investing, credit, insurance, and financial tools to help you make smarter money decisions."
      articles={[
        {
          title: "How SIPs Work for Beginners",
          slug: "how-sips-work-for-beginners",
        },
        {
          title: "Best Budgeting Apps in India",
          slug: "best-budgeting-apps-india",
        },
        {
          title: "Common Money Mistakes to Avoid",
          slug: "common-money-mistakes",
        },
      ]}
    />
  );
}
