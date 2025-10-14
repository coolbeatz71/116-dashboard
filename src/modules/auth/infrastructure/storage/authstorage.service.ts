import { LocalStorageService } from "@/core/infrastructure/storage/localstorage.service";
import type { IUser } from "@/modules/auth/domain/entities/IUser";
import {
    API_TOKEN_STORAGE_KEY,
    OTP_CODE_STORAGE_KEY,
    USER_DATA_STORAGE_KEY
} from "@/shared/lib/constants/common";

/**
 * Authentication storage service for managing auth data in localStorage.
 *
 * @description
 * Provides specialized methods for storing and retrieving authentication-related
 * data (JWT tokens, OTP codes, and user information). Wraps the generic LocalStorageService
 * with auth-specific operations.
 *
 * @remarks
 * - Uses predefined storage keys from constants
 * - Part of the infrastructure layer
 * - Used by authentication use cases and API client
 * - Manages JWT tokens, OTP verification codes, and user data
 */
export const AuthStorageService = {
    /**
     * Stores the JWT authentication token.
     *
     * @param {string} token - JWT token from login response
     */
    setToken(token: string): void {
        LocalStorageService.setItem(API_TOKEN_STORAGE_KEY, token);
    },

    /**
     * Stores the OTP verification code.
     *
     * @param {string} code - OTP code from verification response
     */
    setOtpCode(code: string): void {
        LocalStorageService.setItem(OTP_CODE_STORAGE_KEY, code);
    },

    /**
     * Stores the authenticated user data.
     *
     * @param {IUser} user - User entity from login response
     */
    setUser(user: IUser): void {
        LocalStorageService.setItem(USER_DATA_STORAGE_KEY, user);
    },

    /**
     * Retrieves the stored JWT token.
     *
     * @returns {string | null} JWT token or null if not found
     */
    getToken(): string | null {
        return LocalStorageService.getItem<string>(API_TOKEN_STORAGE_KEY);
    },

    /**
     * Retrieves the stored OTP code.
     *
     * @returns {string | null} OTP code or null if not found
     */
    getOtpCode(): string | null {
        return LocalStorageService.getItem<string>(OTP_CODE_STORAGE_KEY);
    },

    /**
     * Retrieves the stored user data.
     *
     * @returns {IUser | null} User entity or null if not found
     */
    getUser(): IUser | null {
        return LocalStorageService.getItem<IUser>(USER_DATA_STORAGE_KEY);
    },

    /**
     * Removes the stored JWT token.
     */
    clearToken(): void {
        LocalStorageService.removeItem(API_TOKEN_STORAGE_KEY);
    },

    /**
     * Removes the stored OTP code.
     */
    clearOtpCode(): void {
        LocalStorageService.removeItem(OTP_CODE_STORAGE_KEY);
    },

    /**
     * Removes the stored user data.
     */
    clearUser(): void {
        LocalStorageService.removeItem(USER_DATA_STORAGE_KEY);
    },

    /**
     * Clears all authentication data (token and user).
     *
     * @remarks
     * Used during logout or when auth errors occur.
     */
    clearAuth(): void {
        LocalStorageService.removeItem(API_TOKEN_STORAGE_KEY);
        LocalStorageService.removeItem(USER_DATA_STORAGE_KEY);
    }
};
