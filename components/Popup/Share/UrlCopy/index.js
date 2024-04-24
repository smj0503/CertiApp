import { useRouter } from 'next/router';
import { Flex } from "antd";
import styles from './UrlCopy.module.css';

export default function ({ setIsCopied }) {
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APP_HOST}${router.asPath}`;

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setIsCopied(true);
  };

  return (
    <Flex align='center' justify='space-between' className={styles.urlContainer}>
      <span className={styles.url}>{url}</span>
      <button
        type='button'
        className={styles.copyButton}
        data-button-animation={true}
        onClick={copy}
      >
        {'복사'}
      </button>
    </Flex>
  );
}
