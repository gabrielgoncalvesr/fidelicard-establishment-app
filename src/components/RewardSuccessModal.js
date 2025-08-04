import Lottie from 'lottie-react';
import styles from './RewardSuccessModal.module.css';
import successAnimation from './success.json'; // Animação salva localmente

export default function RewardSuccessModal({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Lottie animationData={successAnimation} loop={false} className={styles.animation} />
        <h2 className={styles.title}>Recompensa Resgatada!</h2>
        <p className={styles.message}>Aproveite seu prêmio!</p>
        <button onClick={onClose} className={styles.closeButton}>
          Fechar
        </button>
      </div>
    </div>
  );
}
