import styles from './StoreCard.module.css';
import { MdStore } from 'react-icons/md';

export default function StoreCard({ store }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <MdStore />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{store.name}</h3>
        <p className={styles.category}>{store.category}</p>
      </div>
    </div>
  );
}
