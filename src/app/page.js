'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import CampaignBanner from '@/components/CampaignBanner';
import StoreCard from '@/components/StoreCard';
import styles from './HomePage.module.css';

const fakeCampaigns = [
  { id: 1, title: 'Descontos de Inverno', description: 'Até 50% OFF em lojas selecionadas.', color: '#4a90e2' },
  { id: 2, title: 'Festival de Café', description: 'Compre um, leve outro grátis.', color: '#d0021b' },
  { id: 3, title: 'Semana do Hambúrguer', description: 'Combos a partir de R$19,90.', color: '#f5a623' },
];

const fakeStores = [
  { id: 1, name: 'Barbearia do Zé', category: 'Beleza' },
  { id: 2, name: 'Oficina do Bira', category: 'Automotivo' },
  { id: 3, name: 'Açaí da Praça', category: 'Alimentação' },
  { id: 4, name: 'Padaria Pão Quente', category: 'Alimentação' },
  { id: 5, name: 'PetShop Miau', category: 'Pets' },
  { id: 6, name: 'Lava Rápido Clean', category: 'Automotivo' },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.greeting}>Olá!</h1>
        <p className={styles.subtitle}>Descubra as melhores recompensas</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Campanhas em Destaque</h2>
        <Swiper spaceBetween={16} slidesPerView={'auto'} className={styles.carousel}>
          {fakeCampaigns.map((campaign) => (
            <SwiperSlide key={campaign.id} className={styles.slideBanner}>
              <CampaignBanner campaign={campaign} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lojas Populares</h2>
        <Swiper spaceBetween={16} slidesPerView={'auto'} className={styles.carousel}>
          {fakeStores.map((store) => (
            <SwiperSlide key={store.id} className={styles.slideStore}>
              <StoreCard store={store} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Novidades</h2>
        <Swiper spaceBetween={16} slidesPerView={'auto'} className={styles.carousel}>
          {[...fakeStores].reverse().map((store) => (
            <SwiperSlide key={store.id} className={styles.slideStore}>
              <StoreCard store={store} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

