'use client'
import styles from './page.module.css'
import Image from 'next/image'
import myfoto from '../../public/me.jpg'
import htmlLogo from '../../public/htmlLogo.png'
import cssLogo from '../../public/cssLogo.png'
import javascriptLogo from '../../public/javascriptLogo.png'
import figmaLogo from '../../public/figmaLogo.png'
import trello from '../../public/trelloLogo.png'

const About = () => {
  return (
    <div>
      <h1 className={styles.headingTitle}>Know me better</h1>
      <div className={styles.container}>
        <div className={styles.aboutLeft}>
          <Image className={styles.myimage} src={myfoto} alt="my photo" />
          <br></br>
          <p>
            Part of my skills as Webbdeveloper is to get in deep with different
            programs to achieve my work.
          </p>
          <Image className={styles.image2} src={htmlLogo} alt="html Logo" />
          <Image className={styles.image2} src={cssLogo} alt="css Logo" />
          <Image
            className={styles.image2}
            src={javascriptLogo}
            alt="javascript Logo"
          />
          <Image className={styles.image3} src={figmaLogo} alt="figmaLogo" />
          <Image className={styles.image2} src={trello} alt="trello Logo" />
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.article}>
            <h2 className={styles.articleTitle}>Who Am I?</h2>
            <p>
              Hi!!!<br></br>Here you have a positive and creative person who try
              to get a place in this career. My head is always full of ideas.
              Resolving problems are part of my life. People around me come
              asking for advice because they know I always have different type
              of views.<br></br>I am a mother of three children, soon teens so
              as you can imagine eficency in time is a must to achive the dayly
              rutine.<br></br>
              Multitask dealing with stress is something that I developed with
              the years and I feel comfortable with.
            </p>
          </div>

          <div className={styles.article}>
            <h2 className={styles.articleTitle}>Studies and Work</h2>
            <p>
              I am currently studing frontend and app developer in Changemaker
              Educations in Stockholm, I will be graduated in June 2024.
              <br></br>I do work as a nurse-assistant in Karolinska Hospital for
              the last 6 years. Before than that I dedicated my time between
              children and to run my own company AleSoft with my partner. Where
              we offered IT consulting services to other companies and developed
              small solutions, helping to design and test user interface.
            </p>
          </div>

          <div className={styles.article}>
            <h2 className={styles.articleTitle}>What more?</h2>
            <p>
              I can speak fluent English and Swedish but my mother tonge is
              Spanish, so you can count with 3 languages in your asset.
              Photography is my passion and I frame my everyday looking for the
              perfect photo. I love water and I feel like a marmaid when I am in
              it. Any kind of sport in water I am willing to try it. That is how
              kayak have come to my life, giving me the perfect photos and the
              pleasure of my free little time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
