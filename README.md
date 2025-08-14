
# 🌊 Anshita Gupta Portfolio

A stunning portfolio for marketing specialist Anshita Gupta. Features modern animations, enhanced UX, and a professional presentation of her academic achievements and work experience.

## ✨ Features

### 🎨 **Design & Theme**
- **Ocean-inspired color palette** with deep blues, teals, and coral accents
- **Dark/Light theme support** with seamless transitions
- **Glass-morphism effects** and modern card designs
- **Responsive design** optimized for all devices
- **Custom loading screen** with animated AG initials

### 🚀 **Enhanced User Experience**
- **Framer Motion animations** throughout the site
- **Floating social media icons** for easy access
- **Scroll spy navigation** with active section highlighting
- **Enhanced contact form** with success animations
- **Optimized loading performance** (500ms load time)

### 💼 **Professional Content**
- **Latest work experience** featuring CultureX Entertainment internship
- **Comprehensive skills showcase** with 18+ technical and soft skills
- **Academic achievements** with detailed education timeline
- **Projects and internships** with visual presentations
- **Downloadable resume** easily accessible

## 🏗️ **Architecture & Components**

### **Core Components**
- **🏠 Hero Section** - Professional introduction with static content and CTAs
- **📚 Academics** - Educational background with institution details
- **🎯 Skills** - Comprehensive skill grid with hover effects
- **💼 Experience** - Work history with latest CultureX Entertainment role
- **🚀 Projects** - Portfolio of internships and project work
- **📞 Contact** - Enhanced form with validation and animations

### **Enhanced UI Components**
- **🌊 LoadingScreen** - Ocean-themed loading with AG branding
- **🔗 FloatingSocials** - Persistent social media access
- **🧭 Navbar** - Smart navigation with scroll-based highlighting
- **📱 AnimatedSection** - Reusable wrapper for section animations

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ and npm

### **Installation**
```bash
# Clone the repository
git clone https://github.com/imakshug/anshita.portfolio.git

# Navigate to project directory
cd anshita.portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit http://localhost:5173
```

### **Deployment**
```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure
```
├── public/
│   ├── profile.jpeg
│   ├── Anshita_Gupta_Resume.pdf
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AcademicDetails.jsx
│   │   ├── Academics.jsx
│   │   ├── animatedsection.jsx
│   │   ├── Certifications.jsx
│   │   ├── Conferences.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Positions.jsx
│   │   ├── ProfileSummary.jsx
│   │   ├── ProjectsInternship.jsx
│   │   ├── Skills.jsx
│   │   ├── SkillsTechnical.jsx
│   │   ├── VolunteerWork.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── README.md
```

## Customization
- Update profile image and resume in `public/`
- Edit section content in `src/components/`
- Style with Tailwind classes in component files

## Tech Stack
- React 18
- Vite
- Tailwind CSS v4
- Framer Motion
- React Icons

## License
MIT
