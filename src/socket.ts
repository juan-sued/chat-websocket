import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object

const socket = io('https://hablas-backend.onrender.com/');

export { socket };
