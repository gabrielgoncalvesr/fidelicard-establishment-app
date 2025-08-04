import Link from 'next/link';
import styles from './RewardCard.module.css';
import { MdRedeem } from 'react-icons/md';

export default function RewardCard({ reward }) {
  return (
    <Link href={`/resgates/${reward.id}`} className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <MdRedeem />
      </div>
      <div className={styles.info}>
        <p className={styles.establishment}>{reward.establishmentName}</p>
        <h3 className={styles.title}>{reward.title}</h3>
      </div>
      <div className={styles.button}>
        Resgatar
      </div>
    </Link>
  );
}
