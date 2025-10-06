import type { Rule } from "antd/es/form";
import { ValidationUtils } from "@/shared/lib/utils/validators/validation.utils";

/**
 * Validation rules for login form fields.
 *
 * @description
 * Provides Ant Design Form validation rules for login credentials.
 * All error messages are in French to match the application locale.
 *
 * @remarks
 * - Uses Ant Design's Rule type for type safety
 * - Marked as const to prevent accidental mutation
 */
export const LoginValidator = {
    /**
     * Validation rules for email field.
     *
     * @param {string} name - Field display name for error messages
     * @returns {Rule[]} Array of validation rules
     *
     * @remarks
     * Rules:
     * - Required field
     * - Must be valid email format
     */
    email: (name: string): Rule[] => [
        ValidationUtils.required(name),
        {
            type: "email",
            message: `${name} a un format invalide`
        }
    ],

    /**
     * Validation rules for password field.
     *
     * @param {string} name - Field display name for error messages
     * @returns {Rule[]} Array of validation rules
     *
     * @remarks
     * Rules:
     * - Required field
     * - Minimum 6 characters
     * - At least 1 uppercase letter
     * - At least 1 lowercase letter
     * - At least 1 digit (0-9)
     */
    password: (name: string): Rule[] => [
        ValidationUtils.required(name),
        {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\s\S]{6,}$/,
            message: `${name} doit avoir au moins 6 caractères et contenir 1 majuscule, 1 minuscule, 1 chiffre`
        }
    ]
} as const;
