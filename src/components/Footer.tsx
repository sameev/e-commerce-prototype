import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Next.js app with a&nbsp;<a href='https://snipcart.com'>Snipcart</a>&nbsp;- powered store
      </p>
      <div>
        <a className={styles.footer__left} href='https://github.com/sameev/e-commerce-prototype'>Source Code</a>
      </div>
    </footer>
  );
}
