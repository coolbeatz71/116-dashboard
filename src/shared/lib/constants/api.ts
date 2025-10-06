/**
 * API error code mappings.
 *
 * @description
 * Maps backend exception types to user-friendly error titles.
 * Used by the API client to normalize error responses.
 *
 * @property {Object} validation - Validation error mapping
 * @property {Object} authentication - Authentication error mapping
 * @property {Object} authorization - Authorization error mapping
 * @property {Object} notFound - Not found error mapping
 * @property {Object} conflict - Conflict error mapping
 * @property {Object} badRequest - Bad request error mapping
 */
export const apiErrors = {
    validation: { code: "ValidationException", title: "Validation Issues" },
    authentication: { code: "AuthenticationException", title: "Authentication Issues" },
    authorization: { code: "AuthorizationException", title: "Authorization Issues" },
    notFound: { code: "NotFoundException", title: "Not Found Issues" },
    conflict: { code: "ConflictException", title: "Conflict Issues" },
    badRequest: { code: "BadRequestException", title: "Bad Request Issues" }
} as const;
