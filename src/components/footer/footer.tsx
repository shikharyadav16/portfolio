'use client'

import { Icon } from "@iconify/react";
import styles from './footer.module.scss';
import LinkExternal from '@/components/buttons/external/external';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer role="contentinfo" className={styles.footer}>
      <nav className={styles.links}>
        <LinkExternal title="Resume" href="/files/resume.pdf" />
        <LinkExternal title="LinkedIn" href="https://linkedin.com/in/shikhar-yadav-ln/" />
        <LinkExternal title="GitHub" href="https://github.com/shikharyadav16" />
      </nav>
      <p className={styles.copy}>2026 &copy; Shikhar Yadav</p>
    </footer>
  )
}
