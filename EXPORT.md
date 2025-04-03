# Manual Export Instructions

Since this is a WebContainer environment, you'll need to manually export and upload the files to GitHub. Here's how:

1. Download all project files from the WebContainer
2. Create a new repository on GitHub named "WizardPress"
3. Upload the files to GitHub through the web interface or GitHub Desktop

## Important Files

Make sure to include all these files in your repository:

```
WizardPress/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   ├── lib/
│   └── types/
├── supabase/
│   ├── functions/
│   └── migrations/
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── README.md
└── DEPLOYMENT.md
```

## After Upload

1. Go to repository Settings > Pages
2. Set up GitHub Pages to deploy from GitHub Actions
3. Add these repository secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_STRIPE_PUBLISHABLE_KEY`

The GitHub Action will automatically build and deploy your site when you push to the main branch.