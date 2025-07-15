# How to Change Executive Body Names, Event Names & Manage Images

## 🔄 **Complete Guide for Name Changes**

When you want to change executive body member names, event names, or add new people/events, you need to update both the code and the image files. Here's the complete process:

---

## 👥 **Changing Executive Body Member Names**

### **Step 1: Update Member Information**

**File to edit:** `client/pages/Executive.tsx` (around line 12)

**Current structure:**

```typescript
const executiveMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Club Coordinator",
    placeholder: "SJ",
    department: "Faculty Coordinator",
    description: "Leading Rhythms towards excellence in cultural activities",
  },
  {
    name: "Arjun Sharma",
    role: "President",
    placeholder: "AS",
    department: "CSE - Final Year",
    description: "Visionary leader driving the club's strategic initiatives",
  },
  // ... more members
];
```

**To change a name:**

```typescript
{
  name: "Your New Name Here", // ← Change this
  role: "President",
  placeholder: "YN", // ← Update initials
  department: "CSE - Final Year",
  description: "Updated description if needed",
},
```

### **Step 2: Update Portfolio Lead Information**

**File to edit:** `client/lib/portfolioData.ts` (around line 20)

**Find the portfolioLeads object:**

```typescript
export const portfolioLeads: Record<string, PortfolioLead> = {
  dance: {
    name: "Meera Patel", // ← Change to new dance lead name
    role: "Dance Lead",
    placeholder: "MP", // ← Update initials
    department: "EEE - Pre-Final Year",
    description:
      "Leading Team Invincibles with grace and choreographic excellence",
    // ... other fields
  },
  music: {
    name: "Rohan Das", // ← Change to new music lead name
    // ... etc
  },
  // ... other portfolio leads
};
```

### **Step 3: Update Image File Mapping**

**File to edit:** `client/lib/imageManager.ts` (around line 25)

**Find the executives object:**

```typescript
executives: {
  "Dr. Sarah Johnson": "/images/executives/dr-sarah-johnson.jpg", // ← Change key AND filename
  "Arjun Sharma": "/images/executives/arjun-sharma.jpg", // ← Change key AND filename
  "Meera Patel": "/images/executives/meera-patel.jpg", // ← Change key AND filename
  // ... etc
},
```

**Update to new names:**

```typescript
executives: {
  "Your New Coordinator Name": "/images/executives/your-new-coordinator-name.jpg",
  "Your New President Name": "/images/executives/your-new-president-name.jpg",
  "Your New Dance Lead Name": "/images/executives/your-new-dance-lead-name.jpg",
  // ... etc
},
```

### **Step 4: Rename Image Files**

**In the folder:** `public/images/executives/`

**Rename your image files to match the new paths:**

- `dr-sarah-johnson.jpg` → `your-new-coordinator-name.jpg`
- `arjun-sharma.jpg` → `your-new-president-name.jpg`
- `meera-patel.jpg` → `your-new-dance-lead-name.jpg`
- etc.

**File naming rules:**

- Lowercase only
- Replace spaces with hyphens
- No special characters
- Example: "John Smith" → `john-smith.jpg`

---

## 🎭 **Changing Event Names**

### **Step 1: Update Event Information**

**File to edit:** `client/lib/imageManager.ts` (around line 100)

**Find the defaultEventFolders array:**

```typescript
export const defaultEventFolders: EventFolder[] = [
  {
    id: "cultural-fest-2024", // ← This becomes the folder name
    name: "Cultural Fest 2024", // ← This is the display name
    date: "March 15, 2024",
    description: "Annual cultural celebration with all portfolios",
    coverImage: LOCAL_IMAGES.eventCovers[0],
    images: EVENT_GALLERIES["cultural-fest-2024"].map(...)
  },
  // ... more events
];
```

**To change an event:**

```typescript
{
  id: "your-new-event-2024", // ← Change this (becomes folder name)
  name: "Your New Event 2024", // ← Change this (display name)
  date: "Your Date",
  description: "Your description",
  coverImage: LOCAL_IMAGES.eventCovers[0], // ← Make sure cover exists
  images: EVENT_GALLERIES["your-new-event-2024"].map(...) // ← Must match id
}
```

### **Step 2: Update Event Cover Images**

**File to edit:** `client/lib/imageManager.ts` (around line 40)

**Find the eventCovers array:**

```typescript
eventCovers: [
  "/images/gallery/covers/cultural-fest-2024.jpg", // ← Change filename
  "/images/gallery/covers/inter-college-comp.jpg",
  // ... etc
],
```

**Update to new names:**

```typescript
eventCovers: [
  "/images/gallery/covers/your-new-event-2024.jpg", // ← New filename
  "/images/gallery/covers/your-other-event.jpg",
  // ... etc
],
```

### **Step 3: Update Event Gallery Collections**

**File to edit:** `client/lib/imageManager.ts` (around line 50)

**Find the EVENT_GALLERIES object:**

```typescript
const EVENT_GALLERIES = {
  "cultural-fest-2024": [
    // ← Change this key
    "/images/gallery/events/cultural-fest-2024/photo-1.jpg", // ← Change folder name
    "/images/gallery/events/cultural-fest-2024/photo-2.jpg",
    // ... etc
  ],
  // ... other events
};
```

**Update to new event names:**

```typescript
const EVENT_GALLERIES = {
  "your-new-event-2024": [
    // ← New key (must match event id)
    "/images/gallery/events/your-new-event-2024/photo-1.jpg", // ← New folder name
    "/images/gallery/events/your-new-event-2024/photo-2.jpg",
    // ... etc
  ],
  // ... other events
};
```

