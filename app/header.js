import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
  return (
    <>
      <header className={styles["headerStyle"]}>
        <div style={{ padding: "20px" }}>
          <h4>aliaga_sheila@hotmail.com</h4>
          <h4>0700616024</h4>
        </div>
        <nav className={styles["navBar"]}>
          <Link href="/" className={styles["navBarLink"]}>
            HOME
          </Link>
          <Link href="/portfolio" className={styles["navBarLink"]}>
            PORTFOLIO
          </Link>
          <Link href="/about" className={styles["navBarLink"]}>
            ABOUT
          </Link>
          <Link href="/contact" className={styles["navBarLink"]}>
            CONTACT
          </Link>
        </nav>
      </header>
    </>
  );
}
