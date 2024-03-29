module.exports =
    function authenticationMiddleware() {
        return function (req, res, next) {
            if (req.isAuthenticated(res.locals.user = req.user)) {
                return next()
            }
            res.redirect('/login')
        }
    };