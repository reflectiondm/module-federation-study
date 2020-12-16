import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import { Request, Response } from 'express';
import { App } from '../common/App';
import { Html } from './Html';

export const handleAppRender = (req: Request, res: Response) => {
  const stats = path.resolve(__dirname, '../client/loadable-stats.json');
  const extractor = new ChunkExtractor({
    statsFile: stats,
    publicPath: 'client/',
  });

  const app = extractor.collectChunks(<App />);
  const scripts = extractor.getScriptElements();
  const appMarkup = renderToString(<Html scriptTags={scripts}>{app}</Html>);

  res.send(`<!doctype html>${appMarkup}`);
};
