import FidelityCard from '@/components/FidelityCard';
import styles from './CartoesPage.module.css';

const fakeCards = [
  {
    id: 1,
    establishmentName: 'Barbearia do Zé',
    description: 'A cada 10 cortes, ganhe 1 grátis.',
    stamps: 7,
    totalStamps: 10,
    imageUrl: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80'
  },
  {
    id: 2,
    establishmentName: 'Oficina do Bira',
    description: 'Junte 5 selos e ganhe 50% de desconto na troca de óleo.',
    stamps: 3,
    totalStamps: 10,
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80'
  },
  {
    id: 3,
    establishmentName: 'Açaí da Praça',
    description: 'Complete o cartão e ganhe um açaí de 500ml.',
    stamps: 8, /* Corrigido */
    totalStamps: 10, /* Corrigido */
    imageUrl: 'https://images.unsplash.com/photo-1563201515-894727594038?w=500&q=80'
  },
];

export default function CartoesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Meus Cartões</h1>
      </header>
      <div>
        {fakeCards.map((card) => (
          <FidelityCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
