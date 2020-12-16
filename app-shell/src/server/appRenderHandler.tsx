import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
import { App } from '../common/App';
import { Html } from './Html';

export const handleAppRender = (req: Request, res: Response) => {
  const stats = path.resolve(__dirname, '../client/loadable-stats.json');
  const extractor = new ChunkExtractor({
    statsFile: stats,
  });

  const app = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const jsx = extractor.collectChunks(app);
  const scripts = extractor.getScriptElements();
  const appMarkup = renderToString(<Html scriptTags={scripts}>{jsx}</Html>);

  res.send(`<!doctype html>${appMarkup}`);
};
