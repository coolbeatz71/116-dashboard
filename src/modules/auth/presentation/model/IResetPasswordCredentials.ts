/**
 * Reset password credentials model.
 *
 * @interface IResetPasswordCredentials
 *
 * @description
 * Presentation layer model for reset password form submission.
 *
 * @property {string} email - User's email address
 * @property {string} code - OTP verification code
 * @property {string} newPassword - New password
 */
export interface IResetPasswordCredentials {
    code: string;
    email: string;
    newPassword: string;
}
