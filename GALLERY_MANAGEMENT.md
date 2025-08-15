# Gallery Management Guide

## For Your Sister (The Photographer) 📸

This guide explains how to add, update, and manage photos in your gallery section.

### Quick Start

1. **Access the Admin Panel**: Go to your gallery page and click the gear icon (⚙️) in the top right
2. **Follow the instructions** in the admin panel for step-by-step guidance
3. **Use the template** provided to format your photo data correctly

### How It Works

The gallery loads photos from a JSON file located at `public/gallery/photos.json`. When you update this file and commit the changes to GitHub, your website automatically updates within 2-3 minutes.

### Adding New Photos

#### Step 1: Upload Images
1. Go to the [GitHub repository](https://github.com/imakshug/anshita.portfolio)
2. Navigate to `public/gallery/` folder
3. Click "Add file" → "Upload files"
4. Upload your images (JPG recommended for smaller file sizes)
5. Use descriptive filenames without spaces (e.g., `sunset-portrait.jpg`)

#### Step 2: Update Photo Data
1. Download the current `photos.json` file using the admin panel
2. Open it in any text editor (Notepad, TextEdit, etc.)
3. Add your new photo information using the template format
4. Upload the updated `photos.json` file back to the `public/gallery/` folder

#### Step 3: Commit Changes
1. Add a commit message like "Add new photos"
2. Click "Commit changes"
3. Your website updates automatically!

### Photo Data Format

Each photo needs these fields:
- **id**: Unique number (increment from the last photo)
- **title**: Display name for your photo
- **category**: One of: portrait, landscape, wedding, street, nature, fashion, wildlife
- **imageUrl**: Path like "/gallery/your-filename.jpg"
- **tags**: Array of keywords for searching
- **description**: Brief description of the photo
- **likes**: Any number you want to display
- **featured**: true/false (featured photos may be highlighted)

### Tips for Best Results

- **Image Size**: Resize photos to max 1200px width for faster loading
- **File Format**: Use JPG for photos (smaller file size than PNG)
- **Naming**: Use descriptive filenames without spaces or special characters
- **Organization**: Keep similar photos in the same category for better browsing

### Categories Available

- **Portrait**: Individual or group portraits
- **Landscape**: Nature, cityscapes, scenic views
- **Wedding**: Wedding ceremony, reception, couple photos
- **Street**: Urban photography, street scenes
- **Nature**: Flowers, animals, outdoor scenes
- **Fashion**: Fashion shoots, editorial work
- **Wildlife**: Animals in their natural habitat

### Need Help?

The admin panel includes detailed instructions and a copy-paste template. If you run into any issues, the template shows exactly how to format new photo entries.

Remember: Every time you commit changes to GitHub, the website updates automatically within a few minutes!

---

*This system allows you to manage your photography gallery without needing to know any code. Just follow the steps in the admin panel!*
