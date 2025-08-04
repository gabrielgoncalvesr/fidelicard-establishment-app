'use client';

import { useState } from 'react';
import styles from './ConfiguracaoPage.module.css';
import { 
  IoPersonOutline, IoLockClosedOutline, IoNotificationsOutline, IoScanOutline, 
  IoDocumentTextOutline, IoShieldCheckmarkOutline, IoShareSocialOutline, IoLogOutOutline, IoChevronForward
} from 'react-icons/io5';

export default function ConfiguracaoPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Fidelicad App',
          text: 'Confira este aplicativo de fidelidade incrível!',
          url: window.location.origin,
        });
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      alert('A função de compartilhar não é suportada neste navegador.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <div className={styles.avatar}></div>
        <h2 className={styles.name}>User Name</h2>
        <p className={styles.email}>user@email.com</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Conta</h3>
        <div className={styles.settingsList}>
          <a href="/editar-perfil" className={styles.settingItem}>
            <IoPersonOutline className={styles.icon} />
            <span>Editar Perfil</span>
            <IoChevronForward className={styles.arrowIcon} />
          </a>
          <a href="/alterar-senha" className={styles.settingItem}>
            <IoLockClosedOutline className={styles.icon} />
            <span>Alterar Senha</span>
            <IoChevronForward className={styles.arrowIcon} />
          </a>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Preferências</h3>
        <div className={styles.settingsList}>
          <div className={styles.settingItem}>
            <IoNotificationsOutline className={styles.icon} />
            <span>Notificações</span>
            <label className={styles.toggleSwitch}>
              <input type="checkbox" checked={notificationsEnabled} onChange={() => setNotificationsEnabled(!notificationsEnabled)} />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.settingItem}>
            <IoScanOutline className={styles.icon} />
            <span>Ativar Face ID / Biometria</span>
            <label className={styles.toggleSwitch}>
              <input type="checkbox" checked={faceIdEnabled} onChange={() => setFaceIdEnabled(!faceIdEnabled)} />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Sobre</h3>
        <div className={styles.settingsList}>
          <a href="/termos-de-uso" className={styles.settingItem}>
            <IoDocumentTextOutline className={styles.icon} />
            <span>Termos de Uso</span>
            <IoChevronForward className={styles.arrowIcon} />
          </a>
          <a href="/politica-de-privacidade" className={styles.settingItem}>
            <IoShieldCheckmarkOutline className={styles.icon} />
            <span>Política de Privacidade</span>
            <IoChevronForward className={styles.arrowIcon} />
          </a>
          <div onClick={handleShare} className={styles.settingItem}>
            <IoShareSocialOutline className={styles.icon} />
            <span>Compartilhar o App</span>
            <IoChevronForward className={styles.arrowIcon} />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.settingsList}>
          <a href="#" className={`${styles.settingItem} ${styles.logoutButton}`}>
            <IoLogOutOutline className={styles.icon} />
            <span>Sair da Conta</span>
            <IoChevronForward className={styles.arrowIcon} />
          </a>
        </div>
      </div>

    </div>
  );
}
