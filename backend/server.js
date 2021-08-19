import express from 'express';

const app = express();

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
  
app.listen(5000, ()=>{
    console.log('server listening at port 5000')
});