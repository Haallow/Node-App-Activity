const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    // Serve home page
    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <h1>Hello World!</h1>
    <p>Server running with Node.js built-in modules</p>
</body>
</html>`;
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    
  } else if (url === '/styles.css') {
    // Serve CSS file using fs module
    const cssPath = path.join(__dirname, 'public', 'styles.css');
    
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('CSS file not found');
        return;
      }
      
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
    
  } else {
    // 404 for everything else
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});