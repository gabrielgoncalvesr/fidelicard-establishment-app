'use client';

import { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import styles from './QrCodeScanner.module.css';

const QrCodeScanner = ({ onScanSuccess, onScanError, onClose }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    if (!scannerRef.current) return;

    const html5QrCode = new Html5Qrcode(scannerRef.current.id);
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    const startScanner = async () => {
      try {
        await html5QrCode.start(
          { facingMode: 'environment' },
          config,
          onScanSuccess,
          onScanError
        );
      } catch (err) {
        console.error('Error starting QR scanner:', err);
        onScanError('Não foi possível iniciar a câmera.');
      }
    };

    startScanner();

    return () => {
      const stopScanner = async () => {
        try {
          if (html5QrCode.isScanning) {
            await html5QrCode.stop();
          }
        } catch (err) {
          console.error('Error stopping QR scanner:', err);
        }
      };
      stopScanner();
    };
  }, [onScanSuccess, onScanError]);

  return (
    <div className={styles.scannerContainer}>
      <div id="qr-reader" ref={scannerRef} className={styles.scannerVideo}></div>
      <div className={styles.viewfinder}></div>
      <button onClick={onClose} className={styles.closeButton}>Cancelar</button>
    </div>
  );
};

export default QrCodeScanner;
