const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory array of blog posts
const posts = [
    {
        titolo: 'Benvenuto nel mio blog',
        contenuto: 'Questo è il primo post del mio blog Express!',
        immagine: '/images/post1.jpg',
        tags: ['introduzione', 'benvenuto']
    },
    {
        titolo: 'Node.js e Express',
        contenuto: 'Scopri come creare API REST con Express.',
        immagine: '/images/post2.jpg',
        tags: ['nodejs', 'express', 'api']
    },
    {
        titolo: 'Frontend vs Backend',
        contenuto: 'Differenze tra sviluppo frontend e backend.',
        immagine: '/images/post3.jpg',
        tags: ['frontend', 'backend', 'web']
    },
    {
        titolo: 'Consigli per JavaScript',
        contenuto: 'Ecco alcuni consigli utili per migliorare con JS.',
        immagine: '/images/post4.jpg',
        tags: ['javascript', 'tips']
    },
    {
        titolo: 'Imparare a programmare',
        contenuto: 'Le basi per iniziare a programmare da zero.',
        immagine: '/images/post5.jpg',
        tags: ['programmazione', 'iniziare']
    }
];

// Welcome route
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// /bacheca route
app.get('/bacheca', (req, res) => {
    res.json({ posts });
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
