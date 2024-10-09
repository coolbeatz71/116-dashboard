/**
 * Forgot password response entity returned after requesting password reset.
 *
 * @interface IForgotPasswordResponse
 *
 * @description
 * Domain entity representing the response from a forgot password request.
 *
 * @property {boolean} isSuccess - Whether the password reset email was sent successfully
 */
export interface IForgotPasswordResponse {
    isSuccess: boolean;
    email: string;
}
