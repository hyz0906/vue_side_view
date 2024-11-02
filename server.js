const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Configure proxy middleware
const proxy = createProxyMiddleware({
  target: 'https://www.baidu.com',
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    // Remove headers that prevent iframe embedding
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
  }
});

// Use proxy for all routes
app.use('/', proxy);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
}); 