import Image from 'next/image';
import styles from './page.module.css';
import headImg from '../../public/head.jpg';
import HeadBox from './Components/Headbox/Headbox';
import Navbar from './Components/Navbar/Navbar';

export default function Home() {
  return (
    <main className={styles.viewPort}>
      <Navbar/>
      <HeadBox/>
    </main>
  )
}
