const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 5000;

app.post('/artistAndCellNumber', async (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log('server started on port 5000');
});
