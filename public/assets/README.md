# Assets Folder - GitHub Image Hosting

This folder contains all images for the Rhythms website hosted directly on GitHub.

## 📁 Folder Structure

```
assets/
├── images/
│   ├── swagatam-krishna-25/
│   │   ├── cover.jpg          # Main cover image for the event
│   │   ├── img-001.jpg        # Individual event photos
│   │   ├── img-002.jpg
│   │   └── ...
│   ├── future-event-name/     # Create new folders for each event
│   └── profile-photos/        # For executive body member photos
└── README.md                  # This file
```

## 🖼️ Image Guidelines

### For Event Photos
- **Naming**: Use `img-001.jpg`, `img-002.jpg`, etc. for sequential numbering
- **Cover Photo**: Always name the main event photo as `cover.jpg`
- **Format**: JPG preferred for photos, PNG for graphics with transparency
- **Size**: Optimize for web (recommended max 2MB per image)
- **Resolution**: 1920x1080px or 1600x1200px for best quality

### For Profile Photos
- **Naming**: Use `firstname-lastname.jpg` format
- **Aspect Ratio**: Square (1:1) preferred
- **Resolution**: 800x800px recommended

## 🔗 How Images Are Referenced

Images in this folder are accessed using relative paths from the website root:

```typescript
// In gallery.ts or other data files:
coverImage: '/assets/images/swagatam-krishna-25/cover.jpg'
url: '/assets/images/swagatam-krishna-25/img-001.jpg'

// For profile photos:
image: '/assets/images/profile-photos/john-doe.jpg'
```

## 📝 Adding New Images

1. Upload images to the appropriate folder
2. Update the corresponding data file (`shared/gallery.ts`, `shared/executive-body.ts`, etc.)
3. Use the correct path format starting with `/assets/images/`

## ⚠️ Important Notes

- Keep file names lowercase with hyphens for consistency
- Optimize images before uploading to reduce load times
- Test image paths after uploading to ensure they work correctly
- GitHub has a 100MB limit per file, so compress large images
