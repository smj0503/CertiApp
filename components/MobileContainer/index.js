import { Flex } from "antd";
import styles from './MobileContainer.module.css';

export default function ({ children }) {
    return (
        <Flex justify='center' align='center' className={styles.container}>
            <Flex vertical align='center' justify='center' className={styles.mobileContainer}>{children}</Flex>
        </Flex>
    );
}