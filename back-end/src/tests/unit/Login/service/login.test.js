const { expect } = require('chai');

const sinon = require('sinon');
const { User } = require('../../../../database/models')
const UserService = require('../../../../services/login.service');
const { responseUser, inputLoginUser, inputLoginUserInvalid, userWithoutPassword } = require('../../../mocks/User');
const JWT = require('../../../../utils/jwt.utils');

describe('Testes unitários Login Service >', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('login >', () => {
    it('200 - Login com sucesso', async () => {
      sinon.stub(User, 'findOne').resolves(responseUser);
      const paswordStub = sinon.stub(UserService, 'login').resolves(responseUser) // token

      const user = await UserService.login(inputLoginUser);

      sinon.assert.calledWith(paswordStub, inputLoginUser)

      expect(user).to.be.deep.equal(responseUser)
    });

    it('Não é possível fazer login com as credenciais incorretas', async () => {
      const findOneStub = sinon.stub(User, 'findOne').resolves(null);

      const user = await UserService.login(inputLoginUserInvalid);
      sinon.assert.calledWith(findOneStub, { where: { email: inputLoginUserInvalid.email }});
      
      expect(user).to.be.equal(null)
    });
  });
})