const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        const userExists = await db.helo_users.check_helo_user({username});
        if (userExists[0]) {
            return res.status(400).send('Username already taken')
        }
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        const newUser = await db.helo_users.register_helo_user({username, password: hash});
        req.session.helo_user = newUser[0];
        res.status(201).send(req.session.helo_user);
    },

    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        const userFound = await db.helo_user_check([username])
        if (!userFound[0]) {
            return res.status(200).send('Incorrect username, try again!');
        }
        const authenticated = bcrypt.compareSync(password, userFound[0].hash_value)
        if (authenticated) {
            req.session.helo_user = {id: userFound[0].id, username: userFound[0].username}
            res.status(200).send(req.session.helo_user)
        } else {
            return res.status(401).send('Incorrect username/password')
        }
    }
}