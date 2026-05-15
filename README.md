# 🎮 Web NES Player

A simple, beginner-friendly web-based NES emulator built with JavaScript!

## What is This?

This is a **Nintendo Entertainment System (NES) emulator** that runs in your web browser. It lets you upload NES ROM files and play classic games right from your browser!

## How to Use

### 1. **Get Your ROM Files**
   - Find NES game ROM files (`.nes` format)
   - These are digital copies of old NES games

### 2. **Open the Emulator**
   - Open `index.html` in your web browser
   - You should see a purple page with a black game screen

### 3. **Upload a ROM**
   - Click "Upload NES ROM (.nes)"
   - Select a `.nes` file from your computer
   - Wait for it to load

### 4. **Play!**
   - Click the **Play** button to start
   - Use the keyboard controls below

## ⌨️ Keyboard Controls

| Key | Action |
|-----|--------|
| **Arrow Keys** | Move (D-Pad) |
| **Z** | A Button |
| **X** | B Button |
| **Enter** | Start |
| **Shift** | Select |

## 📁 File Structure

```
web-nes-player/
├── index.html    # Main page (the interface)
├── style.css     # Styling (colors, layout)
├── app.js        # Game logic (how it works)
└── README.md     # This file
```

## 🔧 What Each File Does

### `index.html`
- The main page you see
- Contains the upload button, play controls, and game screen
- Imports the JSNES library (the actual emulator)

### `style.css`
- Makes everything look nice
- Purple gradient background
- Responsive design (works on phones!)

### `app.js`
- The "brain" of the emulator
- Loads ROM files
- Handles keyboard input
- Runs the game loop
- Draws graphics to the screen

## 🚀 Getting Started (For Beginners)

1. **Clone this repository** to your computer
2. **Open `index.html`** in your browser
3. **Upload a NES ROM** file
4. **Click Play** and enjoy!

That's it! No installation needed!

## 📚 Learn More

### What is an Emulator?
An emulator mimics how an old gaming console (like the NES) works. It lets you play old games on modern computers.

### How does this work?
- **JSNES** is a JavaScript library that emulates the NES hardware
- When you load a ROM, it tells the emulator what game to run
- The emulator processes button inputs and outputs graphics
- Your browser displays everything on screen

## 🐛 Troubleshooting

**Q: The game won't load**
- Make sure your ROM file is a valid `.nes` file
- Check that the file is in NES format (not some other emulator format)

**Q: Keyboard controls aren't working**
- Make sure the browser window is focused (click on the page)
- Try a different ROM - some games have different control schemes

**Q: The game is super slow**
- This is normal for older computers
- Try closing other browser tabs to free up memory

## 📖 Useful Resources

- [JSNES Documentation](https://www.jsnes.org/)
- [NES ROM Download Sites](https://emulation.gametechwiki.com/index.php/NES_ROM_Dumps)
- [How NES Games Work](https://www.youtube.com/results?search_query=how+nes+works)

## 📝 Notes for Learning

This code is written to be **easy to understand**, even if you're new to programming. Each part is commented and organized clearly.

If you want to learn more:
- Edit `app.js` and see what happens
- Try changing colors in `style.css`
- Add new buttons or features!

## 💡 Next Steps

Want to expand this project? Try:
- ✅ Adding a game library selector
- ✅ Saving game progress
- ✅ Adding sound effects
- ✅ Creating a mobile-friendly controller
- ✅ Supporting other game systems (SNES, Game Boy, etc.)

## 📄 License

This project uses the [JSNES library](https://www.jsnes.org/) which is open source.

---

**Happy gaming!** 🎮✨
