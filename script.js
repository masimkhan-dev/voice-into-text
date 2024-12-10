document.addEventListener('DOMContentLoaded', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const languageSelect = document.getElementById('language');
    const resultContainer = document.querySelector('.result p');
    const startListeningButton = document.querySelector('.btn.record');
    const recordButtonText = startListeningButton.querySelector('p');
    const clearButton = document.querySelector('.btn.class');
    const downloadButton = document.querySelector('.btn.download');
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container');

    let recognizing = false;

    // Set the language for speech recognition
    languageSelect.addEventListener('change', () => {
        recognition.lang = languageSelect.value;
    });

    // Start/stop listening
    startListeningButton.addEventListener('click', () => {
        if (recognizing) {
            recognition.stop();
        } else {
            recognition.start();
        }
    });

    // Handle the result of speech recognition
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resultContainer.textContent = transcript;
        recognizing = false;
        recordButtonText.textContent = 'Start Listening';
        startListeningButton.classList.remove('recording');
        downloadButton.disabled = false; // Enable download button
    };

    // Handle speech recognition errors
    recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ' + event.error);
        recognizing = false;
        recordButtonText.textContent = 'Start Listening';
        startListeningButton.classList.remove('recording');
        showError(`Speech recognition error: ${event.error}`);
    };

    // Update UI when recognition starts
    recognition.onstart = () => {
        recognizing = true;
        recordButtonText.textContent = 'Listening...';
        startListeningButton.classList.add('recording');
        downloadButton.disabled = true; // Disable download button while listening
    };

    // Clear the result
    clearButton.addEventListener('click', () => {
        resultContainer.textContent = 'Text'; // Reset to default text
        downloadButton.disabled = true; // Disable download button
    });

    // Download the recognized text as a .txt file
    downloadButton.addEventListener('click', () => {
        const text = resultContainer.textContent;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recognized_text.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Function to display error messages
    function showError(message) {
        errorContainer.textContent = message;
        document.body.appendChild(errorContainer);
        setTimeout(() => {
            document.body.removeChild(errorContainer);
        }, 3000);
    }
});
