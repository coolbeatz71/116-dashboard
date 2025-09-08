import type { DotLottieReactProps } from "@lottiefiles/dotlottie-react";

export const LottieUtils = {
    options: (animationPath: string): DotLottieReactProps => ({
        loop: true,
        autoplay: true,
        src: animationPath,
        renderConfig: {
            freezeOnOffscreen: true,
            autoResize: true
        },
        layout: {
            fit: "fill"
        }
    })
};
