// Function to play a sound
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
}

// Mapping of keys to sound IDs
const keySoundMap = {
    'a': 'kickSound',
    's': 'rideSound',
    'd': 'snareSound',
    'f': 'tomSound',
    'g': 'hihatSound'
};

// Add a keydown event listener to the document to detect key presses
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const soundId = keySoundMap[key];
    
    if (soundId) {
        playSound(soundId); // Play the corresponding sound
    }
});

// Mapping of button IDs to sound IDs
const buttonSoundMap = {
    'kickButton': 'kickSound',
    'rideButton': 'rideSound',
    'snareButton': 'snareSound',
    'tomButton': 'tomSound',
    'hihatButton': 'hihatSound'
};

// Add click event listeners to buttons
for (const buttonId in buttonSoundMap) {
    const button = document.getElementById(buttonId);
    const soundId = buttonSoundMap[buttonId];
    button.addEventListener('click', function() {
        playSound(soundId); // Play the corresponding sound
    });
}
