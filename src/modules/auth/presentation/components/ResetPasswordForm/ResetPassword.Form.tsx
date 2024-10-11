import { Button, Form, Input } from "antd";
import { type FC, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/core/presentation/store/store";
import { BackToLoginButton } from "@/modules/auth/presentation/components/BackToLoginButton/BackToLogin.Button";
import FormHeader from "@/modules/auth/presentation/components/FormHeader/Form.Header";
import { useResetPassword } from "@/modules/auth/presentation/hooks/UseResetPassword";
import { authSlice } from "@/modules/auth/presentation/store";
import { AuthNotification } from "@/modules/auth/presentation/utils/notification/auth.notification";
import { ResetPasswordValidator } from "@/modules/auth/presentation/utils/validators/resetpassword.validator";
import ErrorAlert from "@/shared/components/ErrorAlert/Error.Alert";
import { IconLockOutlined } from "@/shared/components/Icons/Icons";
import { LOGIN_PATH } from "@/shared/lib/constants/paths";
import { showNotification } from "@/shared/lib/utils/notification/notification.utils";

import styles from "./index.module.scss";

const { Item } = Form;
const { Password } = Input;

interface IResetPasswordFormProps {
    email: string;
}

/**
 * Reset password form component.
 *
 * @component
 *
 * @description
 * Renders the reset password form with new password and confirm password fields.
 * Includes form validation, error display, success notification with redirect to login.
 * Uses global notification API to ensure notification persists across navigation.
 * Resets reset password state on component mount.
 *
 * @param {IResetPasswordFormProps} props - Component props
 * @param {string} props.email - User's email address
 *
 * @returns The reset password form
 */
export const ResetPasswordForm: FC<IResetPasswordFormProps> = ({ email }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { form, onSubmit, loading, error, isSuccess, resetResetPassword } =
        useResetPassword(email);

    // biome-ignore lint/correctness/useExhaustiveDependencies: only want to run on mount
    useEffect(() => {
        resetResetPassword();
    }, []);

    // Handle success notification and redirect
    useEffect(() => {
        if (isSuccess) {
            showNotification(AuthNotification.passwordResetSuccess);

            dispatch(
                authSlice.actions.purge([
                    "forgotPassword",
                    "verifyOtp",
                    "resendOtp",
                    "resetPassword"
                ])
            );

            navigate(LOGIN_PATH);
        }
    }, [isSuccess, navigate, dispatch]);

    return (
        <Form
            form={form}
            size="large"
            layout="vertical"
            onFinish={onSubmit}
            name="admin_reset_password"
            className={styles.resetPasswordForm}
        >
            <FormHeader
                title="Réinitialiser le mot de passe"
                subtitle="Entrez votre nouveau mot de passe pour réinitialiser votre compte."
            />

            <Item
                name="newPassword"
                label="Nouveau mot de passe"
                validateTrigger={["onSubmit", "onBlur"]}
                rules={ResetPasswordValidator.newPassword("Nouveau mot de passe")}
            >
                <Password
                    visibilityToggle
                    autoComplete="new-password"
                    placeholder="••••••••••••••"
                    prefix={<IconLockOutlined />}
                />
            </Item>

            <Item
                name="confPassword"
                label="Confirmer le mot de passe"
                validateTrigger={["onSubmit", "onBlur"]}
                dependencies={["newPassword"]}
                rules={ResetPasswordValidator.confPassword("Confirmer le mot de passe")}
            >
                <Password
                    visibilityToggle
                    autoComplete="new-password"
                    placeholder="••••••••••••••"
                    prefix={<IconLockOutlined />}
                />
            </Item>

            <ErrorAlert error={error} showIcon closable banner={false} />

            <Button
                block
                type="primary"
                htmlType="submit"
                loading={loading}
                className={styles.resetPasswordForm__submitButton}
            >
                Réinitialiser
            </Button>

            <Item className={styles.resetPasswordForm__backToLogin}>
                <BackToLoginButton />
            </Item>
        </Form>
    );
};
