import { Flex, Typography } from "antd";
import type { FC } from "react";

import styles from "./index.module.scss";

const { Title, Text } = Typography;

export interface IFormHeaderProps {
    title: string;
    subtitle: string;
}

const FormHeader: FC<IFormHeaderProps> = ({ title, subtitle }) => {
    return (
        <Flex vertical align="center" className={styles.formHeader}>
            <Title level={3} className={styles.formHeader__title}>
                {title}
            </Title>
            <Text type="secondary" className={styles.formHeader__subtitle}>
                {subtitle}
            </Text>
        </Flex>
    );
};

export default FormHeader;
