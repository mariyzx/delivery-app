require('dotenv').config();
const sinon = require('sinon');
const { expect } = require('chai');
const JWT = require('../../../utils/jwt.utils');
const jwt = require('jsonwebtoken');
const { responseUser, userWithoutPassword } = require('../../mocks/User');
const fs = require('fs');

describe('Testes unitários JWT Utils >', () => {
  describe('createToken >', () => {
    it('Criando token corretamente', async () => {
      // EM ANDAMENTO
    })
  })
})