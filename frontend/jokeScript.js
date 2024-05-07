//Shayari generation//

const newkeywordInput = document.getElementById('keyword');
const generateJoke = document.getElementById('generate-joke');
 const jokeContainer = document.getElementById('shayari-container');


generateJoke.addEventListener('click', async () => {
  const keyword = newkeywordInput.value.trim();

  // Basic validation (optional)
  if (!keyword) {
    alert('Please enter a keyword');
    return;
  }

  // Show loading indicator (optional)
  
  jokeContainer.textContent = 'Loading...';
 

  try {
    // Fetch Shayari from backend API (replace with actual URL)
    const response = await fetch('https://shayarigeminibackend.onrender.com/generate-joke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keyword }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching Joke: ${response.statusText}`);
    }

    const data = await response.json();
    const joke = data.joke;
    jokeContainer.style.border = '2px dashed black';

    jokeContainer.addEventListener('mouseover', () => {
        jokeContainer.style.backgroundColor = '#f5f5f5'; // Light background on hover
        jokeContainer.style.cursor = 'pointer'; // Change cursor to pointer
       // Add the transformation styles
  jokeContainer.style.transform = 'scale(1.5)';
  jokeContainer.style.msTransform = '-ms-transform: scale(1.5)'; // For IE 9
  jokeContainer.style.webkitTransform = '-webkit-transform: scale(1.5)'; // For Safari 3-8
    });
  
    jokeContainer.addEventListener('mouseout', () => {
      jokeContainer.style.backgroundColor = 'inherit'; // Reset background color
      jokeContainer.style.cursor = 'default'; // Reset cursor

      jokeContainer.style.transform = "none";
  jokeContainer.style.msTransform = "none"; // For IE 9
  jokeContainer.style.webkitTransform = "none"; // For Safari 3-8

    });

    // Display generated Shayari
    
    jokeContainer.textContent = joke;
    

    // Remove loading indicator (optional)
  } catch (error) {
    if ( error.message.includes('SAFETY')) {
      alert('Joke generation failed due to safety concerns. Please try a different keyword.');
    }else{
      console.error('Error generating Joke:', error);
    jokeContainer.textContent = 'Joke generation failed.';
    }
      
  }
});





