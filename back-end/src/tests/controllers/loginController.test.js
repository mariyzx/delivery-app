const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const loginService = require('../../services/login.service');
const { responseUser } = require('../mocks/User');
const loginController = require('../../controllers/login.controller');

chai.use(chaiHttp);
const { expect } = chai;

describe('Login controller >', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('findOne >', () => {
    it('200 > É possível fazer login corretamente', async () => {
      sinon.stub(loginService, 'login').resolves(responseUser);
  
      const user = await chai.request(app).post('/login')
      .set('Authorization', responseUser.token)
      .send({
        email: 'zebirita@email.com',
        password: '$#zebirita#$'
      });
  
      expect(user.status).to.be.deep.equal(200)
    });

    it('400 > Não é possível fazer login com credenciais inválidas', async () => {
      sinon.stub(loginService, 'login').resolves(responseUser);
  
      const user = await chai.request(app).post('/login')
      .set('Authorization', responseUser.token)
      .send({
        password: '$#zebirita#$'
      });
      
      expect(user.status).to.be.deep.equal(400)
      expect(user.body.message).to.be.deep.equal('Not found')
    });

    it('404 > Não é possível fazer login com credenciais incorretas', async () => {
      sinon.stub(loginService, 'login').resolves(null);
  
      const user = await chai.request(app).post('/login')
      .set('Authorization', responseUser.token)
      .send({
        email: 'incorret@email.com',
        password: '$#zebirita#$'
      });
      
      expect(user.status).to.be.deep.equal(404);
      expect(user.body.message).to.be.deep.equal('Invalid fields');
    })
  });
})