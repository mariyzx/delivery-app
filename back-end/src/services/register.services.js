const { User } = require('../database/models')
const md5 = require('md5')

const createUser = async({email, password, name}) => {
    const createUser = await User.findOne({ where: { email } })
    
    if (createUser) {
        return { status: 409, message: 'User already registered'}
    }

    const passwordHash = md5(password)

   const newUser = await User.create({email, name, password: passwordHash, role: 'customer'})
   const { password:_ , ...userNoPassword } = newUser.dataValues
   return {status: null, message: userNoPassword};
}

module.exports = {
    createUser,
}


