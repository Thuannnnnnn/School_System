const jwt = require('jsonwebtoken');
const UserModel = require('../model/User');
require('dotenv').config();

async function generateTokenAndRedirect(req, res, payload) {
    if (req.user && req.user.emails && req.user.emails.length > 0) {
        const userData = await UserModel.getUserByEmail(req.user.emails[0].value)
        if (userData.length > 0) {
            console.log("200")
            console.log(userData[0].Role);
            const tokenPayload = {
                email: req.user.emails[0].value,
                role: userData[0].Role
            };
            console.log(tokenPayload)
            const token = jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
            console.log(token);

            return res.status(200).json({ token: "Bearer " + token });
        } else {
            console.log("404")
            return res.status(404).json({ message: 'User not found' });
        }
    } else {
        console.log("Không có email được cung cấp");
        return res.status(400).json({ message: 'No email provided' });
    }
}
function authenticateTokenForRole(role) {
    return function (req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1].slice(0, -1);
        if (!token) {
            return res.sendStatus(401);
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                console.log(err)
                console.log("abc")
                return res.sendStatus(403);
            }
            if (user.role !== role) {
                return res.sendStatus(403).json({ message: 'role' });
            }
            req.user = user;
            next();
        });
    };
}

module.exports = { generateTokenAndRedirect, authenticateTokenForRole };