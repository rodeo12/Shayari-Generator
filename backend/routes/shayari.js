const express = require('express');
const router = express.Router();
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai"); 

const API_KEY = process.env.API_KEY;


//API endpoint to generate Shayari
router.post('/', async (req, res) => {
    try {
      
        // Extract keyword from request body
        if (!req.body.keyword) {
            return res.status(400).json({ message: 'Missing keyword in request body' });
            
          }
          const genAI = new GoogleGenerativeAI(API_KEY);
          const keyword = req.body.keyword;

        // Check if API key is set in environment variable
        if (!API_KEY) {
            return res.status(401).json({ message: 'Missing GEMINI_API_KEY environment variable' });
        }

        // Generate Shayari and send response
        const shayari = await generateShayari(keyword, genAI);
        res.json({ shayari });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

 // Function to generate Shayari
 async function generateShayari(keyword, genAI) {
  try {

      // Get the Gemini Pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});

      // Prompt: Include keyword and specify creative text generation
      const prompt = `Tell me a nice shayari on ${keyword} in less than 50 words in hindi`;

      // Generate content
      const result = await model.generateContent(prompt);
      const response = await result.response;

      // Extract generated Shayari (handle potential errors)
      const shayari = response.text() || 'Could not generate Shayari at this time.';
// console.log(shayari)
      return shayari;
  } catch (error) {
    if ( error.message.includes('SAFETY')) {
      console.log('Shayari generation failed due to safety concerns,try with a different keyword:', error);
      return 'Shayari generation failed due to safety concern. Please try a different keyword.';
    }else{
      console.error('Error generating Shayari:', error);
    }          
  }
}

module.exports= router ;