import Link from "next/link";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        
        {/* Brand */}
        <div>
          <h3>KnowFolks</h3>
          <p>
            Clear, practical knowledge across Technology, Travel, Health,
            Finance, Business and more.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4>Categories</h4>
          <ul style={styles.list}>
            <li><Link href="/technology">Technology</Link></li>
            <li><Link href="/travel">Travel</Link></li>
            <li><Link href="/health">Health</Link></li>
            <li><Link href="/personal-finance">Personal Finance</Link></li>
            <li><Link href="/business">Business</Link></li>
            <li><Link href="/education">Education</Link></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4>Important</h4>
          <ul style={styles.list}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} KnowFolks. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "80px",
    padding: "40px",
    backgroundColor: "#f9f9f9",
    borderTop: "1px solid #e5e5e5",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  bottom: {
    marginTop: "40px",
    fontSize: "14px",
    color: "#666",
  },
};
