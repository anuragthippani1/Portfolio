# Quick Start Guide

Get your portfolio running in under 2 minutes!

## 🚀 Quick Commands

```bash
# Clone and setup
git clone https://github.com/anuragthippani1/Portfolio.git
cd Portfolio
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

## ✅ What's Included

Your portfolio has:

✨ **Modern Design**

- Dark/Light mode toggle
- Glassmorphism effects
- Animated gradients
- Smooth transitions with Framer Motion

📱 **Fully Responsive**

- Mobile-first design
- Works on all devices
- Optimized for performance

🎯 **Key Sections**

1. **Hero** - Eye-catching intro with gradient background
2. **About** - Professional bio with typing animation
3. **Projects** - 8 featured projects with tech stack badges
4. **Experience** - Professional work history
5. **Skills** - Tech stack with progress bars
6. **GitHub** - Live GitHub repository integration
7. **Contact** - Form with EmailJS support
8. **Footer** - Social links and quick navigation

## 🎨 Customization

### 1. Update Personal Info

**About Section** (`components/About.js`):

- Change profile text
- Update university info
- Modify quick facts

**Contact** (`components/Contact.js`):

- Update email: `anuragthippani@gmail.com`
- Add LinkedIn URL
- Add Twitter URL

**Footer** (`components/Footer.js`):

- Update social media links

### 2. Update Projects

Edit `data/projects.json`:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Project description...",
  "techStack": ["React", "Node.js"],
  "github": "https://github.com/...",
  "demo": "https://demo-link.com",
  "featured": true
}
```

### 3. Update GitHub Username

In `components/GitHub.js`, line 18:

```javascript
const username = "anuragthippani1"; // Change to your username
```

### 4. Configure EmailJS (Optional)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Get Service ID, Template ID, and Public Key
3. Update in `components/Contact.js` (lines 26-30)

### 5. Add Resume

Place your PDF resume at:

```
/public/resume.pdf
```

## 🎨 Color Customization

Edit `app/globals.css` to change theme colors:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Blue */
  /* Modify these values for different colors */
}
```

## 📦 Tech Stack

- **Framework:** Next.js 14
- **Styling:** TailwindCSS 3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **API:** Axios (GitHub)
- **Forms:** EmailJS

## 🚀 Deploy to Vercel

**One-click deployment:**

```bash
npm install -g vercel
vercel
```

Or visit [vercel.com](https://vercel.com) and import your GitHub repo.

See `DEPLOYMENT.md` for detailed instructions.

## 📊 Performance

Your portfolio includes:

- ✅ Static page generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ SEO optimized

## 🔧 Common Tasks

### Update a Project

1. Edit `data/projects.json`
2. Save and refresh

### Change Colors

1. Edit `tailwind.config.js` or `app/globals.css`
2. Restart dev server

### Add New Section

1. Create component in `/components`
2. Import in `app/page.js`
3. Add to navigation in `components/Navbar.js`

## 📝 Git Workflow

```bash
# Make changes
git add .
git commit -m "descriptive message"
git push origin main

# Vercel auto-deploys on push!
```

## 🐛 Troubleshooting

**Port already in use?**

```bash
npm run dev -- -p 3001
```

**Build fails?**

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**GitHub API not working?**

- Check username in `components/GitHub.js`
- Verify internet connection
- Check browser console for errors

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## 💡 Pro Tips

1. **Regular Updates:** Keep your projects list current
2. **SEO:** Update metadata in `app/layout.js`
3. **Analytics:** Add Google Analytics in `app/layout.js`
4. **Performance:** Use Next.js Image component for photos
5. **Testing:** Test on multiple devices before deployment

---

**Need help?** Check `README.md` or `DEPLOYMENT.md` for more details!