### **Step 4: Rename Image Files and Folders**

**In the folder:** `public/images/gallery/`

**Rename cover images:**

- `covers/cultural-fest-2024.jpg` → `covers/your-new-event-2024.jpg`

**Rename event folders:**

- `events/cultural-fest-2024/` → `events/your-new-event-2024/`
- Keep photo files as `photo-1.jpg`, `photo-2.jpg`, etc.

---

## ➕ **Adding New Executive Members**

### **Step 1: Add to Executive Members List**

**File:** `client/pages/Executive.tsx`

```typescript
const executiveMembers = [
  // ... existing members
  {
    name: "New Member Name",
    role: "New Role",
    placeholder: "NM",
    department: "Department - Year",
    description: "Description of their role",
  },
];
```

### **Step 2: Add Image Mapping**

**File:** `client/lib/imageManager.ts`

```typescript
executives: {
  // ... existing mappings
  "New Member Name": "/images/executives/new-member-name.jpg",
},
```

### **Step 3: Add Photo**

**Add file:** `public/images/executives/new-member-name.jpg`

### **Step 4: If They're a Portfolio Lead**

**File:** `client/lib/portfolioData.ts`

```typescript
export const portfolioLeads: Record<string, PortfolioLead> = {
  // ... existing leads
  newportfolio: {
    name: "New Member Name", // ← Must match exactly
    role: "New Portfolio Lead",
    // ... other details
  },
};
```

---

## ➕ **Adding New Events**

### **Step 1: Add Event Cover**

**Add file:** `public/images/gallery/covers/new-event-name.jpg`

### **Step 2: Create Event Photos Folder**

**Create folder:** `public/images/gallery/events/new-event-name/`
**Add photos:** `photo-1.jpg`, `photo-2.jpg`, etc.

### **Step 3: Update Code**

**File:** `client/lib/imageManager.ts`

**Add to eventCovers:**

```typescript
eventCovers: [
  // ... existing covers
  "/images/gallery/covers/new-event-name.jpg",
],
```

**Add to EVENT_GALLERIES:**

```typescript
const EVENT_GALLERIES = {
  // ... existing events
  "new-event-name": [
    "/images/gallery/events/new-event-name/photo-1.jpg",
    "/images/gallery/events/new-event-name/photo-2.jpg",
    // ... add all your photos
  ],
};
```

**Add to defaultEventFolders:**

```typescript
export const defaultEventFolders: EventFolder[] = [
  // ... existing events
  {
    id: "new-event-name",
    name: "New Event Display Name",
    date: "2024-01-01",
    description: "Description of the new event",
    coverImage: LOCAL_IMAGES.eventCovers[X], // ← Use correct index
    images: EVENT_GALLERIES["new-event-name"].map((src, i) => ({
      id: `new-event-${i + 1}`,
      src,
      title: `New Event Photo ${i + 1}`,
      description: `Photo from New Event`,
      uploadDate: "2024-01-01",
    })),
  },
];
```

---

## 🔗 **How Images Are Connected**

### **The Connection Chain:**

1. **Executive Member Name** (in code) → **Image File Name** (in folder)

   - "Arjun Sharma" �� `arjun-sharma.jpg`

2. **Event ID** (in code) → **Folder Name** (in file system)

   - `id: "cultural-fest-2024"` → `events/cultural-fest-2024/`

3. **Image Mapping** (in imageManager.ts) → **Actual Files**
   - `"/images/executives/john-doe.jpg"` → `public/images/executives/john-doe.jpg`

### **Critical Rules:**

1. **Exact Matching:** Names in code must EXACTLY match the keys in imageManager.ts
2. **File Naming:** Image file names must use lowercase with hyphens
3. **Path Consistency:** All paths in code must match actual file locations
4. **Extension Consistency:** Use `.jpg` in both code and file names

---

## ✅ **Quick Change Checklist**

### **For Executive Member Name Change:**

- [ ] Update name in `Executive.tsx`
- [ ] Update name in `portfolioData.ts` (if portfolio lead)
- [ ] Update key and path in `imageManager.ts`
- [ ] Rename image file in `public/images/executives/`
- [ ] Test by refreshing website

### **For Event Name Change:**

- [ ] Update event object in `imageManager.ts` (defaultEventFolders)
- [ ] Update EVENT_GALLERIES key and paths
- [ ] Update eventCovers array path
- [ ] Rename cover image file
- [ ] Rename event folder and keep photo files
- [ ] Test by refreshing website

### **Testing Your Changes:**

1. Save all files
2. Refresh website (Ctrl+F5 for hard refresh)
3. Check Executive Body page for member photos
4. Check Portfolio detail pages for lead photos
5. Check Gallery page for event covers and photos
6. Look for broken image icons (indicates naming mismatch)

---

## 🚨 **Common Mistakes**

1. **Case Mismatch:** "John Doe" in code but `John-Doe.jpg` file (should be `john-doe.jpg`)
2. **Partial Updates:** Changing name in one file but not others
3. **Path Errors:** Wrong folder structure or file paths
4. **Key Mismatch:** Event id doesn't match EVENT_GALLERIES key
5. **Missing Files:** Updated code but forgot to rename/add image files

---

## 💡 **Pro Tips**

1. **Always update ALL locations** when changing a name
2. **Use consistent naming** - pick a format and stick to it
3. **Test one change at a time** to isolate issues
4. **Keep a backup** of original files before renaming
5. **Use browser dev tools** (F12) to see failed image requests

**Remember:** Every name change requires updating both the code AND the image files!
