const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Schemas/userSchema');

// Create a new user
router.post('/user', async (req, res) => {
    try {
        const { username, password, isAdmin } = req.body;

        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({
                success: 0,
                message: "Username already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword, isAdmin });

        return res.status(201).json({
            success: 1,
            data: newUser,
            message: "User created successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
