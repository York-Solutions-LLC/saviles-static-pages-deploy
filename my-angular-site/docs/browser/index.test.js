// Select the <h1> element in the page
const h1 = document.querySelector('h1');

// Test: check that it exists and has the correct text
if (h1 && h1.textContent === 'Welcome to my site!!') {
  console.log('Test passed: H1 text is correct');
} else {
  console.error('Test failed: H1 text is missing or wrong');
}
