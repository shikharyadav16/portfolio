import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import Logo from './logo/logo';
import ToggleTheme from './toggleTheme/toggleTheme';

export default function Header() {
  const router = useRouter();

  return (
    <header role="banner" className={styles.header}>
      <Logo />
      <nav className={styles.menu}>
        <Link href="/sobre" className={`${styles['menu-item']} ${router.pathname == "/sobre" ? styles.active : ""}`}>About</Link>
        <Link href="/portfolio" className={`${styles['menu-item']} ${router.pathname == "/portfolio" ? styles.active : ""}`}>Portfolio</Link>
        <Link href="/servicos" className={`${styles['menu-item']} ${router.pathname == "/servicos" ? styles.active : ""}`}>Services</Link>
      </nav>
      <ToggleTheme />
    </header>
  )
}
