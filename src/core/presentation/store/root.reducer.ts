import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/modules/auth/presentation/store";

/**
 * Root reducer combining all feature slices.
 *
 * @remarks
 * Combines all module-specific reducers into a single root reducer.
 * Add new feature reducers here as the application grows.
 *
 */
export const rootReducer = combineReducers({
    auth: authReducer
});

/**
 * Type representing the complete application state tree.
 *
 * @remarks
 * Automatically inferred from the rootReducer.
 * Use this type for:
 * - Typing selectors
 * - Typing thunk getState return value
 * - Accessing state in Redux DevTools
 */
export type IRootState = ReturnType<typeof rootReducer>;
