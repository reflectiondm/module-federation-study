import express from 'express';
import path from 'path'
import { App } from '../common/App';
import { Html } from './Html';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

app.use('/client/', express.static(path.join(__dirname, '../client')))

app.get('*', (req, res) => {

    console.log(renderToString(<App />));
    const scripts = ['client/client.js']
    const appMarkup = renderToString(<Html scripts={scripts}><App /></Html>);

    res.send(`<!doctype html>${appMarkup}`)
});

app.listen(3000, () => console.log('app-shell is running on port 3000'));
