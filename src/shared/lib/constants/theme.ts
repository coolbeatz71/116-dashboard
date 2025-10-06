import type { ThemeConfig } from "antd/es/config-provider";

/**
 * Application color palette.
 *
 * @description
 * Centralized color definitions for consistent theming.
 * Colors are used in the Ant Design theme configuration.
 *
 * @property {string} BrandPrimary - Primary brand color
 * @property {string} BrandSecondary - Secondary brand color
 * @property {string} BrandBackgroundLight - Light background color
 * @property {string} BrandBackgroundDark - Dark background color
 * @property {string} Success - Success state color
 * @property {string} Error - Error state color
 * @property {string} Warning - Warning state color
 * @property {string} Neutral - Neutral color
 * @property {string} White - White color
 * @property {string} Black - Black color
 * @property {string} Yellow - Yellow accent color
 * @property {string} Link - Link color
 * @property {string} Background - Default background color
 */
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

/**
 * Ant Design theme configuration.
 *
 * @description
 * Customizes Ant Design components with brand colors and styling.
 * Applied globally via ConfigProvider.
 */
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
            labelColor: `${Colors.BrandBackgroundDark}b3`,
            labelRequiredMarkColor: Colors.Error,
            labelFontSize: 12,
            labelHeight: "0 !important"
        },
        Select: {
            fontSizeLG: 14
        },
        Alert: {
            withDescriptionPadding: "1rem !important",
            defaultPadding: "1rem !important"
        }
    }
} as const;
