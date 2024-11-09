fetch('/track-button-click', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        userId: '12345',
        elementId: 'submitButton',
        pageUrl: window.location.href,
    }),
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
