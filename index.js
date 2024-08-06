// Importing dependencies
import express from 'express';
import axios from 'axios';

// Creating an instance of the Express app
const app = express();

// A simple route to handle HTTP GET requests to the root URL ("/")
app.get('/', (req, res) => {
  // Respond with a "Hello World" message
  res.send('Hello World');
});

// Starting the server and listening on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
