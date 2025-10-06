import type { FC } from "react";
import type { IUnknownObject } from "@/shared/lib/types/common";

/**
 * Route configuration interface.
 *
 * @interface IRoute
 *
 * @description
 * Defines the structure for application route configuration.
 *
 * Includes authentication and permission requirements.
 *
 * @property {string} path - Route URL path
 * @property {string} name - Human-readable route name
 * @property {FC<IUnknownObject>} component - React component to render
 * @property {boolean} exact - Whether to match path exactly
 * @property {Object} extraProps - Additional route properties
 * @property {boolean} extraProps.isLoggedIn - Whether user must be authenticated
 * @property {string[]} extraProps.permissions - Required permissions for access
 */
export interface IRoute {
    path: string;
    name: string;
    component: FC<IUnknownObject>;
    exact: boolean;
    extraProps: {
        isLoggedIn: boolean;
        permissions?: string[];
    };
}
