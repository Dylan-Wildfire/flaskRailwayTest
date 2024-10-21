function sendNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDisplay = document.getElementById('result');

    fetch('/double', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: parseInt(numberInput) })
    })
    .then(response => response.json())
    .then(data => {
        resultDisplay.textContent = `Result: ${data.result}`;
    })
    .catch(error => {
        console.error('Error:', error);
        resultDisplay.textContent = 'An error occurred';
    });
}
