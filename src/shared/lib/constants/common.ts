//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PUBLIC ENVIRONMENT VARIABLES (Safe for client-side exposure)

// External APIs - Public Configuration
export const IMAGES_API_URL = import.meta.env.VITE_CLOUDINARY_URL as string;
export const IMAGES_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY as string;
export const IMAGES_API_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET as string;
export const IMAGES_API_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;
export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string;

// Application URLs
export const API_URL = import.meta.env.VITE_API_URL;
export const STAGING_URL = import.meta.env.VITE_FRONTEND_STAGING_URL;
export const PROD_URL = import.meta.env.VITE_FRONTEND_PRODUCTION_URL;
export const DEV_URL = import.meta.env.VITE_FRONTEND_DEVELOPMENT_URL;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// SECURITY WARNING: MOVE TO SERVER-SIDE ONLY

// These variables contain sensitive data and should NOT be exposed to clients.
// Remove VITE_ prefix and move to server-side API endpoints.

export const IMAGES_API_SECRET = import.meta.env.VITE_CLOUDINARY_SECRET as string;
export const JWT_SECRET_KEY = import.meta.env.VITE_JWT_SECRET_KEY;
export const CRYPTO_PASSPHASE = import.meta.env.VITE_CRYPTO_PASSPHASE;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// APPLICATION CONSTANTS (Static configuration)

// App Identity
export const APP_NAME = "116";
export const APP_AUTHOR = `${APP_NAME} Network`;
export const APP_TWITTER_HANDLE = `@${APP_NAME}HQ`;
export const APP_DESCRIPTION = "When words stop coming out, music pops up";

// Static Assets
export const LOGO_LIGHT = "/assets/logo/light.svg";
export const LOGO_DARK = "/assets/logo/dark.svg";

// Local Storage Keys
export const API_TOKEN_STORAGE_KEY = `${APP_NAME}-token`;
export const USER_DATA_STORAGE_KEY = `${APP_NAME}-user`;
export const PLATFORM_NAME = `${APP_NAME}-dashboard`;
