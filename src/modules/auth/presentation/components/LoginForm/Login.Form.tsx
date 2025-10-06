import { Button, Form, Input } from "antd";
import { type FC, useEffect } from "react";
import { LoginValidator } from "@/modules/auth/presentation/utils/login.validator";
import ErrorAlert from "@/shared/components/ErrorAlert/Error.Alert";
import { useLogin } from "../../hooks/useLogin";

const { Item } = Form;
const { Password } = Input;

/**
 * Login form component for admin authentication.
 *
 * @component
 *
 * @description
 * Renders the login form with email and password fields.
 * Includes form validation, error display, and loading states.
 * Resets login state on component mount.
 *
 * @returns - The login form
 */
export const LoginForm: FC = () => {
    const { form, onSubmit, loading, error, resetLogin } = useLogin();

    // biome-ignore lint/correctness/useExhaustiveDependencies: only want to run on mount
    useEffect(() => {
        resetLogin();
    }, []);

    return (
        <Form form={form} size="large" onFinish={onSubmit} layout="vertical" name="admin_login">
            <Item
                name="email"
                label="Adresse e-mail"
                validateTrigger={["onSubmit", "onBlur"]}
                rules={LoginValidator.email("Adresse e-mail")}
            >
                <Input size="large" placeholder="Adresse e-mail" />
            </Item>

            <Item
                name="password"
                label="Mot de passe"
                validateTrigger={["onSubmit", "onBlur"]}
                rules={LoginValidator.password("Mot de passe")}
            >
                <Password
                    size="large"
                    visibilityToggle
                    placeholder="••••••••••••••"
                    autoComplete="new-password"
                />
            </Item>

            <ErrorAlert error={error} showIcon closable banner={false} />

            <Button block size="large" type="primary" htmlType="submit" loading={loading}>
                Connexion
            </Button>
        </Form>
    );
};
