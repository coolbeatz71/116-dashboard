/**
 * Resend OTP response entity returned after requesting a new OTP.
 *
 * @interface IResendOtpResponse
 *
 * @description
 * Domain entity representing the response from a resend OTP request.
 *
 * @property {boolean} isSuccess - Whether the OTP was resent successfully
 */
export interface IResendOtpResponse {
    isSuccess: boolean;
}
