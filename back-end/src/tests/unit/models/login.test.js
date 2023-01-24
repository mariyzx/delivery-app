const { expect } = require('chai');
const { describe } = require('pm2');
const sinon = require('sinon');
const { User } = require('../../../database/models');
const { responseUser, inputCreateUser } = require('../mocks/User');


describe('Testando User model >', function () {
  afterEach(() => {
    sinon.restore();
  });

  describe('create >', () => {
    // VAI FALHAR COM CTZ
    it('Retorna um objeto com as informações do usuário corretamente', async () => {
      sinon.stub(User, 'create').resolves(responseUser);

      const user = await User.create(inputCreateUser);
      expect(user).to.be.deep.equal(responseUser);
    });

    it('Não é possível cadastrar um usuário com dados inválidos', async () => {
      sinon.stub(User, 'create').resolves(null);

      try {        
        await User.create({
          name: 'erro',
          email: 'emailinvalido@co',
          senha: 123
        });
      } catch(error) {
        expect(error.message).to.be.deep.equal('Not found');
      }
    })
  })

  describe('findOne >', () => {
    it('Retorna um objeto com as informações do usuário corretamente', async () => {
      sinon.stub(User, 'findOne').resolves(responseUser);

      const user = await User.findOne(inputCreateUser.email)
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
    });
  });
})