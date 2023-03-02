import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header>
      <Link href='/'>
        <Image
          src='/vercel.svg'
          alt='E-Commerce Site Logo'
          className={styles.vercelLogo}
          width={100}
          height={24}
        />
      </Link>
      <Link href='/'>
        <h1>Vercel</h1>
      </Link>
      <a href='#' style={{ textDecoration: 'none' }}>
        <svg
          width='31'
          height='27'
          viewBox='0 0 31 27'
          fill='none'
          xmlns='<http://www.w3.org/2000/svg>'
        >
          <path d='' fill='#9094FF' />
        </svg>
        <span></span>
      </a>
    </header>
  );
}
