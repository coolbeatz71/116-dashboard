import { createSlice } from "@reduxjs/toolkit";
import {
    ActionWrapperFulfilled,
    ActionWrapperPending,
    ActionWrapperRejected,
    ActionWrapperReset
} from "@/core/presentation/store/action.wrapper";
import { SliceName } from "./constants";
import { loginAction } from "./login.action";
import { authInitialState } from "./state";

/**
 * Auth Redux slice.
 *
 * @description
 * Manages authentication state including login, logout, and profile updates,etc.
 *
 * Uses action wrappers for consistent async state handling.
 *
 * @remarks
 * - Exports authSlice for accessing actions
 * - Default export is the reducer for store configuration
 */
export const authSlice = createSlice({
    name: SliceName.Auth,
    initialState: authInitialState,
    reducers: {
        clear: ActionWrapperReset
    },
    extraReducers: (builder) => {
        builder
            // login usecase
            .addCase(loginAction.pending, ActionWrapperPending)
            .addCase(loginAction.fulfilled, ActionWrapperFulfilled)
            .addCase(loginAction.rejected, ActionWrapperRejected);
    }
});

/**
 * Auth reducer for Redux store.
 */
const authReducer = authSlice.reducer;
export default authReducer;
