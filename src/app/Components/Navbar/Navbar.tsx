import { Icon } from '@/app/External/design';
import styles from './navbar.module.css';
import { FaAmazon } from 'react-icons/fa';

const Navbar = () => {
  return ( 
    <section className={styles.navbar}>
      <nav>
        <FaAmazon/>
      <legend>Maqete</legend>
      </nav>

      <form>

      </form>

      <nav>
      </nav>
    </section>
   );
}
 
export default Navbar;