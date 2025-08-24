# Rhythms Website Content Management Guide

This guide explains how to update content on the Rhythms website, including executive body member details, portfolio information, and gallery images.

## 📁 File Structure

The website uses a data-driven approach with TypeScript files containing all content:

```
shared/
├── executive-body.ts    # Executive Body member data
├── portfolios.ts        # Portfolio information and member details
└── gallery.ts          # Event folders and image galleries
```

## 👥 Executive Body Management

### File Location: `shared/executive-body.ts`

This file contains all executive body member information including photos, contact details, achievements, and social links.

### How to Update Executive Body Members

1. **Open the file**: `shared/executive-body.ts`
2. **Find the member to update** in the `executiveBodyData` array
3. **Update the desired fields**

### Executive Member Data Structure

```typescript
{
  id: 'unique-identifier',           // Unique ID (don't change existing ones)
  name: 'Full Name',                 // Member's full name
  role: 'Position Title',            // Official role/position
  portfolio: 'Portfolio Name',       // Which portfolio they lead
  description: 'Brief description',  // Short bio/description
  icon: 'IconName',                  // Icon identifier (see icon list below)
  image: 'https://image-url.jpg',    // Profile photo URL
  gradient: 'from-gold-400 to-gold-600', // Color gradient for styling
  email: 'email@rhythms-griet.com',  // Contact email (optional)
  achievements: [                    // List of achievements (optional)
    'Achievement 1',
    'Achievement 2'
  ],
  socialLinks: {                     // Social media links (optional)
    linkedin: 'https://linkedin.com/in/username',
    instagram: 'https://instagram.com/username',
    twitter: 'https://twitter.com/username'
  }
}
```

### Available Icons

Use these exact names for the `icon` field:
- `Crown` - For President
- `Users` - For Vice President, general leadership
- `TrendingUp` - For Publicity/Marketing roles
- `DollarSign` - For Treasury/Finance roles
- `Sparkles` - For Dance Lead
- `Music` - For Music Lead
- `Theater` - For Theatre Lead
- `Palette` - For Arts Lead
- `Code` - For Technical Lead

### Available Color Gradients

Choose from these gradient options for the `gradient` field:
- `from-gold-300 to-gold-600`
- `from-gold-400 to-gold-600`
- `from-gold-400 to-gold-700`
- `from-gold-400 to-gold-800`
- `from-gold-500 to-gold-700`
- `from-gold-500 to-gold-800`
- `from-gold-500 to-gold-900`
- `from-gold-600 to-gold-800`

### Example: Adding a New Executive Member

```typescript
{
  id: 'new-member-id',
  name: 'New Member Name',
  role: 'New Position',
  portfolio: 'Portfolio Name',
  description: 'Brief description of their role and contributions.',
  icon: 'Users',
  image: 'https://images.unsplash.com/photo-example?w=400&h=400&fit=crop&crop=face',
  gradient: 'from-gold-400 to-gold-600',
  email: 'newmember@rhythms-griet.com',
  achievements: [
    'Notable achievement 1',
    'Notable achievement 2'
  ],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/newmember',
    instagram: 'https://instagram.com/newmember'
  }
}
```

### Example: Updating an Existing Member

To update Sarah Wilson's email and add achievements:

```typescript
{
  id: 'treasury-lead',
  name: 'Sarah Wilson',
  role: 'Treasury Lead',
  portfolio: 'Finance & Operations',
  description: 'Managing resources and ensuring financial sustainability.',
  icon: 'DollarSign',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  gradient: 'from-gold-300 to-gold-600',
  email: 'sarah.wilson@rhythms-griet.com',  // ← Updated email
  achievements: [                           // ← Added achievements
    'Managed ₹5L+ annual budget',
    'Secured sponsorships worth ₹2L+',
    'Implemented transparent financial tracking'
  ]
}
```

## 🎭 Portfolio Management

### File Location: `shared/portfolios.ts`

This file contains detailed information about each portfolio including members, events, and achievements.

### How to Update Portfolio Information

1. **Open the file**: `shared/portfolios.ts`
2. **Find the portfolio to update** in the `portfoliosData` array
3. **Update the desired sections**

