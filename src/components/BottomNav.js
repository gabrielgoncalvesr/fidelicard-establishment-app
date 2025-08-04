import Link from 'next/link';
import styles from './BottomNav.module.css';
import {
  MdHome,
  MdCardGiftcard,
  MdQrCodeScanner,
  MdCreditCard,
  MdSettings,
} from 'react-icons/md';

const navItems = [
  { href: '/', label: 'Home', icon: <MdHome /> },
  { href: '/resgates', label: 'Resgates', icon: <MdCardGiftcard /> },
  { href: '/qrcode', label: 'QRCode', icon: <MdQrCodeScanner /> },
  { href: '/cartoes', label: 'Cartões', icon: <MdCreditCard /> },
  { href: '/configuracao', label: 'Configuração', icon: <MdSettings /> },
];

export default function BottomNav() {
  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={styles.navItem}>
          {item.icon}
        </Link>
      ))}
    </nav>
  );
}
