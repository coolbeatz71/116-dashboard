import type { IAuthRepositoryPort } from "@/modules/auth/application/repositories/auth.repository.port";
import type { IAuthResponse } from "@/modules/auth/domain/entities/IAuthResponse";
import type { IForgotPasswordResponse } from "@/modules/auth/domain/entities/IForgotPasswordResponse";
import type { IResendOtpResponse } from "@/modules/auth/domain/entities/IResendOtpResponse";
import type { IResetPasswordResponse } from "@/modules/auth/domain/entities/IResetPasswordResponse";
import type { IVerifyOtpResponse } from "@/modules/auth/domain/entities/IVerifyOtpResponse";
import { AuthMapper } from "@/modules/auth/infrastructure/mappers/auth.mapper";
import type { IForgotPasswordCredentials } from "@/modules/auth/presentation/model/IForgotPasswordCredentials";
import type { ILoginCredentials } from "@/modules/auth/presentation/model/ILoginCredentials";
import type { IResendOtpCredentials } from "@/modules/auth/presentation/model/IResendOtpCredentials";
import type { IResetPasswordCredentials } from "@/modules/auth/presentation/model/IResetPasswordCredentials";
import type { IVerifyOtpCredentials } from "@/modules/auth/presentation/model/IVerifyOtpCredentials";
import { apiClient } from "@/shared/api/client";

/**
 * Authentication repository implementation using REST API.
 *
 * @class AuthRepositoryImpl
 * @implements {IAuthRepositoryPort}
 *
 * @description
 * Concrete implementation of the auth repository port.
 *
 * Communicates with the backend API and maps DTOs to domain entities.
 *
 * @remarks
 * Part of the infrastructure layer in Clean Architecture.
 * Depends on external APIs and mapping logic.
 */
export class AuthRepositoryImpl implements IAuthRepositoryPort {
    /**
     * Authenticates a user via the admin login endpoint.
     *
     * @param {ILoginCredentials} credentials - User email and password
     * @returns {Promise<IAuthResponse>} Mapped authentication response
     * @throws {IApiProblemDetails} When API request fails
     */
    async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
        const response = await apiClient.api.adminLogin({
            email: credentials.email,
            password: credentials.password
        });

        return AuthMapper.authResponseFromDto(response.data);
    }

    /**
     * Initiates password reset via the admin forgot password endpoint.
     *
     * @param {IForgotPasswordCredentials} credentials - User email
     * @returns {Promise<IForgotPasswordResponse>} Success status of the request
     * @throws {IApiProblemDetails} When API request fails
     */
    async forgotPassword(
        credentials: IForgotPasswordCredentials
    ): Promise<IForgotPasswordResponse> {
        const response = await apiClient.api.adminForgotPassword({
            email: credentials.email
        });

        return AuthMapper.forgotPasswordResponseFromDto(response.data);
    }

    /**
     * Verifies OTP code via the admin verify OTP endpoint.
     *
     * @param {IVerifyOtpCredentials} credentials - User email, OTP code, and purpose
     * @returns {Promise<IVerifyOtpResponse>} Success status of the verification
     * @throws {IApiProblemDetails} When API request fails
     */
    async verifyOtp(credentials: IVerifyOtpCredentials): Promise<IVerifyOtpResponse> {
        const response = await apiClient.api.adminVerifyOtp({
            email: credentials.email,
            code: credentials.otp,
            purpose: credentials.purpose
        });

        return AuthMapper.verifyOtpResponseFromDto(response.data);
    }

    /**
     * Resends a new OTP code via the admin resend OTP endpoint.
     *
     * @param {IResendOtpCredentials} credentials - User email and purpose
     * @returns {Promise<IResendOtpResponse>} Success status of the resend request
     * @throws {IApiProblemDetails} When API request fails
     */
    async resendOtp(credentials: IResendOtpCredentials): Promise<IResendOtpResponse> {
        const response = await apiClient.api.adminResendOtp({
            email: credentials.email,
            purpose: credentials.purpose
        });

        return AuthMapper.resendOtpResponseFromDto(response.data);
    }

    /**
     * Resets user password via the admin reset password endpoint.
     *
     * @param {IResetPasswordCredentials} credentials - User email, OTP code, and new password
     * @returns {Promise<IResetPasswordResponse>} Success status of the password reset
     * @throws {IApiProblemDetails} When API request fails
     */
    async resetPassword(credentials: IResetPasswordCredentials): Promise<IResetPasswordResponse> {
        const response = await apiClient.api.adminResetPassword({
            email: credentials.email,
            code: credentials.code,
            newPassword: credentials.newPassword
        });

        return AuthMapper.resetPasswordResponseFromDto(response.data);
    }
}
