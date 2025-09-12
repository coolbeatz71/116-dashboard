import { Card } from "antd";
import type { FC } from "react";
import { LoginForm } from "@/modules/auth/presentation/components/LoginForm/Login.Form";
import { Logo } from "@/shared/components/Logo/Logo";

import styles from "./index.module.scss";

export const LoginPage: FC = () => {
    return (
        <div className={styles.login}>
            <Card hoverable={false} variant="borderless" className={styles.login__card}>
                <Logo canRedirect={false} className={styles.login__card__logo} />
                <LoginForm />
            </Card>
        </div>
    );
};
