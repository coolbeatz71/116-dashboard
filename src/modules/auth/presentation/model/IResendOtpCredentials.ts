import type { EOtpPurpose } from "@/modules/auth/domain/enums/EOtpPurpose";

/**
 * Resend OTP credentials model.
 *
 * @interface IResendOtpCredentials
 *
 * @description
 * Presentation layer model for resending OTP.
 * Used to request a new OTP code.
 *
 * @property {string} email - User's email address
 * @property {OtpPurpose} purpose - Purpose of OTP resend
 */
export interface IResendOtpCredentials {
    email: string;
    purpose: EOtpPurpose;
}
