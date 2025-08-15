import { cloudinaryPublicConfig } from './config.js';

/**
 * Upload an image to Cloudinary using unsigned upload
 * @param {File} file - The image file to upload
 * @param {string} folder - The folder in Cloudinary (default: 'gallery')
 * @returns {Promise<string>} - The secure URL of the uploaded image
 */
export async function uploadImageToCloudinary(file, folder = 'gallery') {
  try {
    const formData = new FormData();
    
    // Add the file
    formData.append('file', file);
    
    // Add upload preset (must be configured in Cloudinary dashboard)
    formData.append('upload_preset', cloudinaryPublicConfig.uploadPreset);
    
    // Add folder path
    formData.append('folder', folder);
    
    // Add timestamp for unique filenames
    const timestamp = Date.now();
    const cleanFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    formData.append('public_id', `${timestamp}_${cleanFilename.split('.')[0]}`);
    
    // Upload to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryPublicConfig.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Upload failed: ${errorData.error?.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    console.log('Upload successful:', data);
    
    // Return the secure URL
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}

/**
 * Upload multiple images to Cloudinary
 * @param {FileList} files - The files to upload
 * @param {string} folder - The folder in Cloudinary
 * @param {function} onProgress - Progress callback (current, total)
 * @returns {Promise<Array<string>>} - Array of secure URLs
 */
export async function uploadMultipleImagesToCloudinary(files, folder = 'gallery', onProgress = null) {
  const uploadPromises = Array.from(files).map(async (file, index) => {
    try {
      const url = await uploadImageToCloudinary(file, folder);
      if (onProgress) {
        onProgress(index + 1, files.length);
      }
      return url;
    } catch (error) {
      console.error(`Error uploading ${file.name}:`, error);
      throw error;
    }
  });
  
  return Promise.all(uploadPromises);
}

/**
 * Delete an image from Cloudinary
 * @param {string} imageUrl - The Cloudinary URL to delete
 * @returns {Promise<void>}
 */
export async function deleteImageFromCloudinary(imageUrl) {
  try {
    // Extract public_id from Cloudinary URL
    const urlParts = imageUrl.split('/');
    const versionIndex = urlParts.findIndex(part => part.startsWith('v'));
    const publicIdWithExtension = urlParts.slice(versionIndex + 1).join('/');
    const publicId = publicIdWithExtension.split('.')[0];
    
    console.log('Would delete image with public_id:', publicId);
    console.log('Note: Image deletion requires server-side implementation for security');
    
    // For deletion, you'd typically need a backend endpoint that uses your API secret
    // This is because deletion requires authentication that shouldn't be exposed in frontend
    
    throw new Error('Image deletion requires backend implementation for security');
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
}

/**
 * Generate optimized Cloudinary URL
 * @param {string} publicId - The public ID of the image
 * @param {Object} options - Transformation options
 * @returns {string} - Optimized Cloudinary URL
 */
export function getOptimizedImageUrl(publicId, options = {}) {
  const { 
    width = 800, 
    height = 600, 
    quality = 'auto', 
    format = 'auto',
    crop = 'fill'
  } = options;
  
  const transformations = [
    `w_${width}`,
    `h_${height}`,
    `c_${crop}`,
    `q_${quality}`,
    `f_${format}`
  ].join(',');
  
  return `https://res.cloudinary.com/${cloudinaryPublicConfig.cloudName}/image/upload/${transformations}/${publicId}`;
}

/**
 * Validate image file before upload
 * @param {File} file - The file to validate
 * @returns {boolean} - Whether the file is valid
 */
export function validateImageFile(file) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (!allowedTypes.includes(file.type)) {
    throw new Error(`Invalid file type: ${file.type}. Allowed: JPEG, PNG, WebP, GIF`);
  }
  
  if (file.size > maxSize) {
    throw new Error(`File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Max: 10MB`);
  }
  
  return true;
}
