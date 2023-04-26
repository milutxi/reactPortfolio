import { Cantarell, Inter, Montserrat } from "next/font/google";
import styles from "./page.module.css";

//import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const cantarell = Cantarell({ 
  weight: '700',
  subsets: ["latin"] });



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrap}>
        <h1 className={cantarell.className}>Sheila Aliaga</h1>
        <h2 className={styles.developer}>WEB DEVELOPER</h2>
      </div>
    </main>
  );
}
