

# Purvi Champaran Handi Meat - Restaurant Website Plan

## 🍖 Overview
A beautiful, bilingual (English/Hindi) single-page restaurant website for Purvi Champaran Handi Meat, Rafiganj featuring authentic Champaran Handi cuisine with a warm, traditional Indian color scheme.

---

## 🎨 Design & Theme

### Color Palette
- **Primary**: Rich saffron orange (#E85D04) - represents warmth and Indian cuisine
- **Secondary**: Deep maroon (#9D0208) - adds elegance 
- **Accents**: Golden yellow (#FFB703) for highlights and badges
- **Backgrounds**: Cream white (light mode) / Deep brown-black (dark mode)
- **Text**: Dark brown (light) / Warm cream (dark)

### Typography
- Headings: Bold, appetizing fonts
- Hindi text: Clear, readable Devanagari script support

---

## 📱 Site Structure & Features

### 1. Sticky Navigation Bar
- Restaurant logo/name with tagline
- Menu links: Home, Menu, About, Contact (hash routing)
- Dark/Light mode toggle with auto night detection (after 6 PM = dark)
- Mobile hamburger menu with slide-in drawer

### 2. Hero Section
- Full-width banner with appetizing Handi Mutton imagery
- Welcome text in both languages (switchable)
- "Order Now" & "View Menu" call-to-action buttons
- Subtle fade-in animations on load

### 3. Menu Section (#menu)
- **Search bar** to filter dishes by name
- **Categories**: Starters, Handi Specials, Chicken, Kebabs, Biryani, Breads, Rice, Beverages
- **Food Cards** featuring:
  - Image with hover slider effect (shows multiple angles)
  - Dish name (English/Hindi)
  - Brief description
  - Price with discount badge (e.g., "20% OFF")
  - "Order Now" button → Opens WhatsApp with pre-filled order
  - "Details" button → Shows full description popup
- All text toggles between English and Hindi

### 4. About Section (#about)
- Story of Champaran Handi tradition
- Owner introduction: Rohit Chauhan
- Why our Handi Mutton is special
- Beautiful images of the cooking process

### 5. Contact Section (#contact)
- **Google Maps embed** showing restaurant location in Rafiganj
- Contact details with Font Awesome icons:
  - 📞 Phone: 7424961362
  - 💬 WhatsApp direct link
  - 📍 Address
  - ⏰ Opening hours

### 6. Footer
- Copyright text
- Quick contact info
- **Language Switcher**: Two elegant rounded buttons "English | हिंदी"
  - Active state highlighted
  - Hover effects
  - Saves preference to localStorage

---

## ✨ Interactive Features

### First-Visit Welcome Popup
- Triggers only on first visit (uses localStorage)
- Warm welcome message with restaurant image
- "Discover Our Menu" button
- Smooth fade-in animation

### Bilingual System
- Toggle between English and Hindi site-wide
- CSS classes: `.lang-en .hi-text { display: none }` and vice versa
- Language preference saved in localStorage
- Smooth transition when switching

### Dark/Light Mode
- Manual toggle button with sun/moon icon
- **Auto detection**: After 6 PM → Dark mode automatically
- Preference saved in localStorage
- Smooth theme transition animations

### Animations & Effects
- Fade-in on scroll for sections
- Food card hover: Image slides to show next image
- Button hover effects with scale and color transitions
- Smooth page scrolling between sections

### Tawk.to Live Chat
- Floating chat widget in corner
- Customers can ask questions in real-time
- Easy to set up with your Tawk.to account

---

## 📋 Menu Items (Sample)

| Category | Items |
|----------|-------|
| **Handi Specials** | Champaran Handi Mutton (Special/Regular/Family), Handi Chicken |
| **Starters** | Mutton Seekh Kebab, Chicken Tikka, Tandoori Chicken, Paneer Tikka |
| **Main Course** | Mutton Curry, Chicken Curry, Kadhai Chicken, Butter Chicken |
| **Biryani** | Mutton Biryani, Chicken Biryani, Veg Biryani |
| **Breads** | Tandoori Roti, Butter Naan, Garlic Naan, Laccha Paratha |
| **Rice** | Steamed Rice, Jeera Rice, Ghee Rice |
| **Beverages** | Lassi, Chaas, Cold Drinks |

---

## 📱 Responsive Design
- Desktop: Full layout with grid menu
- Tablet: Adjusted grid, collapsible sections
- Mobile: Hamburger menu, single-column cards, touch-friendly buttons

---

## 🔧 Technical Notes
- Single Page Application with hash routing
- React components for reusability
- Tailwind CSS for styling
- localStorage for preferences (language, theme, first-visit)
- WhatsApp API for direct ordering

