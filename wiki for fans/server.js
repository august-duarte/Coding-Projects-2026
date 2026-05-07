const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// This line tells Express to serve everything in your current folder
// This includes index.html, script.js, items.json, and your folders
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Adventure Time server is running!`);
  console.log(`👉 Open your browser at: http://localhost:${PORT}`);
});