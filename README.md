# Wizard Press Website

The official website for Wizard Press, a boutique publishing house bringing magic to the written word.

## 🌟 Features

- Modern, responsive design with magical UI elements
- Interactive book showcase with 3D flip effect
- Manuscript submission system
- Newsletter subscription
- Pre-order functionality
- Sparkle and magical effects

## 🚀 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Stripe Integration

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wizardpress/wizardpress-website.git
   cd wizardpress-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and fill in your environment variables:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Build

To build for production:
```bash
npm run build
```

## 🌐 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. Builds the project using Vite
2. Uploads the build artifacts
3. Deploys to GitHub Pages

To enable GitHub Pages deployment:
1. Go to your repository settings
2. Navigate to "Pages" under "Code and automation"
3. Select "GitHub Actions" as the source
4. Ensure the repository has the necessary permissions for GitHub Pages deployment

The site will be available at: `https://wizardpress.github.io/wizardpress-website/`

## 📝 License

Copyright © 2024 Wizard Press. All rights reserved.