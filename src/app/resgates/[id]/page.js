'use client';

import { useState } from 'react';
import styles from './RewardDetailPage.module.css';
import RewardSuccessModal from '@/components/RewardSuccessModal';

// Dados Fictícios (em uma aplicação real, viria de uma API)
const fakeRewards = {
  1: { id: 1, establishmentName: 'Barbearia do Zé', title: '1 Corte de Cabelo Grátis' },
  2: { id: 2, establishmentName: 'Oficina do Bira', title: 'Troca de óleo com 50% OFF' },
  3: { id: 3, establishmentName: 'Salão da Maria', title: 'Escova Grátis' },
  4: { id: 4, establishmentName: 'Lava Rápido CleanCar', title: 'Lavagem Simples Grátis' },
  5: { id: 5, establishmentName: 'Estética Automotiva', title: 'Cristalização de Para-brisa' },
};

export default function RewardDetailPage({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reward = fakeRewards[params.id];

  if (!reward) {
    return <p>Recompensa não encontrada.</p>;
  }

  const handleRedeem = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <p className={styles.establishment}>{reward.establishmentName}</p>
          <h1 className={styles.title}>{reward.title}</h1>
          <p className={styles.instructions}>
            Apresente este código ao estabelecimento para validar seu resgate.
          </p>
          <div className={styles.qrCodePlaceholder}>QR CODE</div>
          <button onClick={handleRedeem} className={styles.redeemButton}>
            Confirmar Resgate
          </button>
        </div>
      </div>
      {isModalOpen && <RewardSuccessModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
