const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware(
            '/alju01-member',
            {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/alju01-member': ''
                },
                changeOrigin: true,
            }
        )
    );
    app.use(
        createProxyMiddleware(
            '/aljd01-code',
            {
                target: 'http://localhost:9740',
                pathRewrite: {
                    '^/aljd01-code': ''
                },
                changeOrigin: true,
            }
        )
    );
};