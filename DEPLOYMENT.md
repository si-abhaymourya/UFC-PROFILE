# 🚀 Vercel Deployment Guide

## Quick Deploy (Recommended)

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (no configuration needed!)

3. **Your app will be live at**: `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project? No
   - Project name: ufc-profile-app
   - Directory: ./
   - Override settings? No

## 🔧 Configuration Details

### Environment Variables (Optional)
If you want to use a separate API server:
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add: `NEXT_PUBLIC_API_URL` = `https://your-api-url.com`

### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 📁 Files Added for Deployment

- `vercel.json` - Vercel configuration
- `src/utils/staticData.ts` - Static data for production
- Updated `src/utils/api.ts` - Environment-aware API calls

## 🎯 What Happens During Deployment

1. **Build Process**:
   - Installs dependencies (`npm install`)
   - Builds Next.js app (`npm run build`)
   - Optimizes images and assets
   - Creates static files

2. **Production Mode**:
   - Uses static data instead of JSON Server
   - Optimized for performance
   - CDN distribution worldwide

3. **Automatic Deployments**:
   - Every push to main branch triggers new deployment
   - Preview deployments for pull requests

## 🚨 Important Notes

- **No JSON Server needed** in production (uses static data)
- **Videos**: Make sure video files are under 10MB each
- **Environment**: Automatically detects Next.js and configures
- **Custom Domain**: Can be added in Vercel dashboard

## 🔍 Troubleshooting

### Build Fails?
- Check `package.json` scripts
- Ensure all dependencies are in `dependencies` (not `devDependencies`)
- Check for TypeScript errors

### Videos Not Loading?
- App now uses gradient background instead of video for better performance
- If you want to add videos later, ensure they're under 10MB
- Use optimized video formats (MP4) and consider hosting on CDN

### API Errors?
- App uses static data in production (no API needed)
- If you need API, deploy JSON Server separately

## 🎉 Success!

Your UFC Profile App will be live and accessible worldwide!
