import { Button, Flex, Layout, Typography } from "antd";
import Lottie from "lottie-react";
import type { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import notFound from "@/assets/lottie/404_anim.json";
import { IconHomeOutlined } from "@/shared/components/Icons/Icons";
import { APP_NAME } from "@/shared/lib/constants/common";
import { DASHBOARD_PATH } from "@/shared/lib/constants/paths";
import { LottieUtils } from "@/shared/lib/utils/lottie/Lottie.Utils";

import styles from "./index.module.scss";

const { Content } = Layout;
const { Title } = Typography;

export const NotFoundPage: FC = () => {
    const lottieOptions = LottieUtils.options(notFound);

    return (
        <HelmetProvider>
            <Content className={styles.notFound}>
                <Helmet>
                    <title>Page introuvable |{APP_NAME}</title>
                </Helmet>

                <Lottie width={512} height={512} {...lottieOptions} />

                <Flex justify="center">
                    <Title data-text="title">Oops! Page non trouvée</Title>
                </Flex>

                <a href={DASHBOARD_PATH} rel="noopener">
                    <Button size="large" type="primary" icon={<IconHomeOutlined />}>
                        Retour à l'Accueil
                    </Button>
                </a>
            </Content>
        </HelmetProvider>
    );
};
