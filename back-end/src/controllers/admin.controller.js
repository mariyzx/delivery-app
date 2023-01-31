const adminService = require('../services/admin.service');

const registerAdmin = async (req, res) => {
    const { name, email, password, role } = req.body;
    const { authorization } = req.headers;

    if (authorization) {
        const { status, message } = await adminService.createUserAdmin({ name, email, password, role });
        if (status) return res.status(status).json({ message });
        return res.status(201).json( message );
    } 
    return res.status(409).json('Not is admin')
};

module.exports = {
    registerAdmin,
};