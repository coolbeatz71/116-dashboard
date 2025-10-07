import { Card } from "antd";
import type { FC } from "react";
import { LoginForm } from "@/modules/auth/presentation/components/LoginForm/Login.Form";
import { Logo } from "@/shared/components/Logo/Logo";
import FormHeader from "../../components/FormHeader/Form.Header";
import styles from "./index.module.scss";

/**
 * Login page component for admin authentication.
 *
 * @component
 *
 * @description
 * Main login page displaying the application logo and login form
 * in a centered card layout.
 *
 * @returns - The login page
 */
const LoginPage: FC = () => {
    return (
        <div className={styles.login}>
            <Card hoverable={false} variant="borderless" className={styles.login__card}>
                <Logo canRedirect={false} className={styles.login__card__logo} />
                <FormHeader
                    title="Bon retour"
                    subtitle="Ah, vous voilà! Remplissez vos informations."
                />
                <LoginForm />
            </Card>
        </div>
    );
};

export default LoginPage;
