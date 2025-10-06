import type { IAuthRepositoryPort } from "@/modules/auth/application/repositories/auth.repository.port";
import type { IAuthResponse } from "@/modules/auth/domain/entities/IAuthResponse";
import type { ILoginCredentials } from "@/modules/auth/presentation/model/ILoginCredentials";
import { apiClient } from "@/shared/api/client";
import { AuthMapper } from "../mappers/auth.mapper";

/**
 * Authentication repository implementation using REST API.
 *
 * @class AuthRepositoryImpl
 * @implements {IAuthRepositoryPort}
 *
 * @description
 * Concrete implementation of the auth repository port.
 *
 * Communicates with the backend API and maps DTOs to domain entities.
 *
 * @remarks
 * Part of the infrastructure layer in Clean Architecture.
 * Depends on external APIs and mapping logic.
 */
export class AuthRepositoryImpl implements IAuthRepositoryPort {
    /**
     * Authenticates a user via the admin login endpoint.
     *
     * @param {ILoginCredentials} credentials - User email and password
     * @returns {Promise<IAuthResponse>} Mapped authentication response
     * @throws {IApiProblemDetails} When API request fails
     */
    async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
        const response = await apiClient.api.adminLogin({
            email: credentials.email,
            password: credentials.password
        });

        return AuthMapper.authResponseFromDto(response.data);
    }
}
