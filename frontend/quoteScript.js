//Shayari generation//

const newInput = document.getElementById('keyword');
const generateQuote = document.getElementById('generate-quote');
  const quoteContainer = document.getElementById('shayari-container');


  generateQuote.addEventListener('click', async () => {
  const keyword = newInput.value.trim();

  // Basic validation (optional)
  if (!keyword) {
    alert('Please enter a keyword');
    return;
  }

  // Show loading indicator (optional)
  
  quoteContainer.textContent = 'Loading...';
 

  try {
    // Fetch Shayari from backend API (replace with actual URL)
    const response = await fetch('https://shayarigeminibackend.onrender.com/generate-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keyword }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching Joke: ${response.statusText}`);
    }

    const data = await response.json();
    const quote = data.quote;
    quoteContainer.style.border = '2px dashed black';

    quoteContainer.addEventListener('mouseover', () => {
        quoteContainer.style.backgroundColor = '#f5f5f5'; // Light background on hover
        quoteContainer.style.cursor = 'pointer'; // Change cursor to pointer
       // Add the transformation styles
  quoteContainer.style.transform = 'scale(1.5)';
  quoteContainer.style.msTransform = '-ms-transform: scale(1.5)'; // For IE 9
  quoteContainer.style.webkitTransform = '-webkit-transform: scale(1.5)'; // For Safari 3-8
    });
  
    quoteContainer.addEventListener('mouseout', () => {
      quoteContainer.style.backgroundColor = 'inherit'; // Reset background color
      quoteContainer.style.cursor = 'default'; // Reset cursor

      quoteContainer.style.transform = "none";
  quoteContainer.style.msTransform = "none"; // For IE 9
  quoteContainer.style.webkitTransform = "none"; // For Safari 3-8

    });

    // Display generated Shayari
    
    quoteContainer.textContent = quote;
    

    // Remove loading indicator (optional)
  } catch (error) {
    if ( error.message.includes('SAFETY')) {
      alert('Joke generation failed due to safety concerns. Please try a different keyword.');
    }else{
      console.error('Error generating Joke:', error);
    quoteContainer.textContent = 'Joke generation failed.';
    }
      
  }
});





