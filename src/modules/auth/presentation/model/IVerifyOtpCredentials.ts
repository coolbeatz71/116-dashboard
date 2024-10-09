import type { EOtpPurpose } from "@/modules/auth/domain/enums/EOtpPurpose";

/**
 * Verify OTP credentials model.
 *
 * @interface IVerifyOtpCredentials
 *
 * @description
 * Presentation layer model for OTP verification form data.
 * Used by the verify OTP form to submit credentials.
 *
 * @property {string} email - User's email address
 * @property {string} otp - One-time password code (6 digits)
 * @property {EOtpPurpose} purpose - Purpose of OTP verification
 */
export interface IVerifyOtpCredentials {
    otp: string;
    email: string;
    purpose: EOtpPurpose;
}
