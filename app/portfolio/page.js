"use client";
//import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import introToReact from "../../public/introToReact.jpg";
import DatesAndMore from "../../public/DatesAndMore.jpg";
import ToSummer from "../../public/ToSummer.jpg";
import HarryPotter from "../../public/HarryPotterApi.jpg";

export default () => {
  return (
    <div>
      <h1 className={styles.headingTitle}>Portfolio</h1>
      <div className={styles.wrap1}>
        <article className={styles.container}>
        <h2> Assigment 1: Introduce to myself and my future project</h2>
        <Image
          className={styles.image1}
          src={introToReact}
          alt="Bilder from my first assigment showing who I am."
        />
      </article>
      <article className={styles.container} >
        <h2> Assigment 2: Introduce to Dates, Node and more</h2>
        <Image
          className={styles.image1}
          src={DatesAndMore}
          alt="Bilder from my second assigment about Dates, Node and some other things."
        />
      </article>
    </div>
    <div className={styles.wrap2}>
      <article className={styles.container}>
        <h2> Assigment 3: Coundown to Summer</h2>
        <Image
          className={styles.image1}
          src={ToSummer}
          alt="Bilder from my third assigment, the coundown to summer."
        />
      </article>
      <article className={styles.container}>
        <h2> Assigment 4: Api</h2>
        <Image
          className={styles.image1}
          src={HarryPotter}
          alt="Bilder from my fourth assigment en Api about Harry Potter."
        />
      </article> 
      </div>
    </div>
  );
};
