
const express = require('express');

const path = require('path');

const app = express();

const absolutePath = path.join(__dirname, 'public')
const public = express.static(absolutePath);
app.use(public);


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
