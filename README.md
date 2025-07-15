# Rhythms Cultural Club Website - Local Image Management

## 📸 **How to Update Website Images Using Local Files**

This guide explains how to add and update all website images using files from your computer. All images are stored locally in the `public/images/` folder.

---

## 📁 **Step 1: Understanding the Folder Structure**

Your project has an images folder at: **`public/images/`**

```
public/images/
├── executives/           # Executive body member photos
├── gallery/
│   ├── covers/          # Event cover images
│   └── events/          # Event photo collections
└── logos/               # Logo files
```

---

## 👥 **Step 2: Adding Executive Member Photos**

### **Where to put the files:**

Place executive photos in: `public/images/executives/`

### **Required file names:**

- `dr-sarah-johnson.jpg` - Dr. Sarah Johnson (Club Coordinator)
- `arjun-sharma.jpg` - Arjun Sharma (President)
- `priya-reddy.jpg` - Priya Reddy (Vice-President)
- `karan-singh.jpg` - Karan Singh (Event Management Lead)
- `meera-patel.jpg` - Meera Patel (Dance Lead)
- `rohan-das.jpg` - Rohan Das (Music Lead)
- `ananya-kumar.jpg` - Ananya Kumar (Theatre Lead)
- `vikash-gupta.jpg` - Vikash Gupta (Publicity Lead)
- `sneha-joshi.jpg` - Sneha Joshi (Treasury/Arts Lead)
- `rahul-nair.jpg` - Rahul Nair (Technical Lead)

### **How to add:**

1. **Copy your photos** to `public/images/executives/` folder
2. **Rename them** to match the exact names above
3. **Save and refresh** your website - photos will appear automatically!

**Example:**

```
public/images/executives/
├── dr-sarah-johnson.jpg    ← Your photo of Dr. Sarah Johnson
├── arjun-sharma.jpg        ← Your photo of Arjun Sharma
├── meera-patel.jpg         ← Your photo of Meera Patel
└── ... (all other members)
```

---

## 🎭 **Step 3: Adding Event Gallery Images**

### **Event Cover Images:**

Place cover photos in: `public/images/gallery/covers/`

**Required file names:**

- `cultural-fest-2024.jpg` - Cultural Fest 2024 cover
- `inter-college-comp.jpg` - Inter-College Competition cover
- `rhythms-showcase.jpg` - Rhythms Showcase cover
- `dance-workshop.jpg` - Dance Workshop cover
- `music-night.jpg` - Music Night cover
- `theatre-festival.jpg` - Theatre Festival cover

### **Event Photo Collections:**

Create folders for each event in: `public/images/gallery/events/`

**Folder structure:**

```
public/images/gallery/events/
├── cultural-fest-2024/
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   ├── photo-3.jpg
│   └── ... (up to photo-12.jpg)
├── inter-college-comp/
│   ├── photo-1.jpg
│   └── ... (up to photo-8.jpg)
├── rhythms-showcase/
│   ├── photo-1.jpg
│   └── ... (up to photo-15.jpg)
├── dance-workshop/
│   ├── photo-1.jpg
│   └── ... (up to photo-6.jpg)
├── music-night/
│   ├── photo-1.jpg
│   └── ... (up to photo-10.jpg)
└── theatre-festival/
    ├── photo-1.jpg
    └── ... (up to photo-9.jpg)
```

### **How to add event photos:**

