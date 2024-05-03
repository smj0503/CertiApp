import styles from './CertificateCard.module.css';
const TOP_POSITION = 100;

export default function ({ certificate, idx, index, position, onClick }) {
  return (
    <div
      className={styles.card}
      onClick={() => onClick(certificate, idx)}
      style={{
        top:
          index === -1
            ? TOP_POSITION * idx
            : index === idx
              ? 0
              : position + 526 + 30 * idx,
      }}
    >
      <div className={styles.imageContainer} data-button-animation={true}>
        <img
          src={certificate.certificateImageLink}
          alt={certificate.certificateName}
        />
      </div>
    </div>
  );
}
