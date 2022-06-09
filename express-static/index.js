
const express = require('express');
const app = express();
const path = require('path');


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

const absolutePath = path.join(__dirname, 'public')

const public = express.static('public');
app.use(public);
