const fs = require('fs');

// Hard-coded path from the ROOT of your repo
const html = fs.readFileSync(
  'my-angular-site/docs/browser/index.html',
  'utf8'
);

// Simple check for <h1> text
if (html.includes('<h1>Welcome to my site!!</h1>')) {
  console.log('Test passed: H1 text is correct');
} else {
  console.error('Test failed: H1 text is missing or incorrect');
  process.exit(1); // Required so GitHub Actions stops the deploy
}