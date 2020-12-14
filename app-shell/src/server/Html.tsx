import React from 'react';

interface HtmlProps {
    scripts: string[]
}

export const Html: React.FC<HtmlProps> = ({children, scripts}) =>{
const scriptTags = scripts.map(scriptSrc => <script key={scriptSrc} src={scriptSrc} async></script>)
return (<html >
    <head>
        {scriptTags}
    </head>
    <body>
        <div id="app">
            {children}
        </div>
    </body>
</html>)
};