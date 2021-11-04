const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server started on port 5000');
});
