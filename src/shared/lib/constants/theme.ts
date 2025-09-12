import type { ThemeConfig } from "antd";

export const Colors = {
    Primary: "#490fd2",
    Success: "#1dd3b0",
    Error: "#ef476f",
    Warning: "#f07f34"
};

export const Theme: ThemeConfig = {
    token: {
        colorPrimary: "#490fd2",
        colorSuccess: "#1dd3b0",
        colorError: "#ef476f",
        colorWarning: "#f07f34",
        borderRadius: 6
    },
    components: {
        Button: {
            paddingContentHorizontal: 32,
            paddingContentVertical: 32
        },
        Form: {
            labelColor: "rgba(52, 56, 77, 0.65)",
            labelRequiredMarkColor: "#ef476f"
        }
    }
} as const;
