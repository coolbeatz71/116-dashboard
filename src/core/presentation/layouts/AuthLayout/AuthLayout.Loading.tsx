import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { FC } from "react";
import skeleton from "@/assets/lottie/skeleton_anim.lottie";
import { LottieUtils } from "@/shared/lib/utils/lottie/lottie.utils";

import styles from "./index.module.scss";

/**
 * Loading component for authentication layout.
 *
 * @component
 *
 * @description
 * Displays a skeleton loading animation during authentication state
 * rehydration or page transitions. Used with Redux PersistGate and
 * React Suspense fallback.
 *
 * @returns The loading skeleton animation
 */
export const AuthLayoutLoading: FC = () => {
    const lottieOptions = LottieUtils.options(skeleton);

    return (
        <div className={styles.loadingContainer}>
            <DotLottieReact className={styles.loadingContainer__lottie} {...lottieOptions} />
        </div>
    );
};
