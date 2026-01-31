# Cloudflare Pages Deployment Guide

Complete step-by-step instructions for deploying the Dentsis landing page to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works fine)
- Git repository (GitHub, GitLab, or Bitbucket)
- Project built and tested locally

## Deployment Methods

### Method 1: Direct Upload (Quick Start)

Perfect for testing or if you don't have a Git repository yet.

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Login to Cloudflare Dashboard:**
   - Go to https://dash.cloudflare.com
   - Navigate to "Workers & Pages" from the sidebar

3. **Create a new Pages project:**
   - Click "Create application" → "Pages" → "Upload assets"
   - Give your project a name (e.g., `dentsis-landing`)

4. **Upload the build:**
   - Drag and drop the entire `dist/` folder
   - Or use the file picker to select the `dist/` folder

5. **Deploy:**
   - Click "Deploy site"
   - Wait for deployment to complete (usually < 1 minute)
   - Your site will be available at `https://<project-name>.pages.dev`

### Method 2: Git Integration (Recommended for Production)

Automatically deploy on every push to your repository.

#### Step 1: Push Code to Git

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

#### Step 2: Connect Cloudflare Pages to Git

1. **Login to Cloudflare Dashboard:**
   - Go to https://dash.cloudflare.com
   - Navigate to "Workers & Pages"

2. **Create a new Pages project:**
   - Click "Create application" → "Pages" → "Connect to Git"
   - Authorize Cloudflare to access your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure build settings:**
   ```
   Project name: dentsis-landing
   Production branch: main
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Environment variables:** (optional)
   - None required for this project

5. **Save and Deploy:**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site
   - First build typically takes 1-3 minutes

#### Step 3: Verify Deployment

1. Once deployed, Cloudflare will provide a URL: `https://<project-name>.pages.dev`
2. Visit the URL to verify everything works
3. Test language toggle (TH/EN)
4. Test navigation and form submission
5. Check mobile responsiveness

## Custom Domain Setup

### Adding Your Own Domain

1. **In Cloudflare Pages project:**
   - Go to your project → "Custom domains" tab
   - Click "Set up a custom domain"

2. **Add your domain:**
   - Enter your domain (e.g., `dentsis.com` or `www.dentsis.com`)
   - Click "Continue"

3. **Configure DNS:**
   - If your domain is already on Cloudflare:
     - DNS records will be added automatically
   - If your domain is elsewhere:
     - Add a CNAME record pointing to `<project-name>.pages.dev`
     - Or update your nameservers to Cloudflare's

4. **Wait for SSL:**
   - Cloudflare automatically provisions SSL certificates
   - Usually takes 5-15 minutes
   - Your site will be available at `https://your-domain.com`

## Automatic Deployments

With Git integration, Cloudflare Pages automatically:

- ✅ Deploys on every push to `main` branch (production)
- ✅ Creates preview deployments for pull requests
- ✅ Provides unique URLs for each deployment
- ✅ Supports branch-based deployments

### Preview Deployments

- Every PR gets its own preview URL: `https://<commit-hash>.<project>.pages.dev`
- Perfect for testing before merging
- Automatically cleaned up after PR is merged

## Build Configuration

The project includes a `_redirects` file in `public/` directory:

```
/* /index.html 200
```

This ensures:
- SPA routing works correctly
- All routes serve `index.html`
- React Router (if added later) functions properly
- No 404 errors on direct URL access

## Troubleshooting

### Build Fails

**Issue:** Build command fails on Cloudflare
**Solution:**
1. Check Node.js version in build settings (use Node 18+)
2. Verify `package.json` dependencies are correct
3. Try building locally first: `npm run build`
4. Check build logs in Cloudflare dashboard

### 404 Errors on Routes

**Issue:** Direct URL access returns 404
**Solution:**
- Ensure `public/_redirects` file exists
- Content should be: `/* /index.html 200`
- Redeploy if file was missing

### CSS Not Loading

**Issue:** Styles not applied after deployment
**Solution:**
1. Clear browser cache
2. Check build output includes CSS files
3. Verify Tailwind config is correct
4. Ensure `postcss.config.js` exists

### Language Toggle Not Working

**Issue:** Language switch doesn't work
**Solution:**
- Check browser console for errors
- Verify `translations.ts` is included in build
- Clear cache and hard reload

## Performance

Cloudflare Pages provides:
- 🚀 Global CDN (300+ cities)
- ⚡ HTTP/3 and Brotli compression
- 🔒 Automatic SSL/TLS
- 📊 Web Analytics (enable in dashboard)
- 🛡️ DDoS protection

## Monitoring

1. **Analytics:**
   - Enable Web Analytics in Cloudflare dashboard
   - Track page views, visitor metrics, and performance

2. **Logs:**
   - View deployment logs in "Deployments" tab
   - Check build logs for errors or warnings

3. **Deployments:**
   - See all deployments history
   - Rollback to previous versions if needed

## Cost

- **Free Tier:**
  - Unlimited sites
  - Unlimited requests
  - Unlimited bandwidth
  - 500 builds per month
  - 1 build at a time

- **Pro Tier ($20/month):**
  - 5,000 builds per month
  - 5 concurrent builds
  - Advanced build features

For this landing page, the **free tier is sufficient**.

## Security

- SSL/TLS certificates automatically provisioned
- DDoS protection included
- No server-side code = reduced attack surface
- Form submissions are client-side only (replace with API in production)

## Next Steps

1. ✅ Deploy to Cloudflare Pages
2. ⬜ Set up custom domain
3. ⬜ Enable Web Analytics
4. ⬜ Configure contact form backend (if needed)
5. ⬜ Add Google Analytics (optional)
6. ⬜ Set up email notifications for deployments

## Support

- Cloudflare Docs: https://developers.cloudflare.com/pages
- Cloudflare Community: https://community.cloudflare.com
- Project Issues: Create an issue in your Git repository

---

**Ready to deploy?** Start with Method 1 (Direct Upload) for quick testing, then switch to Method 2 (Git Integration) for production! 🚀
