import express from 'express';
import path from 'path';
import { handleAppRender } from './appRenderHandler';

const app = express();

app.use('/client/', express.static(path.join(__dirname, '../client')));

app.get('*', handleAppRender);

app.listen(3001, () => console.log('clicker-app is running on port 3001'));
