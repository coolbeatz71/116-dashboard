import Lottie from "lottie-react";
import skeleton from "@/assets/lottie/skeleton_anim.json";
import { LottieUtils } from "@/shared/lib/utils/lottie/Lottie.Utils";

export const AuthLayoutLoading = () => {
    const lottieOptions = LottieUtils.options(skeleton);

    return (
        <div className="loadingContainer">
            <Lottie width={480} height={480} {...lottieOptions} />
        </div>
    );
};
