import loginRoute from "@/modules/auth/presentation/pages/LoginPage/route";
import type { IRoute } from "../types/IRoute";

/**
 * Application routes configuration.
 *
 * @description
 * Aggregates all route configurations from different modules.
 *
 * Currently includes: login routes.
 *
 * @remarks
 * Add new module routes here as the application grows.
 */
const routes: IRoute[] = [...loginRoute];

export default routes;
