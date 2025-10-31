# Deployment Guide

This guide will help you deploy your portfolio to Vercel.

## Quick Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**

   ```bash
   cd /Users/anuragthippani/Documents/programs/Portfolio
   vercel
   ```

3. **Follow the prompts:**

   - Set up and deploy? Yes
   - Which scope? (Your account)
   - Link to existing project? No
   - What's your project's name? portfolio (or your choice)
   - In which directory is your code located? ./
   - Want to override settings? No

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `Portfolio` repository
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)
6. Click "Deploy"

## Environment Variables (Optional)

If you want to use EmailJS for the contact form, add these environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Post-Deployment Checklist

- [ ] Test the live site on mobile and desktop
- [ ] Verify all sections are displaying correctly
- [ ] Test the contact form (if EmailJS is configured)
- [ ] Check GitHub API integration is working
- [ ] Test dark/light mode toggle
- [ ] Verify all animations are smooth
- [ ] Test navigation and smooth scrolling
- [ ] Update social media links in Footer and Contact sections
- [ ] Add your actual resume PDF to `/public/resume.pdf`
- [ ] Update LinkedIn and Twitter URLs in the code

## Updating Your Portfolio

Every time you push to the main branch, Vercel will automatically rebuild and deploy your site.

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

## Local Development

```bash
npm run dev
```

Visit http://localhost:3000

## Build for Production Locally

```bash
npm run build
npm start
```

## Troubleshooting

### Build Fails

- Check `package.json` doesn't have `"type": "commonjs"`
- Ensure all imports are correct
- Run `npm install` to ensure all dependencies are installed

### Contact Form Not Working

- Make sure EmailJS credentials are configured
- Check browser console for errors
- Verify EmailJS service is active

### GitHub API Not Loading

- Check if GitHub username is correct in `components/GitHub.js`
- Verify GitHub API rate limits haven't been exceeded
- Check browser console for network errors

## Performance Tips

Your portfolio is already optimized with:

- ✅ Next.js 14 automatic optimizations
- ✅ Static page generation
- ✅ Image optimization ready
- ✅ Code splitting
- ✅ Lazy loading

## Support

If you encounter any issues:

1. Check the Next.js documentation: https://nextjs.org/docs
2. Check Vercel documentation: https://vercel.com/docs
3. Review the README.md file



