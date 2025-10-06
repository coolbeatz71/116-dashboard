/**
 * Login credentials model for user authentication.
 *
 * @interface ILoginCredentials
 *
 * @description
 * Presentation layer model representing the data required for user login.
 * Used by login forms and passed to the login use case.
 *
 * @property {string} email - User email address
 * @property {string} password - User password (plaintext, will be transmitted over HTTPS)
 */
export interface ILoginCredentials {
    email: string;
    password: string;
}
