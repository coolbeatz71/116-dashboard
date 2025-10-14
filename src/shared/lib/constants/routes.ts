import forgotPasswordRoute from "@/modules/auth/presentation/pages/ForgotPasswordPage/route";
import loginRoute from "@/modules/auth/presentation/pages/LoginPage/route";
import type { IRoute } from "@/shared/lib/types/IRoute";

/**
 * Application routes configuration.
 *
 * @description
 * Aggregates all route configurations from different modules.
 *
 * @remarks
 * Add new module routes here as the application grows.
 */
const routes: IRoute[] = [...loginRoute, ...forgotPasswordRoute];

export default routes;
