import { Card } from "antd";
import type { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import type { IRootState } from "@/core/presentation/store/root.reducer";
import { ForgotPasswordForm } from "@/modules/auth/presentation/components/ForgotPasswordForm/ForgotPassword.Form";
import { ResetPasswordForm } from "@/modules/auth/presentation/components/ResetPasswordForm/ResetPassword.Form";
import { VerifyOtpForgotPasswordForm } from "@/modules/auth/presentation/components/VerifyOtpForgotPasswordForm/VerifyOtpForgotPasswordForm";
import { Logo } from "@/shared/components/Logo/Logo";

import styles from "./index.module.scss";

type ForgotPasswordStep = "resetPassword" | "verifyOtp" | "forgotPassword";

/**
 * Forgot password page component for password reset flow.
 *
 * @component
 *
 * @description
 * Main forgot password page displaying the application logo and multi-step password reset flow
 * in a centered card layout.
 *
 * Implements a three-step flow:
 * 1. ForgotPasswordForm - User enters email address
 * 2. VerifyOtpForgotPasswordForm - User enters 6-digit OTP code
 * 3. ResetPasswordForm - User sets new password
 *
 * @returns The forgot password page
 */
const ForgotPasswordPage: FC = () => {
    const { fetched: forgotPasswordFetched, data: forgotPasswordData } = useSelector(
        ({ auth: { forgotPassword } }: IRootState) => forgotPassword
    );

    const { fetched: verifyOtpFetched, data: verifyOtpData } = useSelector(
        ({ auth: { verifyOtp } }: IRootState) => verifyOtp
    );

    const isVerifyOtpSuccess = Boolean(verifyOtpFetched && verifyOtpData?.isSuccess);
    const isForgotPasswordSuccess = Boolean(forgotPasswordFetched && forgotPasswordData?.isSuccess);

    const email = forgotPasswordData?.email || "";

    /**
     * Step configuration object
     */
    const steps: Record<ForgotPasswordStep, ReactNode> = {
        resetPassword: <ResetPasswordForm email={email} />,
        verifyOtp: <VerifyOtpForgotPasswordForm email={email} />,
        forgotPassword: <ForgotPasswordForm />
    };

    /**
     * Resolve which step to render based on current state.
     */
    const renderCurrentStep = (): ReactNode => {
        if (isVerifyOtpSuccess) return steps.resetPassword;
        if (isForgotPasswordSuccess) return steps.verifyOtp;

        return steps.forgotPassword;
    };

    return (
        <div className={styles.forgotPassword}>
            <Card hoverable={false} variant="borderless" className={styles.forgotPassword__card}>
                <Logo canRedirect={false} className={styles.forgotPassword__card__logo} />
                {renderCurrentStep()}
            </Card>
        </div>
    );
};

export default ForgotPasswordPage;
