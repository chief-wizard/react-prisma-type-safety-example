/** server/app.js */
/** Required Node.js modules */
const Express = require('express');
const Prisma = require('prisma/prisma-client');
const CORS = require('cors');
 
/** Prisma client */
const prisma = new Prisma.PrismaClient();
 
/** Initialize Express */
const app = Express();
const port = 5000;
app.use(Express.json());
app.use(CORS());
 
/** Routes */
app.get('/', async (req, res) => {
  res.send("Hello, Prisma and Express!");
});
 
/** Server */
app.listen(port, () => {
  console.log("API listening on localhost:%i", port);
});
/** Get the full list of baked goods, return the object in our response */
app.get('/products', async (req, res) => {
  try {
     const goods = await prisma.goods.findMany();
     res.status(200).send(goods);
  }
  /** When Prisma fails to read from database, catch the error and send it as response */
  catch (err) {
     res.status(500).send(err);
  }
});