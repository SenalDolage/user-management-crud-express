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
            res.send(response);
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

/** 
 * Get all or single user(s)
 */
exports.find = (req, res) => {

}

/** 
 * Update a user
 */
exports.update = (req, res) => {

}

/** 
 * Delete a new user
 */
exports.delete = (req, res) => {

}