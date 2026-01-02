import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>My Blog</h2>

      <nav>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/blog" style={styles.link}>Blog</Link>
        <Link href="/about" style={styles.link}>About</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    margin: 0,
  },
  link: {
    marginLeft: "16px",
    textDecoration: "none",
    color: "#000",
  },
};
