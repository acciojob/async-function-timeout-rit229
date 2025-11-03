//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    let textValue = document.getElementById('text').value;
    let delayValue = parseInt(document.getElementById('delay').value);

    // Function to create a delay
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Wait for the specified delay
    await delay(delayValue);
    
    // Update the output div with the text value
    document.getElementById('output').innerText = textValue;
});
