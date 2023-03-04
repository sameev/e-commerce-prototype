import styles from '../styles/Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>
        Any Questions? <span className={styles.colored}>Contact us.</span>
      </h2>
      <p className={styles.contact__paragraph}>
        I look forward to hearing from you regarding any questions or feedback.
      </p>
      <div className={styles.contact__socials}>
        <a  href='https://www.linkedin.com/in/sameev/'>
          <button className={styles.linkedin}>LinkedIn</button>
        </a>
        <a href='https://github.com/sameev'>
          <button className={styles.github}>GitHub</button>
        </a>
      </div>
    </div>
  );
}
