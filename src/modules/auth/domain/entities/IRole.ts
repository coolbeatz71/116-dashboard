/**
 * Role entity representing user authorization roles.
 *
 * @interface IRole
 *
 * @description
 * Domain entity for user roles in the system.
 *
 * Roles group permissions and define what users can do in the application.
 *
 * @property {string} id - Unique role identifier
 * @property {string} name - Human-readable role name
 * @property {string} description - Role description explaining its purpose
 */
export interface IRole {
    id: string;
    name: string;
    description: string;
}
