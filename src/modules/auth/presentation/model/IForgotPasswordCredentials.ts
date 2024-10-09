/**
 * Forgot password credentials model.
 *
 * @interface IForgotPasswordCredentials
 *
 * @description
 * Represents the data required to initiate a password reset.
 * Used in the forgot password form.
 *
 * @property {string} email - User's email address for password reset
 */
export interface IForgotPasswordCredentials {
    email: string;
}
