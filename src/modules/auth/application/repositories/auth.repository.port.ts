import type { IAuthResponse } from "@/modules/auth/domain/entities/IAuthResponse";
import type { ILoginCredentials } from "@/modules/auth/presentation/model/ILoginCredentials";

/**
 * Repository port (interface) for authentication operations.
 *
 * @interface IAuthRepositoryPort
 *
 * @description
 * Defines the contract for authentication data access.
 *
 * Following the Ports & Adapters architecture pattern,
 * this port is implemented by infrastructure layer adapters.
 *
 * @remarks
 * This abstraction allows the application layer to remain independent
 * of specific data sources (REST API, GraphQL, mock data, etc.)
 */
export interface IAuthRepositoryPort {
    /**
     * Authenticates a user with email and password.
     *
     * @param {ILoginCredentials} credentials - User login credentials
     * @returns {Promise<IAuthResponse>} Authentication response with token and user data
     * @throws {IApiProblemDetails} When authentication fails
     */
    login(credentials: ILoginCredentials): Promise<IAuthResponse>;
}
