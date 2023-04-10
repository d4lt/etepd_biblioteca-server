import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(8080, () => {
    console.log('Listening on port localhost:3333/');
})

export { app }
