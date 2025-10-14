import { Button, Form, Input } from "antd";
import { type FC, useEffect } from "react";
import { BackToLoginButton } from "@/modules/auth/presentation/components/BackToLoginButton/BackToLogin.Button";
import FormHeader from "@/modules/auth/presentation/components/FormHeader/Form.Header";
import { useForgotPassword } from "@/modules/auth/presentation/hooks/UseForgotPassword";
import { ForgotPasswordValidator } from "@/modules/auth/presentation/utils/validators/forgotpassword.validator";
import ErrorAlert from "@/shared/components/ErrorAlert/Error.Alert";
import { IconMailOutlined } from "@/shared/components/Icons/Icons";

import styles from "./index.module.scss";

const { Item } = Form;

/**
 * Forgot password form component.
 *
 * @component
 *
 * @description
 * Renders the forgot password form with email field.
 * Includes form validation, error display, success messaging, and loading states.
 * Resets forgot password state on component mount.
 *
 * @returns The forgot password form
 */
export const ForgotPasswordForm: FC = () => {
    const { form, onSubmit, loading, error, resetForgotPassword } = useForgotPassword();

    // biome-ignore lint/correctness/useExhaustiveDependencies: only want to run on mount
    useEffect(() => {
        resetForgotPassword();
    }, []);

    return (
        <Form
            form={form}
            size="large"
            layout="vertical"
            onFinish={onSubmit}
            name="admin_forgot_password"
            className={styles.forgotPasswordForm}
        >
            <FormHeader
                title="Mot de passe oublié"
                subtitle={`Entrer l’adresse e-mail associée à votre compte. 
                        Nous vous enverrons un code de vérification pour réinitialiser le mot de passe.`}
            />

            <Item
                name="email"
                label="Adresse e-mail"
                validateTrigger={["onSubmit", "onBlur"]}
                rules={ForgotPasswordValidator.email("Adresse e-mail")}
            >
                <Input prefix={<IconMailOutlined />} placeholder="Adresse e-mail" />
            </Item>

            <ErrorAlert error={error} showIcon closable banner={false} />

            <Button
                block
                type="primary"
                htmlType="submit"
                loading={loading}
                className={styles.forgotPasswordForm__submitButton}
            >
                Envoyer le code
            </Button>

            <Item className={styles.forgotPasswordForm__backToLogin}>
                <BackToLoginButton />
            </Item>
        </Form>
    );
};
