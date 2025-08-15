import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CameraIcon, 
  XMarkIcon, 
  HeartIcon,
  ShareIcon,
  MagnifyingGlassIcon,
  TagIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";
import AdminPanelCloudinary from './AdminPanelCloudinary';

const Gallery = ({ showAdmin, setShowAdmin }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState([]);

  // Load photos from JSON file
  useEffect(() => {
    fetch('/gallery/photos.json')
      .then(response => response.json())
      .then(data => {
        // Map imageUrl to src for compatibility
        const mappedPhotos = data.photos.map(photo => ({
          ...photo,
          src: photo.imageUrl || photo.src
        }));
        setPhotos(mappedPhotos);
      })
      .catch(error => {
        console.error('Error loading photos:', error);
        // Fallback to sample data
        setPhotos([
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            title: "Mountain Serenity",
            category: "landscape",
            tags: ["mountains", "nature", "sunset"],
            likes: 127,
            description: "Golden hour magic in the mountains"
          },
          {
            id: 2,
            src: "https://images.unsplash.com/photo-1494790108755-2616c9dc9f47?w=400",
            title: "Portrait Grace",
            category: "portrait",
            tags: ["portrait", "natural", "beauty"],
            likes: 89,
            description: "Natural beauty captured perfectly"
          },
          {
            id: 3,
            src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
            title: "Wedding Bliss",
            category: "wedding",
            tags: ["wedding", "love", "celebration"],
            likes: 156,
            description: "Pure joy on the perfect day"
          }
        ]);
      });
  }, []); // Removed showAdmin from dependencies since we don't want to re-fetch photos when admin state changes

  const categories = [
    { key: 'all', label: 'All Photos', icon: CameraIcon },
    { key: 'portrait', label: 'Portraits', icon: '👤' },
    { key: 'landscape', label: 'Landscapes', icon: '🏔️' },
    { key: 'wedding', label: 'Weddings', icon: '💒' },
    { key: 'street', label: 'Street', icon: '🏙️' },
    { key: 'nature', label: 'Nature', icon: '🌿' },
    { key: 'fashion', label: 'Fashion', icon: '👗' },
    { key: 'wildlife', label: 'Wildlife', icon: '🦋' }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = filter === 'all' || photo.category === filter;
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="gallery-container">
      {/* Hero Section */}
      <div className="gallery-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gallery-hero-content"
        >
          <div className="photographer-intro">
            <CameraIcon className="camera-icon" />
            <h1>Gallery</h1>
          </div>
        </motion.div>
      </div>

      {/* Search and Filter Section */}
      <div className="gallery-controls">
        <div className="search-bar">
          <MagnifyingGlassIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search photos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {typeof category.icon === 'string' ? (
                <span className="emoji-icon">{category.icon}</span>
              ) : (
                <category.icon className="filter-icon" />
              )}
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Masonry Gallery Grid */}
      <div className="masonry-gallery">
        <AnimatePresence>
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gallery-item"
              onClick={() => openLightbox(photo)}
            >
              <div className="image-container">
                {/* Scrapbook decorative elements */}
                <div className="scrapbook-element tape-1"></div>
                <div className="scrapbook-element tape-2"></div>
                <div className="corner-fold"></div>
                
                {/* Decorative doodles */}
                {index % 4 === 0 && <div className="doodle doodle-heart">♡</div>}
                {index % 4 === 1 && <div className="doodle doodle-star">★</div>}
                {index % 4 === 2 && <div className="doodle doodle-circle">◯</div>}
                
                <img src={photo.src} alt={photo.title} loading="lazy" />
                
                {/* Polaroid-style caption */}
                <div className="polaroid-caption">
                  {photo.title}
                </div>
                
                {/* Handwritten tag */}
                <div className="handwritten-tag">
                  #{photo.category}
                </div>

                <div className="image-overlay">
                  <div className="image-info">
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                    <div className="image-tags">
                      {photo.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="tag">
                          <TagIcon className="tag-icon" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="image-stats">
                    <div className="likes">
                      <HeartIcon className="heart-icon" />
                      {photo.likes}
                    </div>
                    <button className="share-btn">
                      <ShareIcon className="share-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeLightbox}>
                <XMarkIcon />
              </button>
              
              <div className="lightbox-image">
                <img src={selectedImage.src} alt={selectedImage.title} />
              </div>
              
              <div className="lightbox-info">
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
                <div className="lightbox-tags">
                  {selectedImage.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
                <div className="lightbox-stats">
                  <div className="likes">
                    <HeartIcon className="heart-icon" />
                    {selectedImage.likes} likes
                  </div>
                  <button className="share-btn">
                    <ShareIcon className="share-icon" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Panel */}
      <AnimatePresence>
        {showAdmin && (
          <AdminPanelCloudinary 
            onClose={() => setShowAdmin(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
