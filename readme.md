2020-12-16

@loadable/babel-plugin - is need to be installed for SSR loadable components to work
I had to switch to babel loader instead of tyescript-loader

npm i @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader -D 

For serverside rendering to be working 
    ```const LoadablePlugin = require('@loadable/webpack-plugin');```
has to be present int CLIENT webpack config. In the server handler you need to reference `loadable-stats.json` file from the client build.