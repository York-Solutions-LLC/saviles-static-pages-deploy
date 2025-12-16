
export default {
  basePath: '/saviles-static-pages-deploy',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
