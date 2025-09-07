import type { FC } from "react";
import type { IUnknownObject } from "@/shared/types/common";

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
