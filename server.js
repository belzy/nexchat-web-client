require('dotenv').config();
const path    = require('path');
const express = require('express');
const server  = express();
const PORT    = process.env.PORT || 3000;

server.use(express.static(path.resolve(__dirname, 'dist')));

server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }`);
});