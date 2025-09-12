import type { ThemeConfig } from "antd/es/config-provider";

export const Colors = {
    BrandPrimary: "#490fd2",
    BrandSecondary: "#ff74d4",
    BrandBackgroundLight: "#DCE0E5",
    BrandBackgroundDark: "#34384d",
    Success: "#1dd3b0",
    Error: "#ef476f",
    Warning: "#f07f34",
    Neutral: "#f9fcff",
    White: "#ffffff",
    Black: "#000000",
    Yellow: "#ffc300",
    Link: "#1890ff",
    Background: "#f0f2f5"
} as const;

export const Theme: ThemeConfig = {
    token: {
        colorPrimary: Colors.BrandPrimary,
        colorSuccess: Colors.Success,
        colorError: Colors.Error,
        colorWarning: Colors.Warning,
        borderRadius: 6,
        colorBgLayout: Colors.Background,
        fontFamily: "'Montserrat', sans-serif"
    },
    components: {
        Layout: {
            bodyBg: Colors.Background
        },
        Button: {
            paddingContentHorizontal: 32,
            paddingContentVertical: 32
        },
        Form: {
            labelColor: Colors.BrandBackgroundDark,
            labelRequiredMarkColor: Colors.Error,
            labelFontSize: 12,
            labelHeight: "0 !important"
        },
        Select: {
            fontSizeLG: 14
        }
    }
} as const;
