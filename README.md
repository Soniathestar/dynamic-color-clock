# Dynamic Color Clock

A simple React + Vite application that displays a live digital clock showing the current date and time. The project uses date-fns for date formatting and includes a styled interface using CSS.

# Features
Live updating clock (updates every second)
Displays full date and time in a readable format
Built with React and Vite
Uses date-fns for date formatting
Styled with CSS for a modern UI
Tech Stack
React
Vite
JavaScript (ES6+)
date-fns
CSS
# Project Structure
color-clock/
│
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styling
│   ├── main.jsx         # Entry point
│
├── index.html
├── package.json
└── README.md
# Installation & Setup
1. Clone the repository
git clone https://github.com/Soniathestar/dynamic-color-clock.git
2. Navigate into the project folder
cd dynamic-color-clock
3. Install dependencies
npm install
4. Install date-fns
npm install date-fns@2.30.0
5. Start the development server
npm run dev
6. Open in browser
http://localhost:5173
# How It Works
useState stores the current time.
useEffect runs a timer that updates the time every second.
setInterval ensures the clock stays live.
date-fns formats the date into a readable string.


To save and push changes:
git add .
git commit -m "Update project"
git push origin main

# Author
Sonia Ngaruiya

# Screenshot
(./assets/screenshots/screenshot.png)