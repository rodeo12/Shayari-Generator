const keywordInput = document.getElementById('keyword');
const generateButton = document.getElementById('generate-button');
const shayariContainer = document.getElementById('shayari-container');
// import confetti from 'canvas-confetti-js';

generateButton.addEventListener('click', async () => {
  const keyword = keywordInput.value.trim();

  // Basic validation (optional)
  if (!keyword) {
    alert('Please enter a keyword');
    return;
  }

  // Show loading indicator (optional)
  shayariContainer.textContent = 'Loading...';

  try {
    // Fetch Shayari from backend API (replace with actual URL)
    const response = await fetch('http://localhost:3000/generate-shayari', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keyword }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching Shayari: ${response.statusText}`);
    }

    const data = await response.json();
    const shayari = data.shayari;

    // Display generated Shayari
    shayariContainer.textContent = shayari;
    // showConfetti();

    // Remove loading indicator (optional)
  } catch (error) {
    if ( error.message.includes('SAFETY')) {
      alert('Shayari generation failed due to safety concerns. Please try a different keyword.');
    }else{
      console.error('Error generating Shayari:', error);
    shayariContainer.textContent = 'Shayari generation failed.';
    }
      
  }
});

function showConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.style.opacity = 1; // Make confetti visible

  const particleCount = 100; // Adjust number of particles
  const colors = ["#f00", "#0f0", "#00f"]; // Adjust colors

  const range = { x: window.innerWidth, y: window.innerHeight }; // Entire viewport

  confetti.create(confettiContainer, {
    resize: true, // Adjust for window resizing
    particleCount,
    colors,
    angle: { min: 60, max: 80 }, // Adjust confetti angle
    spread: 360, // Adjust confetti spread
    shapes: confetti.shapes.circle, // Choose shape (circle, square, etc.)
    scale: { min: 0.1, max: 0.5 }, // Adjust confetti size
    duration: 3000, // Adjust animation duration
    drift: 4, // Adjust horizontal drift
  });
}




