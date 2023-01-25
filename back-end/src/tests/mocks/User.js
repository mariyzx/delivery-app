require('dotenv').config();
const jwt = require('jsonwebtoken');

const inputCreateUser = {
  name: 'Delivery App Admin',
  email: 'adm@teste.com',
  password: 'senhavalida'
}

const inputLoginUser = {
  email: 'zebirita@email.com',
  password: '$#zebirita#$'
}

const inputLoginUserInvalid = {
  email: 'zebirita@email.com',
  password: '123'
}

const userWithoutPassword = {
  id: 3,
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  role: 'customer'
}

const responseUser = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJyb2xlIjoiY3VzdG9tZXIifSwiaWF0IjoxNjc0NTg3NjU3LCJleHAiOjE2NzQ2NzQwNTd9.y6Hh4vI8hiHc5nC7DRuXaikJVOnXQyWVBBvOzV2uG7g"
}

const jwtPayload = {
  email: 'teste@example.com',
  role: 'customer',
}

const fakeToken = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
  expiresIn: '5h',
  algorithm: 'HS256',
});

module.exports = { 
  inputCreateUser, 
  responseUser, 
  inputLoginUser, 
  inputLoginUserInvalid, 
  userWithoutPassword,
  jwtPayload,
  fakeToken
}