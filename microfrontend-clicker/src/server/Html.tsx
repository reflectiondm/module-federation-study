import React, { ReactElement } from 'react';

interface HtmlProps {
  scriptTags: ReactElement[];
}

export const Html: React.FC<HtmlProps> = ({ children, scriptTags }) => {
  return (
    <html>
      <head>{scriptTags}</head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
};
