const express = require('express');
require("dotenv").config();
const cors= require("cors");


const { GoogleGenerativeAI } = require("@google/generative-ai"); // Assuming this library exists



const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000
const API_KEY = process.env.API_KEY;



// const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro"});

//   const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();

  // Function to generate Shayari
  async function generateShayari(keyword, genAI) {
    try {
      
      

        // Get the Gemini Pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});

        // Prompt: Include keyword and specify creative text generation
        const prompt = `Tell me a shayari on ${keyword} in less than 50 words in hindi`;

        // Generate content
        const result = await model.generateContent(prompt);
        const response = await result.response;

        // Extract generated Shayari (handle potential errors)
        const shayari = response.text() || 'Could not generate Shayari at this time.';
// console.log(shayari)
        return shayari;
    } catch (error) {x
      if ( error.message.includes('SAFETY')) {
        console.log('Shayari generation failed due to safety concerns,try with a different keyword:', error);
        return 'Shayari generation failed due to safety concern. Please try a different keyword.';
      }else{
        console.error('Error generating Shayari:', error);
      }
        
       
    }
}

//API endpoint to generate Shayari
app.post('/generate-shayari', async (req, res) => {
    try {
      
        // Extract keyword from request body
        if (!req.body.keyword) {
            return res.status(400).json({ message: 'Missing keyword in request body' });
            
          }
          const genAI = new GoogleGenerativeAI(API_KEY);
        const keyword = req.body.keyword;
        

        // Validate keyword (optional)

        // Check if API key is set in environment variable
        if (!API_KEY) {
            return res.status(401).json({ message: 'Missing GEMINI_API_KEY environment variable' });
        }

        // Create GoogleGenerativeAI instance with API key
       

      

        // Generate Shayari and send response
        const shayari = await generateShayari(keyword, genAI);
        res.json({ shayari });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// module.exports = app;
