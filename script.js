const scaleName = document.getElementById('scaleName');
const scale = document.getElementById('scale');
const easyScale = document.getElementById('easyScale');
const modes = document.getElementsByTagName('settings');

var mode = " Major";
var currentScale = " C";

function showScale(root = 'C') {
    currentScale = root;
    scaleName.innerHTML = root + mode;
    switch (root) {
        case 'C':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "C D E F G A B";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "C D Eb F G A Bb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "C Db Eb F G Ab Bb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Lydian':
                    scale.innerHTML = "C D E F# G A B";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "C D E F G A Bb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "C D Eb F G Ab Bb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Locrian':
                    scale.innerHTML = "C Db Eb F Gb Ab Bb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                default:
            }
            break;
        case 'Db':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "Db Eb F Gb Ab Bb C";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "Db Eb Fb Gb Ab Bb Cb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "Db Ebb Fb Gb Ab Bbb Cb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Db D Fb Gb Ab A Cb";
                    easyScale.style.opacity = 100;
                    break;
                case ' Lydian':
                    scale.innerHTML = "Db Eb F G Ab Bb C";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "Db Eb F Gb Ab Bb Cb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "Db Eb Fb Gb Ab Bbb Cb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Db Eb FB GB Ab A Cb";
                    easyScale.style.opacity = 100;
                    break;
                case ' Locrian':
                    scale.innerHTML = "Db Ebb Fb Gb Abb Bbb Cb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Db D Fb Gb G A Cb";
                    easyScale.style.opacity = 100;
                    break;
                default:
            }
            break;
        case 'D':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "D E F# G A B C#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "D E F G A B C";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "D Eb F G A Bb C";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Lydian':
                    scale.innerHTML = "D E F# G# A B C#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "D E F# G A B C";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "D E F G A Bb C";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Locrian':
                    scale.innerHTML = "D Eb F G Ab Bb C";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                default:
            }
            break;
        case 'Eb':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "Eb F G Ab Bb C D";
                    scale.style.opacity = 100;
                    break;
                case ' Dorian':
                    scale.innerHTML = "Eb F Gb Ab Bb C Db";
                    scale.style.opacity = 100;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "Eb Fb Gb Ab Bb Cb Db";
                    scale.style.opacity = 100;
                    break;
                case ' Lydian':
                    scale.innerHTML = "Eb F G A Bb C D";
                    scale.style.opacity = 100;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "Eb F G Ab Bb C Db";
                    scale.style.opacity = 100;
                    break;
                case ' Minor':
                    scale.innerHTML = "Eb F Gb Ab Bb Cb Db";
                    scale.style.opacity = 100;
                    break;
                case ' Locrian':
                    scale.innerHTML = "Eb Fb Gb Ab Bbb Cb Db";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Eb Fb Gb Ab A Cb Db";
                    easyScale.style.opacity = 100;
                    break;
                default:
            }
            break;
        case 'E':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "E F# G# A B C# D#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "E F# G A B C# D";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "E F G A B C D";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Lydian':
                    scale.innerHTML = "E F# G# A# B C# D#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "E F# G# A B C# D";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "E F# G A B C D";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Locrian':
                    scale.innerHTML = "E F G A Bb C D";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                default:
            }
            break;
        case 'F':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "F G A Bb C D E";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "F G Ab Bb C D Eb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "F Gb Ab Bb C Db Eb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Lydian':
                    scale.innerHTML = "F G A B C D E";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "F G A Bb C D Eb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "F G Ab Bb C Db Eb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Locrian':
                    scale.innerHTML = "F Gb Ab Bb Cb Db Eb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                default:
            }
            break;
        case 'Gb':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "Gb Ab Bb Cb Db Eb F";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "Gb Ab Bbb Cb Db Eb F";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Gb Ab A Cb Db Eb F";
                    easyScale.style.opacity = 100;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "Gb Abb Bbb Cb Db Ebb Fb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Gb G A Cb Db D Fb";
                    easyScale.style.opacity = 100;
                    break;
                case ' Lydian':
                    scale.innerHTML = "Gb Ab Bb C Db Eb F";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "Gb Ab Bb Cb Db Eb Fb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "Gb Ab Bbb Cb Db Ebb Fb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Gb Ab A Cb Db D Fb";
                    easyScale.style.opacity = 100;
                    break;
                case ' Locrian':
                    scale.innerHTML = "Gb Abb Bbb Cb Dbb Ebb Fb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Gb G A Cb C D Fb";
                    easyScale.style.opacity = 100;
                    break;
                default:
            }
            break;
        case 'G':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "G A B C D E F#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "G A Bb C D E F";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "G Ab Bb C D Eb F";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Lydian':
                    scale.innerHTML = "G A B C# D E F#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "G A B C D E F";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "G A Bb C D Eb F";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Locrian':
                    scale.innerHTML = "G Ab Bb C Db Eb F";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                default:
            }
            break;
        case 'Ab':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "Ab Bb C Db Eb F G";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "Ab Bb Cb Db Eb F Gb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "Ab Bbb Cb Db Eb Fb Gb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Ab A Cb Db Eb Fb Gb";
                    easyScale.style.opacity = 100;
                    break;
                case ' Lydian':
                    scale.innerHTML = "Ab Bb C D Eb F G";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "Ab Bb C Db Eb F Gb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "Ab Bb Cb Db Eb Fb Gb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Locrian':
                    scale.innerHTML = "Ab Bbb Cb Db Ebb Fb Gb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Ab A Cb Db D Fb Gb";
                    easyScale.style.opacity = 100;
                    break;
                default:
            }
            break;
        case 'A':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "A B C# D E F# G#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "A B C D E F# G";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "A Bb C D E F G";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Lydian':
                    scale.innerHTML = "A B C# D# E F# G#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "A B C# D E F# G";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "A B C D E F G";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Locrian':
                    scale.innerHTML = "A Bb C D Eb F G";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                default:
            }
            break;
        case 'B':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "B C# D# E F# G# A#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "B C# D E F# G# A";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "B C D E F# G A";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Lydian':
                    scale.innerHTML = "B C# D# E# F# G# A#";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "B C# D# E F# G# A";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Minor':
                    scale.innerHTML = "B C# D E F# G A";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Locrian':
                    scale.innerHTML = "B C D E F G A";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                default:
            }
            break;
        case 'Cb':
            switch (mode) {
                case ' Major':
                    scale.innerHTML = "Cb Db Eb Fb Gb Ab Bb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Dorian':
                    scale.innerHTML = "Cb Db Ebb Fb Gb Ab Bbb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Cb Db D Fb Gb Ab A";
                    easyScale.style.opacity = 100;
                    break;
                case ' Phrygian':
                    scale.innerHTML = "Cb Dbb Ebb Fb Gb Abb Bbb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Cb C D Fb Gb G A";
                    easyScale.style.opacity = 100;
                    break;
                case ' Lydian':
                    scale.innerHTML = "Cb Db Eb F Gb Ab Bb";
                    scale.style.opacity = 100;
                    easyScale.style.opacity = 0;
                    break;
                case ' Mixolydian':
                    scale.innerHTML = "Cb Db Eb Fb Gb Ab Bbb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Cb Db Eb FB Gb Ab A";
                    easyScale.style.opacity = 100;
                    break;
                case ' Minor':
                    scale.innerHTML = "Cb Db Ebb Fb Gb Abb Bbb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Cb Db D Fb Gb G A";
                    easyScale.style.opacity = 100;
                    break;
                case ' Locrian':
                    scale.innerHTML = "Cb Dbb Ebb Fb Gbb Abb Bbb";
                    scale.style.opacity = 100;
                    easyScale.innerHTML = "Cb C D Fb F G A";
                    easyScale.style.opacity = 100;
                    break;
                default:
            }
            break;
    }
    settings.style.opacity = 100;
}

function selectMode(selectedMode) {
    mode = selectedMode;
    showScale(currentScale);

}