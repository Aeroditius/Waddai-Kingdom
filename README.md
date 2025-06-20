# Waddai Kingdom Project

## Overview
This is a web-based project about the Waddai Kingdom, featuring historical information and multimedia content with full multilingual support.

## Project Structure
```
├── css/        # Stylesheet files
├── data/       # Data files and resources
├── images/     # Image assets
├── js/         # JavaScript files
├── videos/     # Video content
└── index.html  # Main entry point
```

## Getting Started
1. Clone this repository to your local machine
2. Open `index.html` in a modern web browser
3. No build process is required as this is a static website

## Features
- Historical information about the Waddai Kingdom
- Multimedia content including images and videos
- Interactive web interface
- Full multilingual support (Arabic, English, French)

## 📊 Content Management System - How content.js Works

### Overview
The `data/content.js` file serves as the **central content management system** for the entire website. It contains all text content, navigation labels, and multimedia references in a structured JavaScript object format.

### 🔄 How content.js Integrates with HTML

#### 1. **Loading Process**
```html
<!-- In index.html -->
<script src="data/content.js?v=1.1"></script>
<script src="js/script.js?v=1.1"></script>
```
- Content is loaded BEFORE the main script
- Creates a global `content` object available to all scripts
- Cache-busting parameter (`?v=1.1`) ensures fresh content

#### 2. **Dynamic Content Injection**
The HTML file contains **placeholder elements** that get populated by JavaScript:

```html
<!-- Static HTML Structure -->
<nav class="navbar">
    <ul class="navbar-nav">
        <!-- Navigation items populated by createNavigation() -->
    </ul>
</nav>

<main>
    <div id="content-sections">
        <!-- Sections created by createSections() -->
    </div>
</main>
```

#### 3. **Content Structure in content.js**
```javascript
const content = {
    ar: {                           // Language code
        siteName: "مملكة ودّاي",     // Site title
        navigation: {               // Navigation labels
            mission: "مهمتنا",
            vision: "رؤيتنا",
            // ... more nav items
        },
        sections: {                 // Page content
            mission: {
                title: '<i class="fas fa-bullseye"></i> مهمتنا',
                content: "الحفاظ على تراث وتاريخ..."
            },
            // ... more sections
        }
    },
    en: { /* English content */ },
    fr: { /* French content */ }
};
```

### 🛠️ How to Make Changes

#### **Adding New Content Section**

1. **Add to content.js** (all languages):
```javascript
// In data/content.js
sections: {
    // ... existing sections
    newSection: {
        title: '<i class="fas fa-star"></i> New Section Title',
        content: `
            <p>Your new content here...</p>
            <div class="custom-styling">
                <!-- HTML content allowed -->
            </div>
        `
    }
}
```

2. **Add to Navigation Groups** (in js/script.js):
```javascript
// In js/script.js - navigationGroups object
const navigationGroups = {
    // ... existing groups
    yourGroup: {
        label: { ar: 'المجموعة الجديدة', en: 'New Group', fr: 'Nouveau Groupe' },
        items: ['newSection'],  // References content.js key
        icon: 'fas fa-star'
    }
}
```

#### **Modifying Existing Content**

1. **Text Changes**: Edit directly in `data/content.js`
```javascript
// Before
mission: {
    title: '<i class="fas fa-bullseye"></i> مهمتنا',
    content: "الحفاظ على تراث وتاريخ..."
}

// After
mission: {
    title: '<i class="fas fa-bullseye"></i> مهمتنا المحدثة',
    content: "الحفاظ على تراث وتاريخ ونشر ثقافة..."
}
```

2. **Adding New Language**:
```javascript
const content = {
    ar: { /* Arabic content */ },
    en: { /* English content */ },
    fr: { /* French content */ },
    es: {  // New Spanish language
        siteName: "Reino de Wadai",
        navigation: {
            mission: "Nuestra Misión",
            // ... translate all navigation items
        },
        sections: {
            mission: {
                title: '<i class="fas fa-bullseye"></i> Nuestra Misión',
                content: "Preservar el patrimonio..."
            }
            // ... translate all sections
        }
    }
}
```

#### **Adding Images/Media**

1. **Store files** in appropriate directories:
   - Images: `images/your-image.jpg`
   - Videos: `videos/your-video.mp4`

2. **Reference in content.js**:
```javascript
content: `
    <div class="image-container">
        <img src="images/your-image.jpg" alt="Description" class="img-fluid">
    </div>
    <p>Your content with the image...</p>
`
```

### 🔧 Technical Implementation Details

#### **Key Functions in script.js**

1. **`createSections()`**
   - Reads all section keys from content.js
   - Creates HTML `<section>` elements
   - Sets up data attributes for content injection

2. **`createNavigation()`**
   - Uses `navigationGroups` configuration
   - Creates dropdown menus and nav links
   - Maps navigation items to content sections

3. **`updateContent()`**
   - Called when language changes
   - Updates all text content dynamically
   - Preserves user interaction state

4. **`switchLanguage(lang)`**
   - Changes global `currentLanguage`
   - Triggers content update
   - Updates all UI elements

### 📋 Best Practices for Team Members

#### **DO:**
- ✅ Always add content in ALL supported languages
- ✅ Use semantic HTML in content strings
- ✅ Test language switching after changes
- ✅ Follow existing naming conventions
- ✅ Include appropriate Font Awesome icons

#### **DON'T:**
- ❌ Hard-code text directly in HTML files
- ❌ Break the JSON structure in content.js
- ❌ Forget to add navigation entries for new sections
- ❌ Use inline styles in content (use CSS classes)
- ❌ Add sections without proper language support

### 🚀 Quick Content Update Workflow

1. **Edit content.js** → Add/modify content
2. **Update navigation** (if needed) → Edit navigationGroups in script.js
3. **Add CSS styling** (if needed) → Update styles.css
4. **Test in browser** → Check all languages work
5. **Verify responsiveness** → Test on different screen sizes

### 📁 File Dependencies
```
content.js (data source)
    ↓
script.js (content processor)
    ↓
index.html (content display)
    ↓
styles.css (content styling)
```

## Contributing
1. Fork the repository
2. Create a new branch for your feature
3. Follow the content management guidelines above
4. Submit a pull request with a clear description of your changes

## File Organization
- `index.html`: Main entry point and primary HTML structure
- `css/`: Contains all styling files
- `js/`: Contains JavaScript functionality
- `images/`: All image assets used throughout the site
- `videos/`: Video content and multimedia resources
- `data/`: Additional data files and resources

This architecture ensures **separation of concerns** and makes the website easily maintainable by team members with different skill levels.



