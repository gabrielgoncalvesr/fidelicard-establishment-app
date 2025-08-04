'use client';

import { useState } from 'react';
import styles from './QrCodePage.module.css';
import { MdQrCodeScanner } from 'react-icons/md';
import QrCodeScanner from '@/components/QrCodeScanner';
import CheckinSuccessModal from '@/components/CheckinSuccessModal';

export default function QRCodePage() {
  const [isScanning, setIsScanning] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validQrCode = '79c515b7-33f9-4991-9252-c55d4d32f9d2';

  const handleScanSuccess = (decodedText, decodedResult) => {
    setIsScanning(false); // Para o scanner imediatamente

    if (decodedText === validQrCode) {
      setShowSuccessModal(true); // Mostra o modal de sucesso
    } else {
      alert('QR Code inválido. Tente novamente.'); // Mostra um erro
    }
  };

  const handleScanError = (errorMessage) => {
    // Apenas loga o erro, não exibe alerta para não poluir a tela
    console.error(errorMessage);
  };

    if (isScanning) {
    return (
      <QrCodeScanner
        onScanSuccess={handleScanSuccess}
        onScanError={handleScanError}
        onClose={() => setIsScanning(false)}
      />
    );
  }

  if (showSuccessModal) {
    return <CheckinSuccessModal onClose={() => setShowSuccessModal(false)} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Check-in</h1>
      <div className={styles.content}>
        <MdQrCodeScanner className={styles.icon} />
        <h2 className={styles.subtitle}>Pronto para pontuar?</h2>
        <p className={styles.description}>
          Clique no botão abaixo para ler o QR Code do estabelecimento.
        </p>
        <button onClick={() => setIsScanning(true)} className={styles.scanButton}>
          LER QR-CODE
        </button>
      </div>
    </div>
  );
}
