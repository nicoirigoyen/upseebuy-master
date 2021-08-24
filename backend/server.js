import express from 'express';
import mongoose from 'mongoose';
import userRouter from '../backend/routers/userRouter.js';
import productRouter from '../backend/routers/productRouter.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//generamos la conexion
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

  app.get('/api/products', (req, res) => {
    res.send(data.products);
  });

  app.use('/api/users', userRouter); 
  app.use('/api/products', productRouter)
  app.get('/', (req, res) => {
    res.send('Server is ready!');
  });
 
  app.use((err, req, res, next) =>{
    res.status(500).send({message: err.message})
  })
  
app.listen(process.env.PORT || 5000, ()=>{
    console.log('server listening at port 5000')
});