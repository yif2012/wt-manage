module.exports = (ctx, next) => {
    if (!ctx.session.id) return ctx.body = ctx.webCode.TIMEOUT()
    return next()
}