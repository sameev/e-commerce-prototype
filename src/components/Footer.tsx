import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
      &copy;{new Date().getFullYear()} | Created by Samee Vohra
      </p>
      <div className={styles.footer__left}>
        <a href='https://github.com/sameev/e-commerce-prototype'>GitHub Source Code</a>
      </div>
    </footer>
  );
}
