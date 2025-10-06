/**
 * File entity representing uploaded files in the system.
 *
 * @interface IFile
 *
 * @description
 * Domain entity for files (e.g., user avatars, documents, media).
 *
 * Tracks file metadata and storage information.
 *
 * @property {string} id - Unique file identifier
 * @property {string} fileName - Stored filename (may be hashed/sanitized)
 * @property {string} originalFileName - Original filename from upload
 * @property {string} mimeType - File MIME type (e.g., "image/png", "application/pdf")
 * @property {string} storageUrl - URL or path to access the stored file
 * @property {number} sizeInBytes - File size in bytes
 * @property {boolean} isDeleted - Soft delete flag
 */
export interface IFile {
    id: string;
    fileName: string;
    originalFileName: string;
    mimeType: string;
    storageUrl: string;
    sizeInBytes: number;
    isDeleted: boolean;
}
