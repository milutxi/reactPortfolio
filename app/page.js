import { Inter } from "next/font/google";
import styles from "./page.module.css";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Sheila Aliaga</h1>
        <h2>WEB DEVELOPER</h2>
      </div>
    </main>
  );
}
