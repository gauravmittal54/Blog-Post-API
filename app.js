const express = require('express');
const app = express();
const port = 3000;
const router = require('./api/src/router')
const checkAdminPassword = require('./api/src/middleware');
const { sequelize } = require('./api/src/schema');


app.use(express.json());
app.use(checkAdminPassword);
app.use('/api/v1',router);

app.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err);
    } else {
      console.log(`Server is running on http://localhost:${port}`);
    }
  });

