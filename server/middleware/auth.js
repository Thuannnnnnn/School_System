const jwt = require('jsonwebtoken');
const UserModel = require('../model/User');
require('dotenv').config();

async function generateTokenAndRedirect(req, res) {
    if (req.user && req.user.emails && req.user.emails.length > 0) {
        const userData = await UserModel.getUserByEmail(req.user.emails[0].value);
        if (userData.length > 0) {
            const tokenPayload = {
                email: req.user.emails[0].value,
                role: userData[0].Role,
                studentId: userData[0].MaSV,
                TeacherId: userData[0].Te_Id
            };
            const token = jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });


            res.cookie('token', token);


            res.redirect('http://localhost:3000/home');
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } else {
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
                return res.redirect(403, 'http://localhost:5173/');
            }
            if (user.role !== role) {
                return res.sendStatus(403).json({ message: 'role' });
            }
            console.log("role: " + user.role)
            req.user = user;
            next();
        });
    };
}

module.exports = { generateTokenAndRedirect, authenticateTokenForRole };