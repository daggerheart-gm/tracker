# Daggerheart Character Tracker

A web-based character tracker for the Daggerheart RPG system. Track multiple characters with Hope, Fear, Hit Points, Stress, and all other essential stats.

## Features

- **Multi-Character Support**: Create and manage multiple characters with tabbed interface
- **Core Mechanics**: Hope (0-6) and Fear (0-6) tracking with visual progress bars
- **Health Management**: Hit Points, Max HP, and Stress tracking
- **Defense Stats**: Armor Score, Evasion, and damage thresholds
- **Experience Tracking**: Add and manage character experiences
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. **Fork this repository**

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Click Save

3. **Your app will be available at**: `https://YOUR_USERNAME.github.io/daggerheart-tracker

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## File Structure

```
daggerheart-tracker/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

## Technologies Used

- React 18
- Tailwind CSS
- Lucide React Icons
- Responsive design principles

## Contributing

Feel free to fork this repository and submit pull requests for improvements!

## License

MIT License - feel free to use this for your Daggerheart games!
