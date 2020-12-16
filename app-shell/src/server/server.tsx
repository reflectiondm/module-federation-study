import express from 'express';
import path from 'path';
import { handleAppRender } from './appRenderHandler';

const app = express();

app.use('/client/', express.static(path.join(__dirname, '../client')));

app.get('*', handleAppRender);

app.listen(3000, () => console.log('app-shell is running on port 3000'));
