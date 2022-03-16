// @ts-check

/** server/app.js */
/** Required Node.js modules */
const Express = require('express');
const Prisma = require('prisma/prisma-client');
const path = require('path');

/** Prisma client */
const prisma = new Prisma.PrismaClient();
 
/** Initialize Express */
const app = Express();
const port = 5000;
app.use(Express.json());

/** Routes */

/** Serve the compiled client React app from the build directory as the root of the web server */
app.use(Express.static(path.join(__dirname, '..', 'client', 'build')));

/** Express routes are listed first come first serve - the first routes listed take precedence if there are conflicting paths */

/** Simple route to check that the server is running */
app.get('/status', (req, res) => {
  res.send({ "server_online": true });
});

/** Get the full list of baked goods, return the object in our response */
app.get('/products', async (req, res) => {
  try {
     const goods = await prisma.goods.findMany();
     res.status(200).send(goods);
  }
   /** When Prisma fails to read from database, catch the error and send it as our response */
   catch (err) {
    res.status(500).send({error: err.message});
 }
});

 /** Update an existing product */
app.post("/products/update", async (req, res) => {
   try {
     /** Use Prisma to write the data to our MySQL database */
     await prisma.goods.update({
       where: {
          id: req.body.id
       },
       data: {
         name: req.body.name, 
         type: req.body.type,
         price: req.body.price,
         description: req.body.description,
         image: req.body.image,
         stock: req.body.stock
       }
     });
     /** Send a response telling the user our data has been written */
     return res.status(200).send({"message": "OK"});
   }
   /** When Prisma fails to write to database, catch the error and send it as response */
   catch (err) {
     res.status(500).send({error: err.message});
   }
 });

/** Server */
app.listen(port, () => {
  console.log(`API listening on localhost: ${port}`);
});