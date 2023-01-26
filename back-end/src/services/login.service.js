const Joi = require('joi');
const md5 = require('md5');
const jwtUtil = require('../utils/jwt.utils');

const { User } = require('../database/models');

const validateBody = (params) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error, value } = schema.validate(params);

  if (error) return { type: 400, message: 'Invalid fields' };

  return value;
};

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
  });

  const verificaSenha = md5(password);

  if (!user || user.password !== verificaSenha) {
    return null;
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  const { role, name } = userWithoutPassword;
  
  return ({ email, name, role, token });
};

module.exports = { validateBody, login };