### Portfolio Data Structure

```typescript
{
  id: 'portfolio-id',                    // Unique identifier
  title: 'Portfolio Name',               // Display name
  subtitle: 'Team Name',                 // Team/group name
  description: 'Short description',      // Brief overview
  fullDescription: 'Detailed description', // Full description
  icon: 'IconName',                      // Icon identifier
  color: 'gradient-class',               // Color gradient
  heroImage: 'https://hero-image.jpg',   // Hero/banner image
  mission: 'Mission statement',          // Portfolio mission
  vision: 'Vision statement',            // Portfolio vision
  members: [...],                        // Array of team members
  recentEvents: [...],                   // Array of recent events
  achievements: [...],                   // Array of achievements
  upcomingEvents: [...]                  // Array of upcoming events
}
```

### Adding Portfolio Members

To add a new member to a portfolio, add to the `members` array:

```typescript
{
  name: 'Member Name',
  role: 'Their Role',
  image: 'https://profile-image.jpg',
  bio: 'Brief biography',
  achievements: ['Achievement 1', 'Achievement 2'] // Optional
}
```

### Adding Portfolio Events

To add a recent event, add to the `recentEvents` array:

```typescript
{
  name: 'Event Name',
  date: '2024-03-15',                    // YYYY-MM-DD format
  description: 'Event description',
  images: [                              // Array of image URLs
    'https://event-image-1.jpg',
    'https://event-image-2.jpg'
  ],
  type: 'performance'                    // performance, workshop, competition, collaboration
}
```

## 🖼️ Gallery Management

### File Location: `shared/gallery.ts`

This file contains all event folders and their associated images for the gallery.

### How to Add New Event Folders

1. **Open the file**: `shared/gallery.ts`
2. **Add a new event object** to the `galleryData` array

### Event Folder Structure

```typescript
{
  id: 'unique-event-id',                 // Unique identifier (use kebab-case)
  name: 'Event Display Name',            // Event name as shown to users
  date: '2024-03-15',                    // Event date (YYYY-MM-DD)
  description: 'Event description',      // Brief description
  type: 'festival',                      // Event type (see types below)
  coverImage: 'https://cover-image.jpg', // Main cover image
  featured: true,                        // Whether to feature prominently
  images: [...]                          // Array of gallery images
}
```

### Available Event Types

- `festival` - Major festivals and celebrations
- `cultural` - Cultural events and traditional celebrations  
- `performance` - Concerts, shows, and performances
- `orientation` - Welcome events and orientations
- `exhibition` - Art exhibitions and displays
- `concert` - Music concerts and recitals
- `workshop` - Educational workshops and training
- `competition` - Competitions and contests

### Gallery Image Structure

```typescript
{
  id: 'unique-image-id',                 // Unique image identifier
  url: 'https://image-url.jpg',          // Full-size image URL
  caption: 'Image description',          // Description/caption
  photographer: 'Photographer Name',     // Photo credit (optional)
  date: '2024-03-15'                     // Date taken
}
```

### Current Event: Swagatam Krishna'25

The gallery currently features the "Swagatam Krishna'25" event. To add photos:

1. **Upload images** to `public/assets/images/swagatam-krishna-25/`
2. **Name them**: `cover.jpg`, `img-001.jpg`, `img-002.jpg`, etc.
3. **Update the gallery data** in `shared/gallery.ts`

### Example: Adding More Images to Swagatam Krishna'25

```typescript
// Add to the existing images array in gallery.ts:
{
  id: 'sk25-009',
  url: '/assets/images/swagatam-krishna-25/img-009.jpg',
  caption: 'New photo description',
  photographer: 'Photographer Name',
  date: '2025-01-15'
}
```

### Example: Adding a Completely New Event Folder

