import styles from './ContentPage.module.css';

export default function ContentPage({ title, children }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
