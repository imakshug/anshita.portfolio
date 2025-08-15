import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  InformationCircleIcon,
  XMarkIcon,
  DocumentTextIcon,
  FolderIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  PhotoIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { uploadMultipleImagesToCloudinary, validateImageFile } from '../cloudinary/storage.js';

export default function AdminPanelCloudinary({ onClose }) {
  const [activeTab, setActiveTab] = useState('cloudinary-upload');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [uploadedImages, setUploadedImages] = useState([]);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = async (files) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    setError('');
    setUploadProgress({ current: 0, total: files.length });
    setUploadedImages([]);

    try {
      // Validate all files first
      Array.from(files).forEach(validateImageFile);

      const urls = await uploadMultipleImagesToCloudinary(
        files,
        'gallery',
        (current, total) => {
          setUploadProgress({ current, total });
        }
      );

      // Generate photo data objects for each uploaded image
      const newPhotos = urls.map((url, index) => {
        const file = files[index];
        return {
          id: Date.now() + index, // Temporary ID - user should update this
          title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' '), // Remove extension and replace - _ with spaces
          category: "portrait", // Default category
          imageUrl: url,
          tags: ["new", "upload"],
          description: `Uploaded via Cloudinary - ${file.name}`,
          likes: 0,
          featured: false
        };
      });

      setUploadedImages(newPhotos);
      console.log('All images uploaded successfully to Cloudinary:', urls);
    } catch (error) {
      setError(`Upload failed: ${error.message}`);
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const downloadPhotosJson = () => {
    fetch('/gallery/photos.json')
      .then(response => response.json())
      .then(data => {
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'photos.json';
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading photos.json:', error));
  };

  const downloadUpdatedPhotosJson = () => {
    if (uploadedImages.length === 0) return;

    // Fetch current photos.json and add new photos
    fetch('/gallery/photos.json')
      .then(response => response.json())
      .then(currentData => {
        const updatedData = {
          ...currentData,
          photos: [...currentData.photos, ...uploadedImages]
        };
        
        const dataStr = JSON.stringify(updatedData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'photos_updated.json';
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch(() => {
        // If photos.json doesn't exist, create a new one
        const newData = {
          photos: uploadedImages
        };
        const dataStr = JSON.stringify(newData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'photos_new.json';
        link.click();
        URL.revokeObjectURL(url);
      });
  };

  const samplePhotoData = {
    id: 4,
    title: "Your Photo Title",
    category: "portrait",
    imageUrl: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/gallery/sample.jpg",
    tags: ["tag1", "tag2", "tag3"],
    description: "Description of your photo",
    likes: 25,
    featured: false
  };

  return (
    <motion.div
      className="admin-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="admin-modal"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="admin-header">
          <h2>☁️ Cloudinary Gallery Management</h2>
          <button 
            onClick={onClose}
            className="admin-close-btn"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="admin-tabs">
          <button
            className={`admin-tab ${activeTab === 'cloudinary-upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('cloudinary-upload')}
          >
            <SparklesIcon className="w-3 h-3" />
            Free Upload
          </button>
          <button
            className={`admin-tab ${activeTab === 'instructions' ? 'active' : ''}`}
            onClick={() => setActiveTab('instructions')}
          >
            <InformationCircleIcon className="w-3 h-3" />
            Setup Guide
          </button>
          <button
            className={`admin-tab ${activeTab === 'template' ? 'active' : ''}`}
            onClick={() => setActiveTab('template')}
          >
            <CodeBracketIcon className="w-3 h-3" />
            Template
          </button>
        </div>

        <div className="admin-content">
          {activeTab === 'cloudinary-upload' && (
            <div className="firebase-upload-content">
              <div className="upload-section">
                <h3><SparklesIcon className="w-4 h-4 inline mr-2" />Upload Images to Cloudinary (Free)</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Drag and drop images or click to select. Images will be uploaded to Cloudinary's free CDN.
                  <strong> 25GB storage + bandwidth included free!</strong>
                </p>
                
                <div
                  className={`upload-dropzone ${uploading ? 'uploading' : ''}`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    style={{ display: 'none' }}
                  />
                  
                  {uploading ? (
                    <div className="upload-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                        ></div>
                      </div>
                      <p>Uploading {uploadProgress.current} of {uploadProgress.total} images...</p>
                    </div>
                  ) : (
                    <div className="upload-placeholder">
                      <PhotoIcon className="w-12 h-12 text-gray-400 mb-4" />
                      <p className="text-lg font-medium">Drop images here or click to select</p>
                      <p className="text-sm text-gray-500">Free hosting via Cloudinary CDN</p>
                      <p className="text-xs text-green-600 mt-2">✨ Supports JPG, PNG, WebP, GIF up to 10MB</p>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="error-message">
                    <p>{error}</p>
                  </div>
                )}

                {uploadedImages.length > 0 && (
                  <motion.div 
                    className="uploaded-images"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4>✅ Successfully Uploaded to Cloudinary ({uploadedImages.length} images)</h4>
                    <div className="uploaded-grid">
                      {uploadedImages.map((photo, index) => (
                        <div key={index} className="uploaded-item">
                          <img src={photo.imageUrl} alt={photo.title} />
                          <p>{photo.title}</p>
                        </div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="download-section"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <div className="download-highlight">
                        <h3 className="download-title">📥 Ready to Download!</h3>
                        <button 
                          onClick={downloadUpdatedPhotosJson}
                          className="download-btn primary pulse"
                        >
                          <CloudArrowUpIcon className="w-5 h-5" />
                          Download Updated photos.json
                        </button>
                        <p className="download-instructions">
                          📋 <strong>Next Steps:</strong><br />
                          1. Save this file to your computer<br />
                          2. Upload to GitHub at <code>public/gallery/photos.json</code><br />
                          3. Your website will update automatically! 🚀
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="instructions-content">
              <div className="instruction-section">
                <h3><SparklesIcon className="w-3 h-3 inline mr-2" />Cloudinary Setup (One-time, Free)</h3>
                <ol>
                  <li>Go to <a href="https://cloudinary.com/users/register/free" target="_blank" rel="noopener noreferrer">Cloudinary Free Account</a></li>
                  <li>Sign up for free (25GB storage + bandwidth included)</li>
                  <li>Go to Dashboard → Settings → Upload presets</li>
                  <li>Create new preset: name it "gallery_preset", set to "Unsigned"</li>
                  <li>Update <code>src/cloudinary/config.js</code> with your cloud name</li>
                </ol>
              </div>

              <div className="instruction-section">
                <h3><PhotoIcon className="w-3 h-3 inline mr-2" />Upload Process</h3>
                <ol>
                  <li>Use the "Free Upload" tab to upload images directly to Cloudinary</li>
                  <li>Images are automatically optimized and served via global CDN</li>
                  <li>Download the updated photos.json file</li>
                  <li>Upload the photos.json to your GitHub repository at <code>public/gallery/photos.json</code></li>
                  <li>Your website will update automatically!</li>
                </ol>
              </div>

              <div className="instruction-section">
                <h3><FolderIcon className="w-3 h-3 inline mr-2" />Legacy Method (GitHub)</h3>
                <ol>
                  <li>Go to the <a href="https://github.com/imakshug/anshita.portfolio" target="_blank" rel="noopener noreferrer">GitHub repository</a></li>
                  <li>Navigate to <code>public/gallery/</code> folder</li>
                  <li>Click "Add file" → "Upload files"</li>
                  <li>Drag and drop your images or click to select</li>
                  <li>
                    <button 
                      onClick={downloadPhotosJson}
                      className="download-btn"
                    >
                      <CloudArrowUpIcon className="w-3 h-3" />
                      Download current photos.json
                    </button>
                  </li>
                  <li>Update photos.json with new image data</li>
                  <li>Upload the updated photos.json</li>
                </ol>
              </div>

              <div className="tips-section">
                <h4>💡 Why Cloudinary?</h4>
                <ul>
                  <li>🆓 <strong>25GB free</strong> storage + bandwidth (very generous!)</li>
                  <li>⚡ <strong>Global CDN</strong> - images load fast worldwide</li>
                  <li>🎯 <strong>Auto-optimization</strong> - perfect formats for each device</li>
                  <li>📱 <strong>Responsive images</strong> - automatic resizing</li>
                  <li>🔒 <strong>Secure & reliable</strong> - enterprise-grade infrastructure</li>
                  <li>🚀 <strong>No billing required</strong> - free tier is very generous</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'template' && (
            <div className="template-content">
              <h3>Photo Data Template</h3>
              <p>Copy this template and modify for each new photo:</p>
              <div className="code-block">
                <pre>{JSON.stringify(samplePhotoData, null, 2)}</pre>
              </div>
              <div className="template-notes">
                <h4>Field Explanations:</h4>
                <ul>
                  <li><strong>id:</strong> Unique number (increment from last photo)</li>
                  <li><strong>title:</strong> Display name for the photo</li>
                  <li><strong>category:</strong> One of: portrait, landscape, wedding, street, nature, fashion, wildlife</li>
                  <li><strong>imageUrl:</strong> Cloudinary URL (auto-generated when using Cloudinary upload)</li>
                  <li><strong>tags:</strong> Array of keywords for searching</li>
                  <li><strong>description:</strong> Brief description</li>
                  <li><strong>likes:</strong> Any number you want</li>
                  <li><strong>featured:</strong> true/false - shows in featured section</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
