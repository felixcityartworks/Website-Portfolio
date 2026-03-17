# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS (v4), and Framer Motion. 
Features smooth scrolling navigation, sleek typography, and engaging micro-animations.

## Getting Started Locally

1. **Navigate to the directory**:
   ```bash
   cd "Portfolio Website"
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
4. **Open in Browser**:
   Navigate to `http://localhost:5173/` to view the website.

## Deployment to Vercel

Vercel is the easiest way to deploy this React Vite application.

1. **Push your code to GitHub** (or GitLab/Bitbucket).
2. **Import the Project in Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/) and log in.
   - Click **Add New** > **Project**.
   - Import your connected Git repository.
3. **Configure Project Settings**:
   - Framework Preset: **Vite** (Should be auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**:
   - Click **Deploy**. Vercel will automatically build and host your portfolio site!

## Features
- **Responsive Design**: Flawless on Desktop, Tablet, and Mobile.
- **Smooth Navigation**: One-page smooth scroll navigation.
- **Scroll Animations**: Framer Motion handles dynamic entry animations.
- **Customizable**: Edit `src/index.css` for themes, and `src/components/` for personal data.
