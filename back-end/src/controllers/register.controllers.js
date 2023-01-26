const registerService = require('../services/register.services');

const registerUser = async (req, res) => {
    const { email, password, name } = req.body;
    const { status, message } = await registerService.createUser({ email, password, name });
    if (status) return res.status(status).json({ message });

    return res.status(201).json(message);
};

module.exports = { 
    registerUser,
};