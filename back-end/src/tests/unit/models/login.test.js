const { expect } = require('chai');
const sinon = require('sinon');
const { User } = require('../../../database/models');
const { responseUser, inputUser } = require('../mocks/User');


describe('Testando User model >', function () {
  afterEach(() => {
    sinon.restore();
  });

  describe('findOne >', () => {
    it('Retorna um objeto com as informações do usuário corretamente', async () => {
      sinon.stub(User, 'findOne').resolves(responseUser);

      const user = await User.findOne(inputUser.email)
      expect(user).to.be.equal(responseUser);
    });

    it('Retorna null caso o usuário não exista', async () => {
      sinon.stub(User, 'findOne').resolves(null);

      try {
        await User.findOne('emailinexistente@com')
      } catch (error) {
        expect(error.message).to.be.equal('Not found');
      }
    });

    it('Retorna erro 404 caso o usuário insira dados inválidos', async () => {
      sinon.stub(User, 'findOne').resolves(null);

      try {
        await User.findOne('emailinvalido@com')
      } catch (error) {
        expect(error.message).to.be.equal('Invalid field');
      }
    })
  });
})