import type { IBasicInitialState } from "@/core/presentation/store/action.wrapper";

/**
 * Auth slice state type definition.
 *
 * @description
 * Defines the shape of the auth Redux slice state.
 *
 * Contains state for all authentication-related operations.
 *
 * @property {IBasicInitialState} login - Login operation state
 * @property {IBasicInitialState} logout - Logout operation state
 * @property {IBasicInitialState} updateAvatar - Avatar update operation state
 * @property {IBasicInitialState} updateAccount - Account update operation state
 * @property {IBasicInitialState} changePassword - Password change operation state
 */
export type IAuthState = {
    login: IBasicInitialState;
    logout: IBasicInitialState;
    updateAvatar: IBasicInitialState;
    updateAccount: IBasicInitialState;
    changePassword: IBasicInitialState;
};
