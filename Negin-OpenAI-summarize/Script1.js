
// your-script.js
const apiKey = window.config.openaiApiKey;

// Your existing code...



document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const inputText = document.getElementById('inputText');

    // Add event listeners for drag and drop functionality
    inputText.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    inputText.addEventListener('drop', function (e) {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        readFileContent(file);
    });

    // Add event listener for file input change
    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        readFileContent(file);
    });

    // Function to read file content and set it in the inputText textarea
    function readFileContent(file) {
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                inputText.value = e.target.result;
            };
            reader.readAsText(file);
        }
    }
});




async function summarizeText() {
    const inputText = document.getElementById('inputText').value;
    const responseElement = document.getElementById('outputText');

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey // Replace with your API Key
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "system",
                        "content": "You are a highly skilled AI trained in language comprehension and summarization. I would like you to read the following text and summarize it into a concise abstract paragraph. Aim to retain the most important points, providing a coherent and readable summary that could help a person understand the main points of the discussion without needing to read the entire text. Please avoid unnecessary details or tangential points."
                    },
                    {
                        "role": "user",
                        "content": inputText
                    }
                ]
            })
        });

        const data = await response.json();
        console.log(data);
        responseElement.value = data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error:', error);
        responseElement.value = 'Error in summarization';
    }
    
}