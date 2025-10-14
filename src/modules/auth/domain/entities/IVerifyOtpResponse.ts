/**
 * Verify OTP response entity returned after OTP verification.
 *
 * @interface IVerifyOtpResponse
 *
 * @description
 * Domain entity representing the response from an OTP verification request.
 *
 * @property {boolean} isSuccess - Whether the OTP was verified successfully
 */
export interface IVerifyOtpResponse {
    isSuccess: boolean;
}
