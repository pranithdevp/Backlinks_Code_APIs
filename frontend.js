// Client-side JavaScript
const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    console.log('Connected to the WebSocket server');
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Real-time update:', data);
};

socket.onclose = () => {
    console.log('Disconnected from the WebSocket server');
};
