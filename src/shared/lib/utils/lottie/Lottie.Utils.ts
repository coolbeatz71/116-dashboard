import type { LottieOptions } from "lottie-react";
import type { IUnknownObject } from "@/shared/lib/types/common";

export const LottieUtils = {
    options: (animationData: IUnknownObject): LottieOptions => ({
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    })
};