1. **Create event folder** (if it doesn't exist)
2. **Copy your event photos** into the folder
3. **Rename them** as `photo-1.jpg`, `photo-2.jpg`, etc.
4. **Save and refresh** - photos appear in the gallery!

---

## 🏆 **Step 4: Adding Logo**

### **Where to put logo:**

Place your logo in: `public/images/logos/`

### **Required file name:**

- `rhythms-logo.png` (PNG with transparent background preferred)

### **How to add:**

1. **Copy your logo file** to `public/images/logos/`
2. **Rename it** to `rhythms-logo.png`
3. **Save and refresh** - logo appears in navbar and hero background!

---

## ➕ **Step 5: Adding New Events**

### **To add a completely new event:**

1. **Add cover image:**

   - Put cover image in `public/images/gallery/covers/`
   - Name it: `your-event-name.jpg`

2. **Create event folder:**

   - Create folder: `public/images/gallery/events/your-event-name/`
   - Add photos named: `photo-1.jpg`, `photo-2.jpg`, etc.

3. **Update the code:**
   - Open `client/lib/imageManager.ts`
   - Find `LOCAL_IMAGES.eventCovers` array
   - Add your cover: `"/images/gallery/covers/your-event-name.jpg"`
   - Find `EVENT_GALLERIES` object
   - Add your event photos array:

```typescript
"your-event-name": [
  "/images/gallery/events/your-event-name/photo-1.jpg",
  "/images/gallery/events/your-event-name/photo-2.jpg",
  "/images/gallery/events/your-event-name/photo-3.jpg",
  // ... add all your photos
],
```

4. **Add to defaultEventFolders:**
   - Add your event object to the `defaultEventFolders` array
   - Copy an existing event and modify the details

---

## 📋 **Image Requirements**

### **File Formats:**

- **Preferred:** JPG, PNG, WebP
- **Logo:** PNG with transparent background

### **Image Sizes:**

- **Executive photos:** 400x400px minimum (square)
- **Event covers:** 800x600px minimum (4:3 ratio)
- **Gallery photos:** 600x600px minimum
- **Logo:** 800x800px minimum

### **File Naming:**

- **Use lowercase with hyphens:** `john-doe.jpg` ✅
- **No spaces or special characters:** `John Doe.jpg` ❌
- **Sequential numbering for events:** `photo-1.jpg`, `photo-2.jpg`

---

## 🔧 **Quick Update Process**

### **For Executive Photos:**

1. Copy photos → `public/images/executives/`
2. Rename with correct names
3. Refresh website ✅

### **For Event Photos:**

1. Copy cover → `public/images/gallery/covers/`
2. Copy event photos → `public/images/gallery/events/[event-folder]/`
3. Rename as `photo-1.jpg`, `photo-2.jpg`, etc.
4. Refresh website ✅

### **For Logo:**

1. Copy logo → `public/images/logos/rhythms-logo.png`
2. Refresh website ✅

---

## 🚨 **Troubleshooting**

### **Images not showing:**

1. **Check file names** - they must match exactly
2. **Check file path** - make sure files are in correct folders
3. **Check file format** - use JPG, PNG, or WebP
4. **Clear browser cache** - Press Ctrl+F5 to hard refresh

### **Common mistakes:**

- **Wrong file names:** `Arjun Sharma.jpg` should be `arjun-sharma.jpg`
- **Wrong location:** Files must be in `public/images/` not `src/images/`
- **Missing files:** All referenced images must exist

### **Testing your images:**

1. Put one test image in `public/images/executives/arjun-sharma.jpg`
2. Refresh website and check if it appears
3. If it works, add the rest following the same pattern

---

## 💡 **Pro Tips**

1. **Batch rename:** Use file manager batch rename for multiple files
2. **Consistent quality:** Keep all photos similar resolution and quality
3. **Backup:** Keep original photos in a separate backup folder
4. **Test incrementally:** Add a few images at a time to identify issues
5. **Image optimization:** Compress large images to improve loading speed

---

## 📂 **Complete File Structure Example**

```
public/images/
├── executives/
│   ├── dr-sarah-johnson.jpg     ✅
│   ├── arjun-sharma.jpg         ✅
│   ├── priya-reddy.jpg          ✅
│   └── ... (all 10 members)
├── gallery/
│   ├── covers/
│   │   ├── cultural-fest-2024.jpg    ✅
│   │   ├── inter-college-comp.jpg    ✅
│   │   └── ... (6 covers total)
│   └── events/
│       ├── cultural-fest-2024/
│       │   ├── photo-1.jpg           ✅
│       │   ├── photo-2.jpg           ✅
│       │   └── ... (up to photo-12.jpg)
│       └── ... (all event folders)
└── logos/
    └── rhythms-logo.png              ✅
```

---

## ✅ **Verification Checklist**

After adding images, verify:

- [ ] Executive photos appear on Executive Body page
- [ ] Same photos appear on individual Portfolio pages
- [ ] Event covers appear on Gallery page
- [ ] Event photos appear when clicking on event folders
- [ ] Logo appears in navbar (top-left)
- [ ] Logo appears as hero background (blurred)
- [ ] All images load without broken image icons
- [ ] Website performance is still good

---

**🎉 That's it! Your local images are now integrated into the website!**

**Need help?** Check that all file names match exactly and files are in the correct folders as shown above.
