# Content-Generator App
![content](https://github.com/rodeo12/Shayari-Generator/assets/112781993/a7c4f372-c3a2-4306-bf07-12ef3799b798)

# Introduction
    This Content Generator App allows users to enter a keyword and receive a creatively generated Shayari poem,joke,quote, story based on that keyword. It utilizes Gemini API (from Google AI) model for creative text generation.

# Project Type

    Fullstack (Frontend & Backend)

# Deployed App

    * Frontend:  https://contentgenerator12.netlify.app/
    * Backend:   https://shayarigeminibackend.onrender.com
    

# Directory Structure

shayari-generator/
    ├── backend/  (Node.js server code)
    │   ├── package-lock.json
    │   ├── package.json
    │   └── server.js
    │
    ├── frontend/  (HTML, CSS, and JavaScript code)
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    └── README.md  (This file)

# Features

    Generates a Shayari poem based on the entered keyword by the user, using OpenAI's API.
    Generates a Joke based on the entered keyword by the user, using OpenAI's API.
    Generates a Quote based on the entered keyword by the user, using OpenAI's API.
    Generates a Story based on the entered keyword by the user, using OpenAI's API.
    
    
# Design Decisions & Assumptions

    Used Gemini Api for creative text generation due to its ability to generate different creative text formats.
    Assumed users have a basic understanding of what content generation is.
    Installation & Getting Started

# Clone this repository:

    Git Bash
    Use code with caution & do not copy the code.
    git clone https://github.com/rodeo12/Shayari-Generator
    
    cd shayari-generator
    cd backend
    Install dependencies: npm install express dotenv @google/generative-ai cors
    
    Create a .env file in the project root directory and add your OpenAI API key:
    API_KEY=your_openai_api_key
    Run the server: npm start

This will start the server on port 3000 by default.

Usage

Open http://localhost:3000 (or your server's URL) in a web browser.
Enter a keyword in the input field.
Click the "Generate Shayari" button.
The generated Shayari will be displayed below the button.

# Source for Reference
    https://ai.google.dev/gemini-api/docs

# Technology Stack

    Frontend: HTML, CSS, JavaScript
    Backend: Node.js, Express.js
    External API: OpenAI API
