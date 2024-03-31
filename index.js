const express = require('express');
const app = express();
const PORT = 3000;
const blogRouter = require('./Routes/blogRouter');
const tagRouter = require('./Routes/tagRouter');
const blogTagRelationRouter = require('./Routes/blogTagRelationRouter');
const searchRouter = require('./Routes/searchRouter');
const userRouter = require('./Routes/userRouter');
const { sequelize, connectToDb } = require('./Configuration/database');
require('./Schemas/blogSchema');
require('./Schemas/tagSchema');
require('./Schemas/blogTagRelationSchema');
require('./Schemas/userSchema')

app.use(express.json());
app.use('/api/v1',blogRouter);
app.use('/api/v1',tagRouter);
app.use('/api/v1',blogTagRelationRouter);
app.use('/api/v1',searchRouter);
app.use('/api/v1',userRouter);

async function startServer() {
    try {
      await connectToDb();
      app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Error starting the server:', error);
    }
  }
  
  startServer();