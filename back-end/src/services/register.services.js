const md5 = require('md5');
const { User } = require('../database/models');
const jwtUtil = require('../utils/jwt.utils');

const createUser = async ({ email, password, name }) => {
    const create = await User.findOne({ where: { email } });
    
    if (create) {
        return { status: 409, message: 'User already registered' };
    }

    const passwordHash = md5(password);

   const newUser = await User.create({ email, name, password: passwordHash, role: 'customer' });
   const { password: _, ...userNoPassword } = newUser.dataValues;
   const token = jwtUtil.createToken(userNoPassword);
   return { status: null, message: { ...userNoPassword, token } };
};

module.exports = {
    createUser,
};
