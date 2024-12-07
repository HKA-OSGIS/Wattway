const map = L.map('map').setView([52.343197, -0.170632], 12); // Center map to default location

// Add OpenStreetMap tile layer from a reliable source
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
