import type { IBasicInitialState } from "@/core/presentation/store/action.wrapper";
import type { IAuthResponse } from "@/modules/auth/domain/entities/IAuthResponse";
import type { IForgotPasswordResponse } from "@/modules/auth/domain/entities/IForgotPasswordResponse";
import type { IResendOtpResponse } from "@/modules/auth/domain/entities/IResendOtpResponse";
import type { IResetPasswordResponse } from "@/modules/auth/domain/entities/IResetPasswordResponse";
import type { IVerifyOtpResponse } from "@/modules/auth/domain/entities/IVerifyOtpResponse";
import type { IUnknownObject } from "@/shared/lib/types/IUnknownObject";

/**
 * Auth slice state type definition.
 *
 * @description
 * Defines the shape of the auth Redux slice state.
 *
 * Contains state for all authentication-related operations with properly typed data.
 *
 * @property {IBasicInitialState<IAuthResponse>} login - Login operation state
 * @property {IBasicInitialState<IForgotPasswordResponse>} forgotPassword - Forgot password operation state
 * @property {IBasicInitialState<IVerifyOtpResponse>} verifyOtp - Verify OTP operation state
 * @property {IBasicInitialState<IResendOtpResponse>} resendOtp - Resend OTP operation state
 * @property {IBasicInitialState<IResetPasswordResponse>} resetPassword - Reset password operation state
 * @property {IBasicInitialState} logout - Logout operation state
 * @property {IBasicInitialState} updateAvatar - Avatar update operation state
 * @property {IBasicInitialState} updateAccount - Account update operation state
 * @property {IBasicInitialState} changePassword - Password change operation state
 */
export type IAuthState = {
    login: IBasicInitialState<IAuthResponse>;
    forgotPassword: IBasicInitialState<IForgotPasswordResponse>;
    verifyOtp: IBasicInitialState<IVerifyOtpResponse>;
    resendOtp: IBasicInitialState<IResendOtpResponse>;
    resetPassword: IBasicInitialState<IResetPasswordResponse>;
    logout: IBasicInitialState<IUnknownObject>;
    updateAvatar: IBasicInitialState<IUnknownObject>;
    updateAccount: IBasicInitialState<IUnknownObject>;
    changePassword: IBasicInitialState<IUnknownObject>;
};
