const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.get('/', (req, res) => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node App Activity</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Hello World!</h1>
        </div>
        
        <div class="status-card">
            <h2>Application Status</h2>
            <p>This application is running on Node.js<br>
            and deployed using Render.</p>
            
            <div class="status-item">
                <span class="status-label">Status:</span>
                <span class="status-value online">● Online</span>
            </div>
            
            <div class="status-item">
                <span class="status-label">Environment:</span>
                <span class="status-value">Production</span>
            </div>
            
            <div class="status-item">
                <span class="status-label">Server Time:</span>
                <span class="status-value time" id="server-time">${currentTime}</span>
            </div>
        </div>
        
        <div class="footer">
            <p>Built using Node.js & Express</p>
        </div>
    </div>

    <script>
        // Update time every second
        function updateTime() {
            fetch('/api/time')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('server-time').textContent = data.time;
                })
                .catch(error => console.log('Error updating time:', error));
        }
        
        // Update time immediately and then every second
        updateTime();
        setInterval(updateTime, 1000);
    </script>
</body>
</html>
  `;
  
  res.send(html);
});

// API endpoint for time updates
app.get('/api/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  res.json({ time: currentTime });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Visit: http://localhost:${PORT}`);
});