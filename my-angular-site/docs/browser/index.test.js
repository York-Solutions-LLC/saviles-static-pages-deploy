const fs = require('fs');

// Path to your HTML file
const path = './index.html';

// Read the HTML file as text
const html = fs.readFileSync(path, 'utf8');

// Simple regex to find <h1> content
const match = html.match(/<h1>(.*?)<\/h1>/);

if (match && match[1] === 'Welcome to my site!!') {
  console.log('Test passed: H1 text is correct');
  process.exit(0); // success
} else {
  console.error('Test failed: H1 text is missing or wrong');
  process.exit(1); // fail
}