```typescript
{
  id: 'holi-celebration-2025',
  name: 'Holi Celebration 2025',
  date: '2025-03-15',
  description: 'Vibrant Holi celebration with colors, music, and traditional festivities.',
  type: 'festival',
  coverImage: '/assets/images/holi-celebration-2025/cover.jpg',
  featured: true,
  images: [
    {
      id: 'holi25-001',
      url: '/assets/images/holi-celebration-2025/img-001.jpg',
      caption: 'Students celebrating with colors',
      photographer: 'Events Team',
      date: '2025-03-15'
    },
    {
      id: 'holi25-002',
      url: '/assets/images/holi-celebration-2025/img-002.jpg',
      caption: 'Traditional Holi music performance',
      photographer: 'Music Team',
      date: '2025-03-15'
    }
  ]
}
```

## 🖼️ Image Guidelines

### For Profile Photos
- **Aspect Ratio**: Square (1:1) preferred
- **Resolution**: Minimum 400x400px, recommended 800x800px
- **Format**: JPG or PNG
- **Quality**: High quality, well-lit, professional appearance

### For Event Photos  
- **Aspect Ratio**: 4:3 or 16:9 for landscape shots
- **Resolution**: Minimum 800x600px, recommended 1920x1080px
- **Format**: JPG preferred for photos
- **Quality**: High quality, good lighting, clear subjects

### Image Hosting Options

1. **GitHub Repository** (RECOMMENDED - for all website images):
   - Store in `public/assets/images/` folder structure
   - Reference as `/assets/images/folder-name/filename.jpg`
   - Free, reliable, and permanent hosting
   - See `GITHUB_IMAGE_UPLOAD_GUIDE.md` for detailed instructions

2. **Unsplash** (for stock/placeholder images only):
   - Free high-quality stock images for temporary use
   - Use format: `https://images.unsplash.com/photo-ID?w=WIDTH&h=HEIGHT&fit=crop`

3. **Google Drive** (alternative for large files):
   - Upload to shared drive
   - Get shareable link
   - Change sharing permissions to "Anyone with link can view"
   - Note: Less reliable than GitHub for web hosting

## 🔧 Testing Changes

After making changes to any data file:

1. **Save the file**
2. **Check the website** - changes should appear automatically
3. **Verify images load correctly**
4. **Test responsive design** on mobile devices
5. **Check all links work** (email, social media)

## 📝 Common Tasks

### Updating Member Photos

1. Get high-quality square photo (400x400px minimum)
2. Upload to image hosting service
3. Copy the direct image URL
4. Update the `image` field in the member's data
5. Test that image loads correctly

### Adding New Achievements

1. Find the member in `executive-body.ts`
2. Add to their `achievements` array:
   ```typescript
   achievements: [
     'Existing achievement',
     'New achievement here'  // ← Add new achievement
   ]
   ```

### Updating Contact Information

```typescript
{
  // ... other member data
  email: 'newemail@rhythms-griet.com',  // Update email
  socialLinks: {
    linkedin: 'https://linkedin.com/in/newhandle',
    instagram: 'https://instagram.com/newhandle'
  }
}
```

### Adding New Gallery Images

1. Upload images to hosting service
2. Add to the event's `images` array in `gallery.ts`:
   ```typescript
   images: [
     // ... existing images
     {
       id: 'new-image-id',
       url: 'https://new-image-url.jpg',
       caption: 'Description of photo',
       photographer: 'Photographer Name',
       date: '2024-03-15'
     }
   ]
   ```

## ⚠️ Important Notes

- **Always backup data** before making major changes
- **Use unique IDs** for all new entries to avoid conflicts
- **Test thoroughly** after making changes
- **Keep image URLs working** - broken links will show placeholder images
- **Follow naming conventions** - use kebab-case for IDs (e.g., 'new-event-2024')
- **Optimize images** for web use to ensure fast loading
- **Maintain professional quality** in all content and images

## 🆘 Troubleshooting

### Images Not Loading
- Check if URL is correct and accessible
- Verify image hosting service allows external linking
- Try a different image hosting service

### Content Not Updating
- Ensure file is saved properly
- Check for syntax errors in TypeScript
- Refresh browser cache (Ctrl+F5)

### Styling Issues
- Verify gradient class names are correct
- Check that icon names match available options
- Ensure proper TypeScript syntax

For technical issues beyond content updates, contact the Technical Lead.
