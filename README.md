# Kernow Hub Landing Page

A modern, responsive landing page for Kernow Hub - a co-working space in Helston, Cornwall.

## Features

- **Modern Design**: Clean, professional layout with Kernow branding
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Contact Form**: Integrated with Formspree for easy email collection
- **Smooth Animations**: Scroll animations and hover effects for better UX
- **SEO Optimized**: Proper meta tags and semantic HTML

## Branding

- **Font**: Poppins (Google Fonts)
- **Primary Color**: Yellow (#fdde13)
- **Secondary Color**: Grey (#4b4b4b)

## Setup Instructions

### 1. Formspree Configuration

To enable the contact form, you need to set up Formspree:

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (it will look like: `xyzabc123`)
5. Open `index.html` and find this line (around line 118):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```
6. Replace `YOUR_FORM_ID` with your actual Formspree form ID

### 2. Deployment

#### Coolify Deployment (Recommended)

This project is ready to deploy on Coolify using Docker:

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **In Coolify Dashboard**
   - Create a new application
   - Select "Docker" as the build pack
   - Connect your Git repository
   - Coolify will automatically detect the `Dockerfile`
   - Set the port to `80`
   - Deploy!

3. **Local Testing with Docker**
   ```bash
   # Build the image
   docker build -t kernow-hub .
   
   # Run the container
   docker run -d -p 8080:80 kernow-hub
   
   # Visit http://localhost:8080
   ```

#### Alternative Deployment Options

**Option A: GitHub Pages (Free)**
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select your branch and save

**Option B: Netlify (Free)**
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly

**Option C: Traditional Web Hosting**
1. Upload all files to your web server via FTP
2. Ensure `index.html` is in the root directory

## Files Structure

```
kernow-hub-landing/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript for interactions
├── Kernow.png          # Logo image
├── Dockerfile          # Docker configuration for deployment
├── docker-compose.yml  # Docker Compose configuration
├── nginx.conf          # Nginx web server configuration
├── .dockerignore       # Files to exclude from Docker build
└── README.md           # This file
```

## Form Fields

The contact form collects:
- **Name** (required)
- **Email** (required)
- **Phone Number** (required)
- **Marketing Consent** (required checkbox)

All submissions will be sent to the email address configured in your Formspree account.

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --yellow: #fdde13;
    --grey: #4b4b4b;
    --dark-grey: #2a2a2a;
}
```

### Updating Content
All content can be edited directly in `index.html`. The structure is clearly organized with HTML comments.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact

For questions about Kernow Hub, visit the website or contact Kernow Accountancy.

---

**Opening January 2026** | Water Ma Trout, Helston, Cornwall
