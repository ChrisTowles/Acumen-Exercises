import express, { Request, Response } from 'express';

const app = express();
const port = 3000;


// define a route handler for the default home page
app.get( "/", ( req: Request, res: Response ) => {
  res.json( { msg: "hello world." });
});


app.listen(port, () => {
  console.log(`location express application is running on port http://localhost:${port}.`);
});