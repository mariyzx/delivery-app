const md5 = require('md5');
const { User } = require('../database/models')

const createUserAdmin = async ({ email, password, name, role }) => {
    const createAdmin = await User.findOne({ where: { email } })

    if (createAdmin) {
        return { status: 409, message: 'User already registered' };
    }

    const passwordHash = md5(password);

   const newUserAdmin = await User.create({ email, name, password: passwordHash, role });
   const { password: _, ...userNoPassword } = newUserAdmin.dataValues;
   return { status: null, message: userNoPassword };
};

module.exports = {
    createUserAdmin,
}