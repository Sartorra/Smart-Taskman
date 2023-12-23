import express, { Request, Response } from 'express';

function run() {
    const app = express();

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello from server worker');
    });
  
    app.listen(3000, () => {
      console.log('Server worker started');
    });
}


export { run };