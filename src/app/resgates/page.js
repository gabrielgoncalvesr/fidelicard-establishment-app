import RewardCard from '@/components/RewardCard';
import styles from './ResgatesPage.module.css';

const fakeRewards = [
  { id: 1, establishmentName: 'Barbearia do Zé', title: '1 Corte de Cabelo Grátis' },
  { id: 2, establishmentName: 'Oficina do Bira', title: 'Troca de óleo com 50% OFF' },
  { id: 3, establishmentName: 'Salão da Maria', title: 'Escova Grátis' },
  { id: 4, establishmentName: 'Lava Rápido CleanCar', title: 'Lavagem Simples Grátis' },
  { id: 5, establishmentName: 'Estética Automotiva', title: 'Cristalização de Para-brisa' },
];

export default function ResgatesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Meus Resgates</h1>
      <h2 className={styles.sectionTitle}>Recompensas disponíveis</h2>
      <div>
        {fakeRewards.map((reward) => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </div>
  );
}
