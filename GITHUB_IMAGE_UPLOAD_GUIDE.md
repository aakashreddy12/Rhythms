# 📸 GitHub Image Upload Guide for Rhythms Website

This guide shows you how to easily upload multiple images to GitHub for hosting on the Rhythms website.

## 🎯 Quick Overview

Your images will be stored in the GitHub repository and automatically served by the website. Once uploaded, images are accessible via URLs like:
- `/assets/images/swagatam-krishna-25/img-001.jpg`
- `/assets/images/profile-photos/john-doe.jpg`

## 📁 Folder Structure

```
public/assets/images/
├── swagatam-krishna-25/     # Your current event folder
├── profile-photos/          # Executive body member photos
└── [future-event-folders]/  # Create new folders for each event
```

## 🚀 Method 1: GitHub Web Interface (Easiest for Multiple Files)

### Step 1: Navigate to the Assets Folder
1. Go to your GitHub repository
2. Click on `public` → `assets` → `images` → `swagatam-krishna-25`

### Step 2: Upload Multiple Images
1. Click the **"Add file"** button
2. Select **"Upload files"**
3. **Drag and drop** multiple images at once OR click **"choose your files"** and select multiple images
4. GitHub will upload all selected images simultaneously

### Step 3: Commit the Changes
1. Scroll down to the **"Commit changes"** section
2. Add a commit message like: `Add Swagatam Krishna'25 event photos`
3. Optionally add a description: `Uploaded [number] photos from the event`
4. Click **"Commit changes"**

## 🖥️ Method 2: GitHub Desktop (Best for Large Batches)

### Step 1: Clone Repository
1. Install [GitHub Desktop](https://desktop.github.com/)
2. Clone your repository to your computer
3. Open the local folder

### Step 2: Add Images Locally
1. Navigate to `public/assets/images/swagatam-krishna-25/`
2. **Copy and paste** or **drag and drop** all your images into this folder
3. Rename images following the naming convention (see below)

### Step 3: Commit and Push
1. Open GitHub Desktop
2. You'll see all the new images listed as changes
3. Add a commit summary: `Add Swagatam Krishna'25 photos`
4. Click **"Commit to main"**
5. Click **"Push origin"** to upload to GitHub

## 📱 Method 3: Direct Folder Upload

### For Bulk Uploads:
1. Prepare all your images in a local folder with correct names
2. Go to GitHub web interface
3. Navigate to `public/assets/images/`
4. Drag the **entire folder** into the GitHub interface
5. GitHub will recreate the folder structure and upload all images

## 📸 Image Naming Convention

### For Event Photos:
- **Cover Image**: `cover.jpg` (main event photo)
- **Sequential Photos**: `img-001.jpg`, `img-002.jpg`, `img-003.jpg`, etc.
- **Descriptive Names**: You can also use descriptive names like `dance-performance.jpg`, `stage-decoration.jpg`

### For Profile Photos:
- **Format**: `firstname-lastname.jpg`
- **Examples**: `john-doe.jpg`, `sarah-wilson.jpg`, `alex-chen.jpg`

### General Rules:
- Use **lowercase** letters only
- Replace spaces with **hyphens** (-)
- Use `.jpg` for photos, `.png` for graphics with transparency
- Keep names **short and descriptive**

## 🎨 Image Optimization Tips

Before uploading, consider optimizing your images:

### Recommended Sizes:
- **Event Photos**: 1920x1080px or 1600x1200px
- **Profile Photos**: 800x800px (square)
- **Cover Images**: 1600x900px (landscape)

### File Size:
- **Target**: Under 1MB per image for faster loading
- **Maximum**: 2MB per image (GitHub limit is 100MB per file)

### Tools for Optimization:
- **Online**: TinyPNG, Squoosh, Optimizilla
- **Desktop**: IrfanView, GIMP, Photoshop
- **Mobile**: Photo compression apps

## 🔄 Updating Gallery Data After Upload

After uploading images, update the gallery data file:

### File: `shared/gallery.ts`

```typescript
// Add more images to the existing event:
{
  id: 'sk25-009',
  url: '/assets/images/swagatam-krishna-25/img-009.jpg',
  caption: 'Description of the photo',
  photographer: 'Photographer Name',
  date: '2025-01-15'
}
```

### For New Events:
Create a new event object with all your uploaded images:

```typescript
{
  id: 'new-event-2025',
  name: 'New Event Name',
  date: '2025-02-15',
  description: 'Event description',
  type: 'festival',
  coverImage: '/assets/images/new-event-2025/cover.jpg',
  featured: true,
  images: [
    {
      id: 'ne25-001',
      url: '/assets/images/new-event-2025/img-001.jpg',
      caption: 'Photo description',
      photographer: 'Photographer Name',
      date: '2025-02-15'
    }
    // Add more images...
  ]
}
```

## 🚀 Quick Upload Workflow for Swagatam Krishna'25

### Step-by-Step Process:

1. **Prepare Images**:
   - Select your best 10-20 photos from the event
   - Choose one as the main cover image
   - Optimize/resize if needed

2. **Name Images**:
   - Cover photo: `cover.jpg`
   - Other photos: `img-001.jpg`, `img-002.jpg`, etc.

3. **Upload to GitHub**:
   - Go to `public/assets/images/swagatam-krishna-25/`
   - Drag and drop all images
   - Commit with message: "Add Swagatam Krishna'25 event photos"

4. **Update Gallery Data**:
   - Edit `shared/gallery.ts`
   - Update the image paths to match your uploaded files
   - Add proper captions and photographer credits

5. **Test**:
   - Check the gallery page to ensure images load correctly
   - Verify the lightbox functionality works

## 🔧 Troubleshooting

### Images Not Showing:
- Check file paths match exactly (including case sensitivity)
- Ensure images are in the correct folder
- Verify file names don't have spaces or special characters

### Upload Fails:
- Check file sizes (must be under 100MB each)
- Ensure you have write permissions to the repository
- Try uploading fewer images at once

### Slow Loading:
- Optimize images to reduce file sizes
- Use JPG format for photos instead of PNG
- Consider using image compression tools

## 📞 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Contact the Technical Lead
3. Refer to the main `CONTENT_MANAGEMENT.md` guide
4. Check GitHub's official documentation for file uploads

## 🎉 Pro Tips

- **Batch Processing**: Use tools like IrfanView or XnConvert to resize/rename multiple images at once
- **Consistent Quality**: Try to maintain similar lighting and quality across event photos
- **Backup**: Keep original high-resolution images in a separate backup location
- **Organization**: Create a new folder for each major event to keep things organized
- **Testing**: Always test image uploads on a smaller batch first before uploading large quantities

Remember: Once images are uploaded to GitHub, they become part of your website's permanent assets and will load automatically for all visitors!
