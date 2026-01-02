type Props = {
  title: string;
  category: string;
};

export default function ArticleCard({ title, category }: Props) {
  return (
    <article style={{ border: "1px solid #ddd", padding: "16px" }}>
      <span>{category}</span>
      <h3>{title}</h3>
    </article>
  );
}
