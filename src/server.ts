import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(6969, () => {
    console.log('Listening on port 6969');
})

export { app }