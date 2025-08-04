import styles from './CampaignBanner.module.css';

export default function CampaignBanner({ campaign }) {
  const bannerStyle = {
    backgroundColor: campaign.color,
  };

  return (
    <div className={styles.banner} style={bannerStyle}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{campaign.title}</h2>
        <p className={styles.description}>{campaign.description}</p>
      </div>
    </div>
  );
}
