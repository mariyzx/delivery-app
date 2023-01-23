import {expect} from 'chai';
import sinon from 'sinon';
import User from '../../../database/models/User';
import { inputUser, responseUser } from '../mocks/User';


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

      const user = await User.findOne('emailinvalido@teste.com')
      expect(user).to.be.equal(null);
    })
  })
})