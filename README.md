# Node App Activity

A basic Node.js web server that demonstrates file serving using built-in modules.

## Running the Server

Install dependencies:
```bash
npm install
```

Start the server:
```bash
npm start
```

Visit http://localhost:3000

## Files

- `index.js` - Express version for production deployment
- `server-raw.js` - Raw Node.js version using http and fs modules
- `public/styles.css` - CSS file served by the server

## Raw Node.js Version

To run the version that uses only Node.js built-in modules:
```bash
npm run start:raw
```

This version demonstrates:
- Creating a server with the http module
- Reading files with the fs module  
- Serving different content types
- Basic error handling

## Deployment

Configured for Render.com deployment using the Express version.

