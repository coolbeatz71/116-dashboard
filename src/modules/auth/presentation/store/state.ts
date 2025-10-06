import { BasicInitialState } from "@/core/presentation/store/action.wrapper";
import type { IAuthState } from "./type";

/**
 * Initial state for the auth slice.
 *
 * @description
 * Defines initial state for all auth-related operations.
 *
 * Each operation follows the BasicInitialState pattern with data, loading, fetched, and error properties.
 */
export const authInitialState: IAuthState = {
    login: BasicInitialState,
    logout: BasicInitialState,
    updateAvatar: BasicInitialState,
    updateAccount: BasicInitialState,
    changePassword: BasicInitialState
};
