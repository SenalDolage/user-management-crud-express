exports.homeRoute = (req, res) => {
    res.render("index");
    res.end();
}

exports.addUserRoute = (req, res) => {
    res.render("add-user");
    res.end();
}

exports.editUsereRoute = (req, res) => {
    res.render("edit-user");
    res.end();
}