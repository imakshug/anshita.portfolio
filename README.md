
# Anshita Gupta Portfolio

A modern, animated portfolio for MBA aspirant and marketing specialist Anshita Gupta, built with React 18, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Features
- Responsive, mobile-first design
- Animated sections and transitions (Framer Motion)
- Tailwind CSS for rapid, theme-based styling
- React Icons for beautiful iconography
- Downloadable resume
- All technical portfolio sections:
  - Navbar (fixed, animated)
  - Hero Section (gradient, profile card, CTA, scroll indicator)
  - Profile Summary (two-column, icon cards)
  - Academics (vertical timeline)
  - Skills (chips/tags, icon grid)
  - Experience (animated cards)
  - Projects (masonry grid, modal popup)
  - Certifications (badges, animation)
  - Positions of Responsibility (vertical card list)
  - Conferences & Workshops (carousel)
  - Volunteer Work (image card, overlay)
  - Contact (form, social icons)
  - Footer

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

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
