/**
 * Reset password response entity returned after successfully resetting password.
 *
 * @interface IResetPasswordResponse
 *
 * @description
 * Domain entity representing the response from a reset password request.
 *
 * @property {boolean} isSuccess - Whether the password was reset successfully
 */
export interface IResetPasswordResponse {
    isSuccess: boolean;
}
