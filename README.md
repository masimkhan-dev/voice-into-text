# Voice-to-Text Converter

A web application that allows users to convert their spoken words into text using the Web Speech API. The application supports multiple languages, provides a user-friendly interface, and allows users to download the transcribed text as a `.txt` file.

## Features

- **Multi-Language Support**: Select the desired language for speech recognition.
- **Real-Time Speech-to-Text**: Converts spoken words into text instantly.
- **Clear Transcription**: Reset the text area with a single click.
- **Download Transcription**: Save the transcribed text as a `.txt` file.
- **Error Handling**: Displays user-friendly error messages when speech recognition fails.

## How It Works

1. **Start Listening**:
   - Click the "Start Listening" button to activate speech recognition.
   - Speak into your device's microphone.
   
2. **Stop Listening**:
   - Click the button again to stop recognition.
   - The recognized text will be displayed in the result area.

3. **Change Language**:
   - Select a language from the dropdown menu before starting recognition.

4. **Clear Text**:
   - Click the "Clear" button to reset the transcription area.

5. **Download Text**:
   - Click the "Download" button to save the transcribed text as a `.txt` file.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/masimkhan-dev/voice-into-text.git
   ```
2. Open the project directory:
   ```bash
   cd voice-into-text
   ```
3. Open `index.html` in a web browser to start using the application.

## Code Explanation

### Event Listeners and Functionality
- **DOMContentLoaded**: Ensures the DOM is fully loaded before attaching event listeners.
- **Language Selection**: Updates the speech recognition language dynamically.
- **Start/Stop Recognition**: Toggles recognition on and off, updating the UI accordingly.
- **Speech Recognition Results**: Displays transcribed text and enables download functionality.
- **Error Handling**: Displays error messages for any speech recognition issues.
- **Clear and Download**: Provides easy ways to reset or save the transcription.

### Key JavaScript Elements
- **SpeechRecognition API**: Core functionality for recognizing speech.
- **UI Interaction**: Buttons for recording, clearing, and downloading text.
- **Error Display**: Temporary error messages displayed to users.

## Compatibility

- **Browsers**: Works on modern browsers like Chrome and Edge.
- **Devices**: Requires a microphone for input.

## Example UI

![Voice-to-Text UI](D:\Python Projects\voice into text\screencapture-127-0-0-1-5500-index-html-2024-12-10-10_19_34.png)

## Technologies Used

- HTML5
- CSS3
- JavaScript (Web Speech API)

## Known Issues

- **Browser Compatibility**: Some browsers may not support the Web Speech API or specific languages.
- **Noise Sensitivity**: May struggle with recognition in noisy environments.

## Future Improvements

- Add support for speech punctuation.
- Enhance error messages with suggested fixes.
- Improve UI with animations and visual feedback.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Let me know if you need further customizations!
