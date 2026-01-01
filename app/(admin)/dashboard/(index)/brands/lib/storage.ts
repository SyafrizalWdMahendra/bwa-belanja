import { put, del } from "@vercel/blob";

/**
 * Upload file to Vercel Blob Storage
 * @param file - File object from form
 * @param folder - Folder path (e.g., 'brands', 'products')
 * @returns Object with file URL and pathname
 */
export async function uploadFile(file: File, folder: string = "") {
  try {
    const timestamp = Date.now();
    const cleanName = file.name.replaceAll(" ", "_");
    const pathname = folder
      ? `${folder}/${timestamp}-${cleanName}`
      : `${timestamp}-${cleanName}`;

    // Upload to Vercel Blob
    const blob = await put(pathname, file, {
      access: "public",
      addRandomSuffix: false,
    });

    return {
      url: blob.url,
      pathname: blob.pathname,
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file");
  }
}

/**
 * Get public URL for an image
 * Since Vercel Blob returns full URLs, we can use them directly
 * @param urlOrPathname - Full URL or pathname from Vercel Blob
 * @returns Public URL to access the image
 */
export function getImageUrl(urlOrPathname: string): string {
  // If it's already a full URL, return it
  if (urlOrPathname.startsWith("http")) {
    return urlOrPathname;
  }

  // If it's a pathname, construct the full URL
  // Note: In production, Vercel Blob URLs are automatically generated
  // This is mainly for backward compatibility
  return urlOrPathname;
}

/**
 * Delete file from Vercel Blob Storage
 * @param url - Full URL of the file
 * @returns Success status
 */
export async function deleteFile(url: string): Promise<boolean> {
  try {
    if (!url || url === "") {
      return true; // Nothing to delete
    }

    await del(url);
    return true;
  } catch (error) {
    console.error("Error deleting file:", error);
    return false;
  }
}

/**
 * Replace existing file (delete old, upload new)
 * Useful for update operations
 * @param oldUrl - URL of the old file to delete
 * @param newFile - New file to upload
 * @param folder - Folder path
 * @returns Object with new file URL and pathname
 */
export async function replaceFile(
  oldUrl: string | null,
  newFile: File,
  folder: string = ""
) {
  try {
    // Delete old file if exists
    if (oldUrl) {
      await deleteFile(oldUrl);
    }

    // Upload new file
    return await uploadFile(newFile, folder);
  } catch (error) {
    console.error("Error replacing file:", error);
    throw new Error("Failed to replace file");
  }
}
