import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import skeleton from "@/assets/lottie/skeleton_anim.lottie";
import { LottieUtils } from "@/shared/lib/utils/lottie/Lottie.Utils";

import styles from "./index.module.scss";

export const AuthLayoutLoading = () => {
    const lottieOptions = LottieUtils.options(skeleton);

    return (
        <div className={styles.loadingContainer}>
            <DotLottieReact className={styles.loadingContainer__lottie} {...lottieOptions} />
        </div>
    );
};
