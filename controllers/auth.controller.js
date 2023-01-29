const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/user');
const constants = require('../utils/constants');
const jwt = require('jsonwebtoken');
const config = require('../configs/auth.config');

exports.signup = async (req, res) => {
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password,10);

    try {
        const user = await User.create({email,password});
        res.status(201).send({
            message: "Signed up successfully.",
            user: user
        });
    } catch (err) {
        res.status(500).send({
            message: "Internal server error."
        })
    }
}

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).send({
            message: "User id does not exists"
        })
    }


    let isCorrectPassord = bcrypt.compareSync(password, user.password);

    if (!isCorrectPassord) {
        return res.status(401).send({
            message: "Username or password incorrect."
        })
    }

    const token = jwt.sign({ id: user.email }, "SECRET_KEY", { expiresIn: '120d' });

    return res.status(200).send({
        email: user.email,
        accessToken: token,
    })
}