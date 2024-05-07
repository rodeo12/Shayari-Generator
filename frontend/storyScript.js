//Shayari generation//

const newWordInput = document.getElementById('keyword');
const generateStory = document.getElementById('generate-story');
 const storyContainer = document.getElementById('shayari-container');


 generateStory.addEventListener('click', async () => {
  const keyword = newWordInput.value.trim();

  // Basic validation (optional)
  if (!keyword) {
    alert('Please enter a keyword');
    return;
  }

  // Show loading indicator (optional)
  
  storyContainer.textContent = 'Loading...';
 

  try {
    // Fetch Shayari from backend API (replace with actual URL)
    const response = await fetch('https://shayarigeminibackend.onrender.com/generate-story', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keyword }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching Joke: ${response.statusText}`);
    }

    const data = await response.json();
    const story = data.story ;
    storyContainer.style.border = '2px dashed black';

    storyContainer.addEventListener('mouseover', () => {
        storyContainer.style.backgroundColor = '#f5f5f5'; // Light background on hover
        storyContainer.style.cursor = 'pointer'; // Change cursor to pointer
       // Add the transformation styles
  storyContainer.style.transform = 'scale(1.5)';
  storyContainer.style.msTransform = '-ms-transform: scale(1.5)'; // For IE 9
  storyContainer.style.webkitTransform = '-webkit-transform: scale(1.5)'; // For Safari 3-8
    });
  
    storyContainer.addEventListener('mouseout', () => {
      storyContainer.style.backgroundColor = 'inherit'; // Reset background color
      storyContainer.style.cursor = 'default'; // Reset cursor

      storyContainer.style.transform = "none";
  storyContainer.style.msTransform = "none"; // For IE 9
  storyContainer.style.webkitTransform = "none"; // For Safari 3-8

    });

    // Display generated Shayari
    
    storyContainer.textContent = story;
    

    // Remove loading indicator (optional)
  } catch (error) {
    if ( error.message.includes('SAFETY')) {
      alert('Joke generation failed due to safety concerns. Please try a different keyword.');
    }else{
      console.error('Error generating Joke:', error);
    storyContainer.textContent = 'Joke generation failed.';
    }
      
  }
});





