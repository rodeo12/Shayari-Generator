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
  shayariContainer.style.border = '2px dashed black';
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

    shayariContainer.addEventListener('mouseover', () => {
      shayariContainer.style.backgroundColor = '#f5f5f5'; // Light background on hover
      shayariContainer.style.cursor = 'pointer'; // Change cursor to pointer
       // Add the transformation styles
  shayariContainer.style.transform = 'scale(1.5)';
  shayariContainer.style.msTransform = '-ms-transform: scale(1.5)'; // For IE 9
  shayariContainer.style.webkitTransform = '-webkit-transform: scale(1.5)'; // For Safari 3-8
    });
  
    shayariContainer.addEventListener('mouseout', () => {
      shayariContainer.style.backgroundColor = 'inherit'; // Reset background color
      shayariContainer.style.cursor = 'default'; // Reset cursor

      shayariContainer.style.transform = "none";
  shayariContainer.style.msTransform = "none"; // For IE 9
  shayariContainer.style.webkitTransform = "none"; // For Safari 3-8

    });

    // Display generated Shayari
    
    shayariContainer.textContent = shayari;
    

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





