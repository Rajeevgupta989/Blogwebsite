import CategoryPage from "../../components/category/CategoryPage";

export default function EducationPage() {
  return (
    <CategoryPage
      title="Education"
      description="Guides on learning, skills, careers, exams, and modern education tools for students and professionals."
      articles={[
        {
          title: "Future Skills Students Should Learn",
          slug: "future-skills-for-students",
        },
        {
          title: "Best Online Learning Platforms",
          slug: "best-online-learning-platforms",
        },
        {
          title: "How to Choose the Right Career Path",
          slug: "choose-right-career-path",
        },
      ]}
    />
  );
}
