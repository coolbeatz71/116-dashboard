import type { FC } from "react";
import { APP_NAME } from "@/shared/lib/constants/common";
import { DASHBOARD_PATH } from "@/shared/lib/constants/paths";

interface LogoProps {
    canRedirect?: boolean;
    className: string | undefined;
}

export const Logo: FC<LogoProps> = ({ className, canRedirect = false }) =>
    canRedirect ? (
        <a aria-label={`${APP_NAME}-logo`} href={DASHBOARD_PATH}>
            <div className={className} />
        </a>
    ) : (
        <div className={className} />
    );
