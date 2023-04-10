const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    ['/api', '/api2'],
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
      router: {
        '/api2': 'http://localhost:3070',
      },
    })
  );
};
