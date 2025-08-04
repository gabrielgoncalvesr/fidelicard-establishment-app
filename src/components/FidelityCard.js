'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FidelityCard.module.css';

const Stamp = ({ filled }) => (
  <div className={`${styles.stamp} ${filled ? styles.filled : ''}`}></div>
);

export default function FidelityCard({ card }) {
  const { id, establishmentName, description, stamps, totalStamps, imageUrl } = card;
  const [imageError, setImageError] = useState(false);

  const stampElements = Array.from({ length: totalStamps }, (_, i) => (
    <Stamp key={i} filled={i < stamps} />
  ));

  return (
    <Link href={`/cartoes/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.info}>
            <h3 className={styles.title}>{establishmentName}</h3>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.logoContainer}>
            {imageError ? (
              <div className={styles.logoPlaceholder}>
                {establishmentName.charAt(0)}
              </div>
            ) : (
              <Image
                src={imageUrl}
                alt={`Logo de ${establishmentName}`}
                width={50}
                height={50}
                className={styles.logo}
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
                <div className={styles.stampsContainer} style={{ gridTemplateColumns: `repeat(${totalStamps}, 1fr)` }}>
          {stampElements}
        </div>
      </div>
    </Link>
  );
}
