import express from 'express';

const app = express();
const port = process.env.PORT || 7000;

// Serve static files from the 'dist' folder
app.use(express.static('./dist'));

// Define a catch-all route to serve 'index.html'
app.get('*', (req, res) => {
  res.sendFile('./dist/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
