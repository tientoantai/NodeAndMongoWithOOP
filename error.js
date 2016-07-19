module.exports = function (app) {

    /**
     * Catch all request is not handled by other routes
     * Process them as not found.
     */
    app.use(function (request, response, next) {
        var error = new Error('Not Found');
        error.status = 404;
        next(error);
    });

    /**
     * Error handlers development error handler
     * will print stacktrace
     */
    if (process.env['APP_DEBUG']) {
        app.use(function (error, request, response, next) {
            response.status(error.status || 500);
            response.json({
                code: error.code,
                message: error.message,
                error: error.stack
            });
        });
    }

    /**
     * Production error handler
     * no stacktraces leaked to user
     */
    app.use(function (error, request, response, next) {
        if (error.status) {
            // HTTP Error, need to be exposed to the client
            response.status(error.status);
            response.json({
                code: error.code,
                message: error.message
            });
        } else {
            // Internal server error
            response.status(500);
            response.json({
                code: error.code,
                message: 'Whoops, our server is down!'
            });
        }
    });
};