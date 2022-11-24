function admin(req, res, next) {
    if (!req.user.role.includes("admin"))
        req.admin = true;
    else req.admin = false;
    next();
}
function editor(req, res, next) {
    if (!req.user.role.includes("editor"))
        req.editor = true;
    else req.editor = false;
    next();
}
function viewer(req, res, next) {
    if (!req.user.role.includes("viewer"))
        req.viewer = true;
    else req.viewer = false;
    next();
}
module.exports = { admin, editor, viewer };
//function admin(req, res, next) {
//    if (!req.user.role.includes("admin")) return res.status(403).send({
//        ok: false,
//        error: "Admin access denied"
//    });
//    next();
//}
//function editor(req, res, next) {
//    if (!req.user.role.includes("editor")) return res.status(403).send({
//        ok: false,
//        error: "Editor access denied"
//    });
//    next();
//}
//function viewer(req, res, next) {
//    if (!req.user.role.includes("viewer")) return res.status(403).send({
//        ok: false,
//        error: "Viewer access denied"
//    });
//    next();
//}
//module.exports = { admin, editor, viewer };