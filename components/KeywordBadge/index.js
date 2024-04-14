import styles from './KeywordBadge.module.css';

export default function ({ keyword }) {
  return <div className={styles.badge}>{keyword}</div>;
}
