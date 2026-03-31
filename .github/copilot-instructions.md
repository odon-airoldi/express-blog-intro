# Copilot Workspace Instructions

## Overview
This project is an Express.js blog API. It includes:
- A welcome route returning a simple text message
- An array of at least 5 blog post objects (title, content, image, tags)
- A `/bacheca` route returning the posts as JSON
- Static asset configuration for serving post images

## Build & Run
- Install dependencies: `npm install`
- Start server: `npm start` or `node index.js` (if entry is `index.js`)

## Conventions
- All blog posts are stored in an in-memory array in the main server file
- Images are placed in a `public/` or `assets/` directory and served statically
- Use `express.static` middleware for static files
- API returns JSON for `/bacheca`, plain text for the welcome route

## Example Prompts
- "Aggiungi un nuovo post all'array dei post."
- "Rendi la rotta `/bacheca` filtrabile per tag."
- "Aggiungi la validazione dei dati in POST."

## Links
- See [README.MD](README.MD) for exercise requirements.
