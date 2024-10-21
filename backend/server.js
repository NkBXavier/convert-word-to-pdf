const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const data = [
  { id: 1, name: 'Document 1', info: 'Some information from the database' },
  { id: 2, name: 'Document 2', info: 'Other information from the database' }
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
