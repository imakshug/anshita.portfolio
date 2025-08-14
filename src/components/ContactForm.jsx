import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircleIcon, 
  PaperAirplaneIcon,
  ExclamationTriangleIcon 
} from "@heroicons/react/24/outline";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('loading');
    
    try {
      // Using Formspree with form data format (recommended approach)
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_subject', `Portfolio Contact from ${formData.name}`);
      
      const response = await fetch('https://formspree.io/f/xeozdglq', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after showing success
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      } else {
        console.error('Formspree error:', result);
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      
      // Reset status after showing error
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="contact-form-container">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="success-message"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircleIcon className="success-icon" />
            </motion.div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you soon!</p>
            
            {/* Confetti animation */}
            <div className="confetti">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti-piece"
                  initial={{ 
                    opacity: 0, 
                    y: 0, 
                    x: 0,
                    rotate: 0 
                  }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    y: [-20, -80, -120], 
                    x: [(Math.random() - 0.5) * 100],
                    rotate: [0, 360] 
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        ) : status === 'error' ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="error-message"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <ExclamationTriangleIcon className="error-icon" />
            </motion.div>
            <h3>Message Failed to Send</h3>
            <p>Sorry, there was an error sending your message. Please try again or contact me directly.</p>
            <motion.button
              className="retry-button"
              onClick={() => setStatus('idle')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Again
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="form-group">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ExclamationTriangleIcon className="error-icon" />
                    {errors.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="form-group">
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ExclamationTriangleIcon className="error-icon" />
                    {errors.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="form-group">
              <motion.textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ExclamationTriangleIcon className="error-icon" />
                    {errors.message}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              className={`submit-btn ${status}`}
              disabled={status === 'loading'}
              whileHover={status !== 'loading' ? { scale: 1.05, y: -2 } : {}}
              whileTap={status !== 'loading' ? { scale: 0.95 } : {}}
            >
              {status === 'loading' ? (
                <motion.div
                  className="loading-spinner"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <PaperAirplaneIcon className="btn-icon" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
