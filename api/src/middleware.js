const bcrypt = require('bcrypt');

const checkAdminPassword = (req, res, next) => {
    if (typeof req.isAdmin === 'undefined') {
        req.isAdmin = false;
    }
    console.log(req.body)
    const encryptedPassword = req.body.password;

    bcrypt.compare("admin", encryptedPassword, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        req.isAdmin = result;

        next();
    });
};

module.exports = checkAdminPassword;
