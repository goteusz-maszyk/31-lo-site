import Link from '@docusaurus/Link';
import styles from './NoticeBanner.module.css';

export default function NoticeBanner() {
  return (
    <div className={styles.noticeBanner}>
      <div className="container">
        <h2 className={styles.noticeText}>
          <Link href="https://www.facebook.com/share/1D5fCGGk5G/">
            🎉 Zapraszamy na dzień otwarty 25 kwietnia 2026!!!
          </Link>
        </h2>
      </div>
    </div>
  );
}
