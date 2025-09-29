# Welcome Modal Configuration

The Welcome Modal component is now integrated into your homepage. Here's how to customize it:

## 🎯 Features Implemented:

### **1. Smart Display Logic:**
- Shows only on first visit (uses localStorage)
- 1.5 second delay for better user experience
- "Don't show again" checkbox option
- Prevents body scrolling when open

### **2. Responsive Design:**
- Works on all screen sizes
- Mobile-friendly layout
- Optimized image loading with Next.js Image

### **3. Accessibility:**
- Keyboard navigation support
- Focus management
- ARIA labels for screen readers
- Backdrop click to close

### **4. University Branding:**
- Uses theme colors (blue & orange)
- University logo and imagery
- Consistent styling with site theme

## 🛠️ Customization Options:

### **Change the Background Image:**
Edit line 63 in `WelcomeModal.tsx`:
```tsx
src="/theme/images/your-image.jpg" // Replace with your announcement image
```

### **Update Announcement Content:**
Edit the content section around lines 75-110:
```tsx
<h3 className="text-xl lg:text-2xl font-bold text-theme-blue mb-4">
  🎓 Your Custom Announcement Title
</h3>
```

### **Modify Call-to-Action:**
Update the buttons around lines 130-145:
```tsx
<Link href="/your-link">Apply Now</Link>
```

### **Change Display Timing:**
Edit line 25 in `page.tsx`:
```tsx
}, 300); // Change delay (in milliseconds)
```

### **Reset Modal for Testing:**
In browser console, run:
```javascript
localStorage.removeItem('uw-welcome-modal-dismissed');
```

## 📋 Current Modal Content:

- **Main Message**: Fall 2025 Admissions Open
- **Features**: Programs list, deadline information, scholarship note
- **Actions**: "Apply Now" button, "Maybe Later" option
- **Persistence**: "Don't show again" checkbox

## 🎨 Design Elements:

- **Layout**: Split-screen (image + content)
- **Animations**: Fade in, scale up entrance
- **Colors**: University blue and orange theme
- **Icons**: FontAwesome integration
- **Typography**: Consistent with site fonts

The modal will now appear on first page load and can be easily customized for different announcements, events, or seasonal campaigns!