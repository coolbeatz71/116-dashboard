import { createInitialState } from "@/core/presentation/store/action.wrapper";
import type { IAuthResponse } from "@/modules/auth/domain/entities/IAuthResponse";
import type { IForgotPasswordResponse } from "@/modules/auth/domain/entities/IForgotPasswordResponse";
import type { IResendOtpResponse } from "@/modules/auth/domain/entities/IResendOtpResponse";
import type { IResetPasswordResponse } from "@/modules/auth/domain/entities/IResetPasswordResponse";
import type { IVerifyOtpResponse } from "@/modules/auth/domain/entities/IVerifyOtpResponse";
import type { IAuthState } from "./type";

/**
 * Initial state for the auth slice.
 *
 * @description
 * Defines initial state for all auth-related operations.
 *
 * Each operation follows the BasicInitialState pattern with data, loading, fetched, and error properties.
 */
export const authInitialState: IAuthState = {
    login: createInitialState<IAuthResponse>(),
    forgotPassword: createInitialState<IForgotPasswordResponse>(),
    verifyOtp: createInitialState<IVerifyOtpResponse>(),
    resendOtp: createInitialState<IResendOtpResponse>(),
    resetPassword: createInitialState<IResetPasswordResponse>(),
    logout: createInitialState(),
    updateAvatar: createInitialState(),
    updateAccount: createInitialState(),
    changePassword: createInitialState()
};
