# Shayari-Generator App


# Introduction
    This Shayari Generator App allows users to enter a keyword and receive a creatively generated Shayari poem based on that keyword. It utilizes Gemini API (from Google AI) model for creative text generation.

# Project Type

    Fullstack (Frontend & Backend)

# Deployed App

    * Frontend:  [Link to your deployed frontend]
    * Backend:  [Link to your deployed backend]

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
    Displays the generated Shayari on the frontend.
    
# Design Decisions & Assumptions

    Used OpenAI's text-davinci-003 model for creative text generation due to its ability to generate different creative text formats.
    Assumed users have a basic understanding of what Shayari is.
    Installation & Getting Started

# Clone this repository:

    Git Bash
    Use code with caution.
    git clone https://github.com/rodeo12/Shayari-Generator
    Use code with caution & do not copy the code.
    Install dependencies:

    Bash
    cd shayari-generator
    cd backend
    npm install express dotenv @google/generative-ai cors



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