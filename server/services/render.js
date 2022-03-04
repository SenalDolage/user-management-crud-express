const axios = require('axios');

exports.homeRoute = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/api/user');
        res.render("index", { users: response.data });
    } catch (error) {
        res.status(500).send(error);
    }
    finally {
        res.end();
    }
}

exports.addUserRoute = (req, res) => {
    res.render("add-user");
    res.end();
}

exports.editUsereRoute = async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/user/${req.query.id}`);
        res.render("edit-user", { user: response.data });
    } catch (error) {
        res.send(error);
    }
    finally {
        res.end();
    }
}