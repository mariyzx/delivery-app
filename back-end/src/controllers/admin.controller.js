const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const adminService = require('../services/admin.service');

const secret = readFileSync('jwt.evaluation.key', 'utf-8');

const registerAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;
  const { authorization } = req.headers;

  // if (authorization) {
  //     const decoded = jwt.verify(authorization, secret); // verifica se token pertence a um adm
  //     if (decoded.data.role !== "administrator") {
  //         return res.status(409).json('Not an admin');
  //     } else {
  //         const { status, message } = await adminService
  //             .createUserAdmin({ name, email, password, role });
  //         if (status) return res.status(status).json({ message });
  //         return res.status(201).json(message);
  //     }
  // } 
  // return res.status(409).json('Not an admin'); //
  
  try {
    const decoded = jwt.verify(authorization, secret);

    if (decoded.data.role !== 'administrator') {
      return res.status(409).json('Not an admin');
    }

    const { status, message } = await adminService.createUserAdmin({
      name,
      email,
      password,
      role,
    });

    return res.status(status || 201).json(message);
  } catch (error) {
    return res.status(409).json('Not an admin');
  }
};

module.exports = {
  registerAdmin,
};