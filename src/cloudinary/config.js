// Cloudinary Configuration
// Updated with your actual Cloudinary credentials

const cloudinaryConfig = {
  cloudName: "durbx4l8y",           // Your cloud name
  apiKey: "797293946697952",        // Your API key  
  apiSecret: "YOUR_API_SECRET",     // Replace with your actual API secret (keep this secure!)
  uploadPreset: "gallery_preset"    // We'll create this preset
};

// For frontend-only uploads, we'll use unsigned upload presets
// This means we don't need to expose the API secret in the frontend
export const cloudinaryPublicConfig = {
  cloudName: "durbx4l8y",
  uploadPreset: cloudinaryConfig.uploadPreset
};

export default cloudinaryConfig;
