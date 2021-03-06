const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        const userExists = await db.users.check_user({username});
        if (userExists[0]) {
            return res.status(400).send('Username already taken')
        }
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        const newUser = await db.users.register_user({username, password: hash});
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        const userFound = await db.user_check([username])
        if (!userFound[0]) {
            return res.status(200).send('Incorrect username, try again!');
        }
        const authenticated = bcrypt.compareSync(password, userFound[0].hash_value)
        if (authenticated) {
            req.session.user = {id: userFound[0].id, username: userFound[0].username}
            res.status(200).send(req.session.user)
        } else {
            return res.status(401).send('Incorrect username/password')
        }
    }
}