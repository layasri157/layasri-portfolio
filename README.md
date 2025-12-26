<div align="center">

# 🛠️ layasri-portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)](https://layasri-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?&style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

**Modern Glassmorphism Portfolio** - Built with React + Vite + Custom CSS

</div>

## ✨ **Live Demo**
**[https://layasri-portfolio.vercel.app/](https://layasri-portfolio.vercel.app/)**

## 🎨 **Features**

🔥 Glassmorphism design (backdrop blur)
📱 Fully responsive (mobile-first)
⚡ Smooth hover animations & transitions
🚀 Lightning fast (Vite + Vercel Edge)
🎯 Fixed navbar with smooth scroll
💫 CSS Grid + Flexbox layouts

## 🛠️ **Tech Stack**
Frontend: React 18 + Vite 5
Styling: Custom CSS (Tailwind-inspired)
Build: Vite (60x faster HMR)
Deploy: Vercel Edge Network
Animations: Pure CSS (no JS)
Responsive: CSS Grid + Media Queries

## 📁 **Project Structure**
src/
├── App.jsx # Main portfolio component
├── index.css # Glassmorphism styles
└── index.html # Vite entry point
dist/ # Production build

## 🚀 **Development Setup**

Clone & Install
git clone https://github.com/layasri157/layasri-portfolio.git
cd layasri-portfolio
npm install

Build & Deploy
npm run build
npm run preview

## 🎯 **Design Highlights**

| Feature | Implementation |
|---------|----------------|
| **Glassmorphism** | `backdrop-filter: blur(20px)` + `rgba(2,6,23,0.8)` |
| **Hover Effects** | `transform: translateY(-4px)` + `transition: 0.3s` |
| **Navbar** | `position: fixed` + `backdrop-filter: blur(20px)` |
| **Responsive Grid** | `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` |
| **Photo Glow** | `box-shadow: 0 20px 40px rgba(34,197,94,0.4)` |

## ⚡ **Performance**
Bundle Size: 59kB (gzipped)
FCP: 0.8s
LCP: 1.2s
CLS: 0.00
TBT: 0ms

## 🔄 **Build Commands**
{
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
}

