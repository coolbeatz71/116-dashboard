import type { IAuthResponse } from "@/modules/auth/domain/entities/IAuthResponse";
import type { IFile } from "@/modules/auth/domain/entities/IFile";
import type { IPermission } from "@/modules/auth/domain/entities/IPermission";
import type { IRole } from "@/modules/auth/domain/entities/IRole";
import type { IUser } from "@/modules/auth/domain/entities/IUser";
import type {
    AdminLoginResponse,
    FileDto,
    PermissionDto,
    RoleDto,
    UserResponseDto
} from "@/shared/api/generated/116.api";

/**
 * Mapper for converting API DTOs to domain entities in the auth module.
 *
 * @description
 * Provides pure transformation functions to map data transfer objects (DTOs)
 * from the API layer to clean domain entities. Handles null/undefined values
 * and nested object mappings.
 *
 * @remarks
 * - All methods are stateless pure functions
 * - Marked as const to prevent accidental mutation
 * - Part of the infrastructure layer
 */
export const AuthMapper = {
    /**
     * Maps RoleDto to IRole domain entity.
     *
     * @param {RoleDto} dto - Role data from API
     * @returns {IRole} Mapped role entity
     */
    roleFromDto(dto: RoleDto): IRole {
        return {
            id: dto.id,
            name: dto.name,
            description: dto.description
        };
    },

    /**
     * Maps PermissionDto to IPermission domain entity.
     *
     * @param {PermissionDto} dto - Permission data from API
     * @returns {IPermission} Mapped permission entity
     */
    permissionFromDto(dto: PermissionDto): IPermission {
        return {
            id: dto.id,
            resource: dto.resource,
            action: dto.action,
            description: dto.description
        };
    },

    /**
     * Maps FileDto to IFile domain entity.
     *
     * @param {FileDto} dto - File data from API
     * @returns {IFile} Mapped file entity
     */
    fileFromDto(dto: FileDto): IFile {
        return {
            id: dto.id,
            fileName: dto.fileName,
            originalFileName: dto.originalFileName,
            mimeType: dto.mimeType,
            storageUrl: dto.storageUrl,
            sizeInBytes: dto.sizeInBytes,
            isDeleted: dto.isDeleted
        };
    },

    /**
     * Maps UserResponseDto to IUser domain entity.
     *
     * @param {UserResponseDto} dto - User data from API
     * @returns {IUser} Mapped user entity with nested roles, permissions, and avatar
     */
    userFromDto(dto: UserResponseDto): IUser {
        return {
            id: dto.id,
            email: dto.email,
            userName: dto.userName,
            roles: dto.roles.map(this.roleFromDto),
            permissions: dto.permissions?.map(this.permissionFromDto),
            authProvider: dto.authProvider,
            isVerified: dto.isVerified,
            isActive: dto.isActive,
            isLoggedIn: dto.isLoggedIn,
            lastLoginAt: dto.lastLoginAt,
            avatar: dto.avatar ? this.fileFromDto(dto.avatar) : null,
            countryName: dto.countryName ?? null,
            countryFlagUrl: dto.countryFlagUrl ?? null,
            countryIsoCode: dto.countryIsoCode ?? null,
            countryDialCode: dto.countryDialCode ?? null,
            partialPhoneNumber: dto.partialPhoneNumber ?? null,
            fullPhoneNumber: dto.fullPhoneNumber ?? null,
            createdAt: dto.createdAt ?? null,
            updatedAt: dto.updatedAt ?? null
        };
    },

    /**
     * Maps AdminLoginResponse to IAuthResponse domain entity.
     *
     * @param {AdminLoginResponse} response - Login response from API
     * @returns {IAuthResponse} Mapped auth response with token and user
     */
    authResponseFromDto(response: AdminLoginResponse): IAuthResponse {
        return {
            token: response.token,
            user: this.userFromDto(response.user)
        };
    }
} as const;
