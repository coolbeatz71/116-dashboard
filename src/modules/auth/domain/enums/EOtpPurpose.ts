/**
 * Defines the different purposes for which an OTP can be used.
 *
 * @enum {string}
 *
 * @description
 * Domain enum representing the purpose of OTP verification.
 *
 * @property {string} EmailVerification - OTP used for email verification during account registration
 * @property {string} PasswordReset - OTP used for password reset requests
 * @property {string} TwoFactorAuthentication - OTP used for two-factor authentication
 * @property {string} AccountRecovery - OTP used for account recovery
 */
export enum EOtpPurpose {
    EmailVerification = "EmailVerification",
    PasswordReset = "PasswordReset",
    TwoFactorAuthentication = "TwoFactorAuthentication",
    AccountRecovery = "AccountRecovery"
}
