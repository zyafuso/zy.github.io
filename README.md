# Forest Haven Website

A beautiful, responsive website with earthy/forest tones and modern design, perfect for showcasing machine learning projects and sustainable technology.

## Features

- 🌲 **Earthy/Forest Color Scheme**: Beautiful natural tones including greens, browns, and earth colors
- 📱 **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- 🧭 **Navigation**: Clean navigation with active page highlighting
- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📄 **Multiple Pages**: Home, About, Projects, and Contact pages
- 🎯 **Call-to-Actions**: Strategic buttons to guide user engagement
- 📝 **Contact Form**: Functional contact form for user inquiries
- 🚀 **Performance Optimized**: Fast loading with optimized CSS and JavaScript

## Pages

### 1. Home Page (`index.html`)
- Hero section with compelling headline and call-to-action buttons
- Feature cards highlighting key services
- Engaging visual elements with forest-inspired design

### 2. About Page (`about.html`)
- Company story and mission
- Core values and approach
- Visual elements with nature-inspired graphics

### 3. Projects Page (`projects.html`)
- Showcase of machine learning projects
- Project cards with descriptions and tags
- Professional presentation of work portfolio

### 4. Contact Page (`contact.html`)
- Contact information and methods
- Functional contact form
- FAQ section for common questions

## Color Palette

The website uses a carefully selected earthy/forest color scheme:

- **Primary Greens**: `#2d5016`, `#4a7c59`, `#6b8e23`
- **Light Greens**: `#8fbc8f`, `#90ee90`, `#98fb98`
- **Accent Greens**: `#a8e6cf`, `#88d8a0`
- **Text Colors**: `#2c3e50`, `#6c757d`
- **Backgrounds**: `#f8f9fa`, `#e9ecef`

## Customization

### Changing Colors
Edit the CSS variables in `styles.css` to modify the color scheme:

```css
/* Example: Change primary green */
.navbar {
    background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
}
```

### Adding New Pages
1. Create a new HTML file following the existing structure
2. Copy the navigation from an existing page
3. Update the navigation links
4. Add your content using the existing CSS classes

### Modifying Content
- Update text content in the HTML files
- Replace placeholder images with your own
- Modify the contact form fields as needed
- Update project information and descriptions

## File Structure

```
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects page
├── contact.html        # Contact page
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Test navigation**: Click through all the navigation links
3. **Test responsiveness**: Resize your browser window or use browser dev tools
4. **Customize content**: Edit the HTML files to add your own content
5. **Deploy**: Upload all files to your web hosting service

## Customization Tips

### Adding Your Logo
Replace the text logo with an image:
```html
<div class="nav-logo">
    <img src="your-logo.png" alt="Your Company" class="logo-image">
</div>
```

### Changing the Theme
To create a different color theme, modify the CSS variables and gradients throughout `styles.css`.

### Adding More Projects
Duplicate the project card structure in `projects.html` and update the content.

### Form Functionality
The contact form is currently HTML-only. To make it functional, you'll need to add backend processing or integrate with a form service like Formspree or Netlify Forms.

## Support

This website is built with modern web standards and should work out of the box. If you need help with customization or have questions, feel free to modify the code to suit your needs.

## License

Feel free to use and modify this website for your personal or commercial projects.
