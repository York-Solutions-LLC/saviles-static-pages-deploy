
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/saviles-static-pages-deploy/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/saviles-static-pages-deploy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 472, hash: '82641bc9728df22a688db00898ec4e3f1181b83a2560972cb484d8cf6e26a3f8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: 'de54cd099f479e7e78852f8f6a96aa75e3b797edf70b6b0139ff434bb074fd00', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1806, hash: '02a5365283281bd1ee4851316963b161876bd14724fec0df22bb8a771e73bc33', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
