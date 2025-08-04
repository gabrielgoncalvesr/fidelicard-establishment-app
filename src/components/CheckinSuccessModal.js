import Lottie from 'lottie-react';
import styles from './CheckinSuccessModal.module.css';
import successAnimation from './success.json';

export default function CheckinSuccessModal({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Lottie animationData={successAnimation} loop={false} className={styles.animation} />
        <h2 className={styles.title}>Check-in Realizado!</h2>
        <p className={styles.message}>Você ganhou um novo selo!</p>
        <button onClick={onClose} className={styles.closeButton}>
          Finalizar
        </button>
      </div>
    </div>
  );
}
