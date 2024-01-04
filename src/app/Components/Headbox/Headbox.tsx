import styles from './headbox.module.css';
import headImage from '../../../../public/head.jpg';
import headImage2 from '../../../../public/head2.jpg';
import Image from 'next/image';
import Link from 'next/link';

const HeadBox = () => {
  return (
    <section className={styles.headBox}>
      <div className={styles.semi}></div>
      <section className={styles.slide}>

        <Image
          fill
          src={headImage}
          alt='headImage'
        />

        <div className={styles.infoBox}>
          <article>
            <strong>The Best Phone Deals</strong>
            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis esse mollitia, obcaecati.</small>
          </article>

          <Link href={'/'}>Explore</Link>
          <p>
            <legend>
              <sub></sub>
            </legend>
            <legend>
              <sub></sub>
            </legend>
            <legend>
              <sub></sub>
            </legend>
            <legend>
              <sub></sub>
            </legend>
          </p>
        </div>

      </section>
    </section>
  );
}

export default HeadBox;