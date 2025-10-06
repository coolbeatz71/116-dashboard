import type { IUser } from "./IUser";

/**
 * Authentication response entity returned after successful login.
 *
 * @interface IAuthResponse
 *
 * @description
 * Domain entity representing the complete authentication state.
 *
 * Contains both the JWT token for API authentication and the authenticated user's data.
 *
 * @property {string} token - JWT access token for authenticating API requests
 * @property {IUser} user - Authenticated user's profile and authorization data
 */
export interface IAuthResponse {
    token: string;
    user: IUser;
}
