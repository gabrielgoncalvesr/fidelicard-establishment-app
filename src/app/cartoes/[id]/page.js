'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import { MdStore } from 'react-icons/md';
import styles from './CardDetailPage.module.css';

// Mock data - no futuro, virá de uma API
const fakeCards = [
  { id: 1, establishmentName: 'Barbearia do Zé', description: 'A cada 10 cortes, ganhe 1 grátis.', stamps: 7, totalStamps: 10 },
  { id: 2, establishmentName: 'Oficina do Bira', description: 'Junte 5 selos e ganhe 50% de desconto na troca de óleo.', stamps: 3, totalStamps: 5 },
  { id: 3, establishmentName: 'Açaí da Praça', description: 'Complete o cartão e ganhe um açaí de 500ml.', stamps: 9, totalStamps: 10 },
];

const fakeHistory = [
  { date: '22/06/2024', establishment: 'Barbearia do Zé' },
  { date: '15/06/2024', establishment: 'Barbearia do Zé' },
  { date: '01/06/2024', establishment: 'Barbearia do Zé' },
  { date: '25/05/2024', establishment: 'Barbearia do Zé' },
];

function getCardById(id) {
  return fakeCards.find(card => card.id.toString() === id);
}

const Stamp = ({ filled }) => (
  <div className={`${styles.stamp} ${filled ? styles.filled : ''}`}></div>
);

export default function CardDetailPage({ params }) {
  const router = useRouter();
  const card = getCardById(params.id);

  if (!card) {
    return <p>Cartão não encontrado.</p>;
  }

  const progress = (card.stamps / card.totalStamps) * 100;

  const stampElements = Array.from({ length: card.totalStamps }, (_, i) => (
    <Stamp key={i} filled={i < card.stamps} />
  ));

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={() => router.back()} className={styles.backButton}>
          <FaArrowLeft />
        </button>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.logo}>
              <MdStore />
            </div>
            <div className={styles.info}>
              <h1 className={styles.title}>{card.establishmentName}</h1>
              <p className={styles.description}>{card.description}</p>
            </div>
          </div>

          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
            </div>
            <span className={styles.progressLabel}>{card.stamps} de {card.totalStamps} selos</span>
          </div>

          <div className={styles.stampsGrid}>{stampElements}</div>
        </div>

        <div className={styles.historySection}>
          <h2 className={styles.historyTitle}>Histórico de Check-ins</h2>
          <ul className={styles.historyList}>
            {fakeHistory.map((item, index) => (
              <li key={index} className={styles.historyItem}>
                <FaCalendarAlt className={styles.historyIcon} />
                <span className={styles.historyDate}>{item.date}</span>
                <span className={styles.historyEstablishment}>{item.establishment}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <button className={styles.actionButton}>Usar Recompensa</button>
      </footer>
    </div>
  );
}

