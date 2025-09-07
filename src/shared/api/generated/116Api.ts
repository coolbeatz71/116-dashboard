/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AdminLoginRequest {
    email?: string | null;
    password?: string | null;
}

export interface AdminLoginResponse {
    user?: UserResponseDto;
    token?: string | null;
}

export interface FileDto {
    /** @format uuid */
    id?: string;
    fileName?: string | null;
    originalFileName?: string | null;
    mimeType?: string | null;
    storageUrl?: string | null;
    /** @format int64 */
    sizeInBytes?: number;
    isDeleted?: boolean;
}

export interface PermissionDto {
    /** @format uuid */
    id?: string;
    resource?: string | null;
    action?: string | null;
    description?: string | null;
}

export interface ProblemDetails {
    type?: string | null;
    title?: string | null;
    /** @format int32 */
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
    [key: string]: any;
}

export interface PublicLoginRequest {
    credentials?: string | null;
    password?: string | null;
}

export interface PublicLoginResponse {
    user?: UserResponseDto;
    token?: string | null;
}

export interface PublicSignUpRequest {
    email?: string | null;
    userName?: string | null;
    password?: string | null;
}

export interface PublicSignUpResponse {
    user?: UserResponseDto;
    token?: string | null;
    verificationRequired?: boolean;
}

export interface RoleDto {
    /** @format uuid */
    id?: string;
    name?: string | null;
    description?: string | null;
}

export interface SocialLoginRequest {
    email?: string | null;
    userName?: string | null;
    avatar?: string | null;
    provider?: string | null;
}

export interface SocialLoginResponse {
    user?: UserResponseDto;
    token?: string | null;
}

export interface UserResponseDto {
    /** @format uuid */
    id?: string;
    email?: string | null;
    userName?: string | null;
    roles?: RoleDto[] | null;
    permissions?: PermissionDto[] | null;
    authProvider?: string | null;
    isVerified?: boolean;
    isActive?: boolean;
    isLoggedIn?: boolean;
    /** @format date-time */
    lastLoginAt?: string | null;
    avatar?: FileDto;
    countryName?: string | null;
    countryFlagUrl?: string | null;
    countryIsoCode?: string | null;
    countryDialCode?: string | null;
    partialPhoneNumber?: string | null;
    fullPhoneNumber?: string | null;
    /** @format date-time */
    createdAt?: string | null;
    /** @format date-time */
    updatedAt?: string | null;
}

export interface VerifyOtpRequest {
    email?: string | null;
    code?: string | null;
}

export interface VerifyOtpResponse {
    isSuccess?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}

export type RequestParams = Omit<
    FullRequestParams,
    "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (
        securityData: SecurityDataType | null
    ) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}

export interface HttpResponse<D, E = unknown> extends Response {
    data: D;
    error: E;
}

type CancelToken = symbol | string | number;

export enum ContentType {
    Json = "application/json",
    JsonApi = "application/vnd.api+json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string = "";
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
    private abortControllers = new Map<CancelToken, AbortController>();
    private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
        fetch(...fetchParams);

    private baseApiParams: RequestParams = {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer"
    };

    constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
        Object.assign(this, apiConfig);
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    };

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }

    protected addQueryParam(query: QueryParamsType, key: string) {
        return this.encodeQueryParam(key, query[key]);
    }

    protected addArrayQueryParam(query: QueryParamsType, key: string) {
        const value = query[key];
        return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
    }

    protected toQueryString(rawQuery?: QueryParamsType): string {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter(
            (key) => "undefined" !== typeof query[key]
        );
        return keys
            .map((key) =>
                Array.isArray(query[key])
                    ? this.addArrayQueryParam(query, key)
                    : this.addQueryParam(query, key)
            )
            .join("&");
    }

    protected addQueryParams(rawQuery?: QueryParamsType): string {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }

    private contentFormatters: Record<ContentType, (input: any) => any> = {
        [ContentType.Json]: (input: any) =>
            input !== null &&
            (typeof input === "object" || typeof input === "string")
                ? JSON.stringify(input)
                : input,
        [ContentType.JsonApi]: (input: any) =>
            input !== null &&
            (typeof input === "object" || typeof input === "string")
                ? JSON.stringify(input)
                : input,
        [ContentType.Text]: (input: any) =>
            input !== null && typeof input !== "string"
                ? JSON.stringify(input)
                : input,
        [ContentType.FormData]: (input: any) => {
            if (input instanceof FormData) {
                return input;
            }

            return Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key];
                formData.append(
                    key,
                    property instanceof Blob
                        ? property
                        : typeof property === "object" && property !== null
                          ? JSON.stringify(property)
                          : `${property}`
                );
                return formData;
            }, new FormData());
        },
        [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
    };

    protected mergeRequestParams(
        params1: RequestParams,
        params2?: RequestParams
    ): RequestParams {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {})
            }
        };
    }

    protected createAbortSignal = (
        cancelToken: CancelToken
    ): AbortSignal | undefined => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }

        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };

    public abortRequest = (cancelToken: CancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);

        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };

    public request = async <T = any, E = any>({
        body,
        secure,
        path,
        type,
        query,
        format,
        baseUrl,
        cancelToken,
        ...params
    }: FullRequestParams): Promise<HttpResponse<T, E>> => {
        const secureParams =
            ((typeof secure === "boolean"
                ? secure
                : this.baseApiParams.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter =
            this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;

        return this.customFetch(
            `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
            {
                ...requestParams,
                headers: {
                    ...(requestParams.headers || {}),
                    ...(type && type !== ContentType.FormData
                        ? { "Content-Type": type }
                        : {})
                },
                signal:
                    (cancelToken
                        ? this.createAbortSignal(cancelToken)
                        : requestParams.signal) || null,
                body:
                    typeof body === "undefined" || body === null
                        ? null
                        : payloadFormatter(body)
            }
        ).then(async (response) => {
            const r = response as HttpResponse<T, E>;
            r.data = null as unknown as T;
            r.error = null as unknown as E;

            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                      .then((data) => {
                          if (r.ok) {
                              r.data = data;
                          } else {
                              r.error = data;
                          }
                          return r;
                      })
                      .catch((e) => {
                          r.error = e;
                          return r;
                      });

            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }

            if (!response.ok) throw data;
            return data;
        });
    };
}

/**
 * @title Api
 * @version 1.0
 */
export class Api<SecurityDataType> extends HttpClient<SecurityDataType> {
    api = {
        /**
         * @description Authenticates an admin user using email and password credentials. This endpoint performs enhanced authentication by: - Validating email and password - Verifying the account is active and verified - Checking for admin role privileges (Admin or SuperAdmin) - Generating JWT token with appropriate admin claims - Recording the login activity **Authentication Requirements:** - Valid email and password combination - Account must be active and verified - User must have Admin or SuperAdmin role assigned **Security Features:** - Password verification using secure hashing (bcrypt) - Role-based access validation - Login activity tracking - Enhanced JWT claims for admin operations **Response Codes:** - Returns 200 OK with user info and JWT token on successful authentication - Returns 400 Bad Request for invalid email format or incorrect password - Returns 401 Unauthorized when user lacks admin privileges (Admin/SuperAdmin role required) - Returns 403 Forbidden when user account is inactive or disabled - Returns 404 Not Found when no user exists with the provided email **Error Handling:** - AuthenticationException (401): Missing admin role - user authenticated but lacks Admin/SuperAdmin privileges - AuthorizationException (403): Account inactive - user exists but account is disabled/suspended - BadRequestException (400): Invalid password - email exists but password is incorrect - NotFoundException (404): User not found - no account exists with the provided email The returned JWT token includes admin-specific claims for accessing administrative endpoints.
         *
         * @tags Admin::authentication
         * @name AdminLogin
         * @summary Authenticate admin and return JWT token with admin claims
         * @request POST:/api/v1/admin/auth/login
         * @secure
         * @response `200` `AdminLoginResponse` OK
         * @response `400` `ProblemDetails` Bad Request
         * @response `401` `ProblemDetails` Unauthorized
         * @response `403` `ProblemDetails` Forbidden
         * @response `404` `void` Not Found
         */
        adminLogin: (data: AdminLoginRequest, params: RequestParams = {}) =>
            this.request<AdminLoginResponse, ProblemDetails | void>({
                path: `/api/v1/admin/auth/login`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),

        /**
         * @description Verifies the OTP (One-Time Password) code sent to the user's email during registration. This endpoint performs the following operations: - Validates the OTP code format (6-digit numeric) - Checks if the user exists and is not already verified - Validates the OTP against the database (not expired, not used, under attempt limit) - Marks the user account as verified upon successful validation - Invalidates all remaining OTPs for the user **Authentication Requirements:** - No authentication required; open to users with unverified accounts **Security Features:** - OTP expiration (60 minutes) - Maximum 3 verification attempts per OTP - Single-use OTP codes - Automatic cleanup of expired/used OTPs **Response Codes:** - Returns 200 OK with verification success status - Returns 400 Bad Request for invalid OTP code format - Returns 401 Unauthorized for expired OTP - Returns 403 Forbidden for maximum attempts reached - Returns 404 Not Found for no valid OTP found - Returns 409 Conflict if account is already verified **Error Handling:** - BadRequestException (400): Invalid OTP code format or value - AuthenticationException (401): OTP has expired - AuthorizationException (403): Maximum verification attempts reached - NotFoundException (404): No valid OTP found for the user - ConflictException (409): User account is already verified The user must verify their account within the OTP expiration window to gain full access.
         *
         * @tags Public::authentication
         * @name VerifyOtp
         * @summary Verify OTP code for account activation
         * @request POST:/api/v1/public/auth/verify-otp
         * @secure
         * @response `200` `VerifyOtpResponse` OK
         * @response `400` `ProblemDetails` Bad Request
         * @response `401` `ProblemDetails` Unauthorized
         * @response `403` `ProblemDetails` Forbidden
         * @response `404` `ProblemDetails` Not Found
         * @response `409` `ProblemDetails` Conflict
         */
        verifyOtp: (data: VerifyOtpRequest, params: RequestParams = {}) =>
            this.request<VerifyOtpResponse, ProblemDetails>({
                path: `/api/v1/public/auth/verify-otp`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),

        /**
         * @description Authenticates a user through external social providers (Google or Facebook). This endpoint performs the following operations: - Validates social provider data (email, username, avatar URL, provider) - Checks for existing local account conflicts - Creates new user account or updates existing social user - Downloads and stores avatar from social provider URL - Assigns visitor role to new users - Marks social users as verified and active **Authentication Requirements:** - No authentication required; open to the public for social login **Supported Providers:** - Google OAuth - Facebook OAuth **Security Features:** - Prevents social login if local account exists with same email - Downloads external avatars to prevent hotlinking - Automatically verifies social accounts (trusted providers) - Updates user login status **Response Codes:** - Returns 200 OK with user info and JWT token - Returns 400 Bad Request for invalid provider or malformed data - Returns 409 Conflict if local account exists with same email **Error Handling:** - BadRequestException (400): Invalid provider or malformed social data - ConflictException (409): Local account already exists with email Social users are automatically verified and granted visitor role permissions. Avatar images from social providers are downloaded and stored locally.
         *
         * @tags Public::authentication
         * @name SocialLogin
         * @summary Authenticate user via social provider
         * @request POST:/api/v1/public/auth/social-login
         * @secure
         * @response `200` `SocialLoginResponse` OK
         * @response `400` `ProblemDetails` Bad Request
         * @response `409` `ProblemDetails` Conflict
         */
        socialLogin: (data: SocialLoginRequest, params: RequestParams = {}) =>
            this.request<SocialLoginResponse, ProblemDetails>({
                path: `/api/v1/public/auth/social-login`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),

        /**
         * @description Registers a new public user by creating an account with the provided details. This endpoint performs the following operations: - Validates signup data (email, username, password, etc.) - Ensures the email/username is unique - Hashes the password using secure algorithms (bcrypt) - Creates a new public user account in the system - Triggers optional account verification (email/SMS) **Authentication Requirements:** - No authentication required; open to the public for account creation **Security Features:** - Password securely hashed before storage - Uniqueness checks on email and username - Optional verification workflow (e.g., email confirmation) **Response Codes:** - Returns 201 Created with newly created user info (excluding sensitive data) - Returns 400 Bad Request for invalid input or weak password - Returns 409 Conflict if email/username already exists **Error Handling:** - BadRequestException (400): Invalid signup data (missing/invalid fields, weak password) - ConflictException (409): Email or username already in use The created user account will initially have the Visitor role and related permissions, granting basic public access until further elevated by admins.
         *
         * @tags Public::authentication
         * @name PublicSignUp
         * @summary Register a new public user account
         * @request POST:/api/v1/public/auth/signup
         * @secure
         * @response `201` `PublicSignUpResponse` Created
         * @response `400` `ProblemDetails` Bad Request
         * @response `409` `ProblemDetails` Conflict
         */
        publicSignUp: (data: PublicSignUpRequest, params: RequestParams = {}) =>
            this.request<PublicSignUpResponse, ProblemDetails>({
                path: `/api/v1/public/auth/signup`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),

        /**
         * @description Authenticates a public user using email/userName and password credentials. This endpoint performs enhanced authentication by: - Validating credentials and password - Verifying the account is active and verified - Generating JWT token with appropriate user claims - Recording the login activity **Authentication Requirements:** - Valid email/userName and password combination - Account must be active and verified **Security Features:** - Password verification using secure hashing (bcrypt) - Login activity tracking - Basic JWT claims for public users operations **Response Codes:** - Returns 200 OK with user info and JWT token on successful authentication - Returns 400 Bad Request for invalid email/userName or incorrect password - Returns 403 Forbidden when user account is inactive or disabled - Returns 404 Not Found when no user exists with the provided email/userName **Error Handling:** - AuthorizationException (403): Account inactive - user exists but account is disabled/suspended - BadRequestException (400): Invalid password - email/userName exists but password is incorrect - NotFoundException (404): User not found - no account exists with the provided email/userName The returned JWT token includes claims for accessing public user's endpoints.
         *
         * @tags Public::authentication
         * @name PublicLogin
         * @summary Authenticate public user and return JWT token with user claims
         * @request POST:/api/v1/public/auth/login
         * @secure
         * @response `200` `PublicLoginResponse` OK
         * @response `400` `ProblemDetails` Bad Request
         * @response `401` `ProblemDetails` Unauthorized
         * @response `403` `ProblemDetails` Forbidden
         * @response `404` `void` Not Found
         */
        publicLogin: (data: PublicLoginRequest, params: RequestParams = {}) =>
            this.request<PublicLoginResponse, ProblemDetails | void>({
                path: `/api/v1/public/auth/login`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            })
    };
}
