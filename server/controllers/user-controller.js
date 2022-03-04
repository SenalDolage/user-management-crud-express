var UserDb = require('../models/user');

/** 
 * Creating a new user
 */
exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }

    const user = new UserDb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    try {
        const response = await user.save(user);
        if (response) {
            // res.send(response);
            res.redirect('/add-user');
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

/** 
 * Get all or single user(s)
 */
exports.find = async (req, res) => {
    try {
        if (req.params.id) {
            const id = req.params.id;
            const response = await UserDb.findById(id);
            if (response) {
                res.send(response);
            } else {
                res.status(404).send({ message: `Error getting user with id ${id}. Check if user exists.` });
            }
        } else {
            const response = await UserDb.find();
            if (response) {
                res.send(response);
            }
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

/** 
 * Update a user
 */
exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }

    try {
        const id = req.params.id;
        const response = await UserDb.findByIdAndUpdate(id, req.body);
        if (response) {
            res.send(response);
        } else {
            res.status(404).send({ message: `Error updating user with id ${id}. Check if user exists.` });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

/** 
 * Delete a new user
 */
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await UserDb.findByIdAndDelete(id);
        if (response) {
            res.send({ message: 'User deleted sucessfully!' });
        } else {
            res.status(404).send({ message: `Error deleting user with id ${id}. Check if user exists.` });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}