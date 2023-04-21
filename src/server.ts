import express from 'express';
import { router, bookController } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(8080, () => {
    console.log('Listening on port localhost:8080/');
})

export { app }
