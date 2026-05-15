/* ========================
   Web NES Player - Game Logic
   ======================== */

// Initialize variables
let nes = null;
let romLoaded = false;
let isRunning = false;

// Get HTML elements
const romInput = document.getElementById('rom-input');
const gameScreen = document.getElementById('game-screen');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const statusDisplay = document.getElementById('status');
const fileLabel = document.querySelector('.file-label');

// Canvas setup for drawing
const canvasContext = gameScreen.getContext('2d');
const imageData = canvasContext.createImageData(256, 240);

// ========================
// ROM Upload Handler
// ========================
romInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (!file) return;
    
    // Show loading status
    updateStatus('Loading ROM...', 'loading');
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const romData = new Uint8Array(e.target.result);
            
            // Initialize JSNES with the ROM
            nes = new JSNES({
                onFrame: drawFrame,
                onAudioSample: null // Audio disabled for simplicity
            });
            
            // Load the ROM into the emulator
            nes.loadROM(romData);
            
            romLoaded = true;
            isRunning = false;
            
            updateStatus(`✅ ROM loaded: ${file.name}`, 'success');
            playBtn.disabled = false;
        } catch (error) {
            updateStatus(`❌ Error loading ROM: ${error.message}`, 'error');
            romLoaded = false;
        }
    };
    
    reader.onerror = function() {
        updateStatus('❌ Error reading file', 'error');
    };
    
    reader.readAsArrayBuffer(file);
});

// ========================
// Play Button
// ========================
playBtn.addEventListener('click', function() {
    if (!romLoaded) {
        updateStatus('❌ Please load a ROM first', 'error');
        return;
    }
    
    if (isRunning) return;
    
    isRunning = true;
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    updateStatus('▶ Playing...', '');
    
    // Start the game loop
    gameLoop();
});

// ========================
// Pause Button
// ========================
pauseBtn.addEventListener('click', function() {
    isRunning = false;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    updateStatus('⏸ Paused', '');
});

// ========================
// Reset Button
// ========================
resetBtn.addEventListener('click', function() {
    if (!romLoaded) return;
    
    // Reload the ROM to reset
    nes.reset();
    isRunning = false;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    updateStatus('🔄 Game reset', '');
    drawFrame();
});

// ========================
// Game Loop
// ========================
function gameLoop() {
    if (!isRunning) return;
    
    // Run one frame of the emulator
    nes.frame();
    
    // Continue the loop
    requestAnimationFrame(gameLoop);
}

// ========================
// Draw Frame Function
// ========================
function drawFrame() {
    // Get the current frame data from the emulator
    const frameBuffer = nes.screen;
    
    // Copy the frame buffer to the canvas
    for (let i = 0; i < frameBuffer.length; i++) {
        imageData.data[i] = frameBuffer[i];
    }
    
    // Draw the image data on the canvas
    canvasContext.putImageData(imageData, 0, 0);
}

// ========================
// Keyboard Input Handling
// ========================
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

function handleKeyDown(event) {
    if (!nes) return;
    
    // Map keyboard keys to NES controller buttons
    const keyMap = {
        'ArrowUp': 'JOYPAD_UP',
        'ArrowDown': 'JOYPAD_DOWN',
        'ArrowLeft': 'JOYPAD_LEFT',
        'ArrowRight': 'JOYPAD_RIGHT',
        'z': 'JOYPAD_A',
        'Z': 'JOYPAD_A',
        'x': 'JOYPAD_B',
        'X': 'JOYPAD_B',
        'Enter': 'JOYPAD_START',
        'Shift': 'JOYPAD_SELECT'
    };
    
    const button = keyMap[event.key];
    if (button) {
        nes.buttonDown(1, button);
    }
}

function handleKeyUp(event) {
    if (!nes) return;
    
    const keyMap = {
        'ArrowUp': 'JOYPAD_UP',
        'ArrowDown': 'JOYPAD_DOWN',
        'ArrowLeft': 'JOYPAD_LEFT',
        'ArrowRight': 'JOYPAD_RIGHT',
        'z': 'JOYPAD_A',
        'Z': 'JOYPAD_A',
        'x': 'JOYPAD_B',
        'X': 'JOYPAD_B',
        'Enter': 'JOYPAD_START',
        'Shift': 'JOYPAD_SELECT'
    };
    
    const button = keyMap[event.key];
    if (button) {
        nes.buttonUp(1, button);
    }
}

// ========================
// Status Update Helper
// ========================
function updateStatus(message, className) {
    statusDisplay.textContent = message;
    statusDisplay.className = 'status ' + className;
}

// ========================
// Initial Setup
// ========================
playBtn.disabled = true;
pauseBtn.disabled = true;
resetBtn.disabled = true;
updateStatus('Ready to play! Upload a ROM to start.', '');

console.log('🎮 Web NES Player initialized!');
