require('dotenv').config();
const sinon = require('sinon');
const { expect } = require('chai');
const JWT = require('../../../utils/jwt.utils');
const jwt = require('jsonwebtoken');
const { responseUser, userWithoutPassword, jwtPayload, fakeToken } = require('../../mocks/User');

describe('Testes unitários JWT Utils >', () => {
  afterEach(() => sinon.restore())

  describe('createToken >', () => {
    it('Criando token corretamente', async () => {
      const signStub = sinon.stub(jwt, 'sign').returns('signedToken');

      const token = JWT.createToken('token');

      sinon.assert.calledWith(signStub, {data: 'token'}, process.env.JWT_SECRET, {
        expiresIn: '1d', algorithm: 'HS256'
      });

      expect(token).to.be.equal('signedToken')
    })
  });

  describe('validateToken >', () => {
    it('Validando token corretamente', () => {
      const verifyStub = sinon.stub(jwt, 'verify').returns(jwtPayload);
      const verify = JWT.validateToken(fakeToken);

      sinon.assert.calledWith(verifyStub, fakeToken);
      expect(verify).to.be.an('object');
    });

    it('Retorna erro ao tentar validar um token expirado ou inválido', () => {
      const token = JWT.validateToken('invalid');
 
      expect(token.error).to.be.equal('Expired or invalid token')
    })
  })
})