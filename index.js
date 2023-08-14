<!DOCTYPE html>
<html>
<head>
    <title>File to Text Converter</title>
</head>
<body>
    <h1>File to Text Converter</h1>
    <input type="file" id="fileInput" accept=".txt" />
    <button onclick="convertFile()">Convert</button>
    <h2>Converted Text</h2>
    <pre id="textOutput"></pre>

    <script>
        function convertFile() {
            const fileInput = document.getElementById("fileInput");
            const textOutput = document.getElementById("textOutput");

            const selectedFile = fileInput.files[0];
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const fileContent = event.target.result;
                    textOutput.textContent = fileContent;
                };
                reader.readAsText(selectedFile);
            } else {
                textOutput.textContent = "No file selected.";
            }
        }
    </script>
</body>
</html>
