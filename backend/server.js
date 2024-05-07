const express = require('express');
require("dotenv").config();
const cors= require("cors");


const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000
// const API_KEY = process.env.API_KEY;


const jokeRoutes = require('./routes/joke');
const quoteRoutes = require('./routes/quote');
const shayariRoutes = require('./routes/shayari');
const storyRoutes = require('./routes/story');


//Middlewares
app.use(express.json());
app.use(cors());

app.use('/generate-joke', jokeRoutes);
app.use('/generate-quote', quoteRoutes);
app.use('/generate-shayari', shayariRoutes);
app.use('/generate-story', storyRoutes);




// Dummy Base Code
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

 
//Basic Get Route
app.get("/",(req,res)=>{
  res.send("Welcome to Shayari Generator Backend")
})




// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// module.exports = app;
