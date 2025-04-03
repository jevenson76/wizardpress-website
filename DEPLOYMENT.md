# Wizard Press Deployment Guide

This document outlines the steps and configuration required to deploy the Wizard Press website.

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- A Supabase account with the following environment variables:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

## Build Configuration

The project uses Vite for building and bundling. The build configuration is defined in `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== 'production',
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

## Environment Variables

Ensure the following environment variables are set in your deployment environment:

```env
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_URL=your_supabase_url
```

## Build Steps

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

   This will create a `dist` directory containing the production-ready assets.

## Deployment

### Netlify Deployment

1. Connect your repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18.x

3. Add environment variables in Netlify:
   - Go to Site settings > Environment variables
   - Add the Supabase environment variables

4. Deploy:
   ```bash
   # Using Netlify CLI
   netlify deploy --prod
   ```

### Post-Deployment Checklist

1. Verify environment variables are correctly set
2. Test Supabase connection
3. Verify all routes are working
4. Check external asset loading
5. Test form submissions
6. Validate newsletter subscriptions
7. Confirm pre-order functionality

## Monitoring

- Monitor Supabase database usage
- Check Netlify analytics for site performance
- Review error logs in Netlify dashboard

## Troubleshooting

Common issues and solutions:

1. **Build Failures**
   - Verify Node.js version
   - Check for missing dependencies
   - Validate environment variables

2. **Runtime Errors**
   - Check browser console for errors
   - Verify Supabase connection
   - Validate API endpoints

3. **Asset Loading Issues**
   - Confirm external asset URLs are accessible
   - Check CDN status
   - Verify file paths in build output

## Support

For deployment issues or questions, contact:
- Technical Support: support@wizard-press.com
- Development Team: dev@wizard-press.com