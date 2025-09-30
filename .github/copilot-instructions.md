# Nagarparkar Tourism Website - AI Coding Guide

## Project Overview
This is a static tourism website for Nagarparkar, a town in Tharparkar district, Sindh, Pakistan. The site showcases local attractions, culture, and travel information through a modern, responsive design.

## Architecture & Structure

### Core Components
- `Index.html`: Main landing page with key sections (hero, about, highlights, featured attractions, etc.)
- `templates/`: Contains all sub-pages organized by topic (temples, nature, mountains, etc.)
- `assets/`: Contains all static resources
  - `css/`: Stylesheets (styles.css for main styles, travel-info.css for specific layouts)
  - `js/`: JavaScript files (script.js for interactive features)
  - `img/`: Image assets used across the site

### Layout Patterns
- Every page follows a consistent structure:
  1. Header with logo and navigation
  2. Main content section(s)
  3. Standardized footer with site sections
- Responsive design breakpoints are defined in `styles.css`
- Mobile menu toggle functionality in header

## Key Conventions

### HTML Structure
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Section classes follow pattern: `{section-name}-section` (e.g., `highlights-section`)
- Card components use `{type}-card` pattern (e.g., `feature-card`, `info-card`)
- Interactive components (buttons, menus) use `{name}-btn` naming pattern
- Content wrappers use `{name}-content` for consistent spacing

### CSS Organization
- Global styles in `styles.css`
- Page-specific styles in separate CSS files (e.g., `travel-info.css`)
- Responsive designs use mobile-first approach
- Common breakpoint at 768px for mobile layouts
- Header uses backdrop-filter for blur effects
- Transitions use `transition: all 0.3s ease` for consistency
- Fixed header with z-index: 1000 for proper layering

### Asset Management
- Images use descriptive names and appropriate formats
  - `.webp` for modern, optimized images
  - `.jpeg`/`.jpg` for compatibility
- External dependencies:
  - Font Awesome 6.4.0 for icons
  - CDN-hosted resources

## Common Operations

### Adding a New Page
1. Create new HTML file in `templates/`
2. Copy standard header/footer structure
3. Update navigation links (relative to page location)
4. Add page-specific content sections
5. Link required CSS/JS files with correct relative paths

### Creating New Sections
1. Add semantic HTML structure
2. Follow established class naming patterns
3. Add responsive styles in appropriate CSS file
4. Include Font Awesome icons where needed

## JavaScript Patterns

### Interactive Features
- Header transforms on scroll (opacity and padding changes)
- FAQ accordion functionality with smooth height transitions
- Mobile menu toggle with hamburger animation
- Category filtering system (see FAQ implementation)

### Event Handling Best Practices
- Use event delegation for dynamic content
- Implement smooth transitions via classList
- Check element existence before attaching listeners
- Reuse common selectors (store in variables)

## File References
- Base template structure: `Index.html`
- Navigation pattern: See `header` and `topnav` in any template
- Section examples: `templates/culture.html`, `templates/nature.html`
- Standard footer: See any page's `footer` section
- Interactive features: See `assets/js/script.js`