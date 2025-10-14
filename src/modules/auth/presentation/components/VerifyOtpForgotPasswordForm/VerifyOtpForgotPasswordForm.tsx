import { Button, Form, Input, Typography } from "antd";
import { type FC, useEffect } from "react";
import { EOtpPurpose } from "@/modules/auth/domain/enums/EOtpPurpose";
import { BackToLoginButton } from "@/modules/auth/presentation/components/BackToLoginButton/BackToLogin.Button";
import FormHeader from "@/modules/auth/presentation/components/FormHeader/Form.Header";
import { useResendOtp } from "@/modules/auth/presentation/hooks/UseResendOtp";
import { useVerifyOtp } from "@/modules/auth/presentation/hooks/UseVerifyOtp";
import type { IVerifyOtpCredentials } from "@/modules/auth/presentation/model/IVerifyOtpCredentials";
import { ForgotPasswordValidator } from "@/modules/auth/presentation/utils/validators/forgotpassword.validator";
import ErrorAlert from "@/shared/components/ErrorAlert/Error.Alert";

import styles from "./index.module.scss";

const { Item } = Form;
const { Text } = Typography;

interface IVerifyOtpForgotPasswordFormProps {
    email: string;
}

/**
 * Verify OTP forgot password form component.
 *
 * @component
 *
 * @description
 * Renders the OTP verification form for password reset flow.
 * Includes 6-digit OTP input, 60-second countdown timer for resend, error display, and success handling.
 * Resets verify OTP state on component mount.
 *
 * Features:
 * - 6-digit numeric OTP input with auto-formatting
 * - 60-second countdown timer before resend is enabled
 * - Resend OTP functionality with success notification (persists across navigation)
 * - Form validation and error display
 *
 * @param props - Component props
 * @param props.email - User's email address to display and use for OTP verification
 *
 * @returns The verify OTP forgot password form
 */
export const VerifyOtpForgotPasswordForm: FC<IVerifyOtpForgotPasswordFormProps> = ({ email }) => {
    const { form, onSubmit, loading, error, resetVerifyOtp } = useVerifyOtp(
        email,
        EOtpPurpose.PasswordReset
    );

    const { countdown, isResendDisabled, handleResendOtp } = useResendOtp(
        email,
        EOtpPurpose.PasswordReset
    );

    // biome-ignore lint/correctness/useExhaustiveDependencies: only want to run on mount
    useEffect(() => {
        resetVerifyOtp();
    }, []);

    /**
     * Handles OTP form submission
     */
    const handleSubmit = async (formValues: IVerifyOtpCredentials) => {
        await onSubmit({
            email,
            otp: formValues.otp,
            purpose: EOtpPurpose.PasswordReset
        });
    };

    return (
        <Form
            form={form}
            size="large"
            layout="vertical"
            onFinish={handleSubmit}
            name="admin_verify_otp"
            className={styles.verifyOtpForm}
        >
            <FormHeader
                title="Tapez le code de vérification"
                subtitle={
                    <>
                        Le code de vérification vient d'être envoyé à votre e-mail: <b>{email}</b>.
                    </>
                }
            />

            <Item
                name="otp"
                className={styles.verifyOtpForm__input}
                rules={ForgotPasswordValidator.otp("Code")}
            >
                <Input.OTP length={6} formatter={(str) => str.replace(/\D/g, "")} />
            </Item>

            <ErrorAlert error={error} showIcon closable banner={false} />

            <Item className={styles.verifyOtpForm__resendCodeButton}>
                <Button
                    block
                    type="link"
                    size="small"
                    onClick={handleResendOtp}
                    disabled={isResendDisabled}
                >
                    <Text type="secondary">Code non reçu?</Text> Renvoyer{" "}
                    {isResendDisabled ? `dans ${countdown} secondes` : ""}
                </Button>
            </Item>

            <Button
                block
                type="primary"
                htmlType="submit"
                loading={loading}
                className={styles.verifyOtpForm__submitButton}
            >
                Vérifier
            </Button>

            <Item className={styles.verifyOtpForm__backToLogin}>
                <BackToLoginButton />
            </Item>
        </Form>
    );
};
