# 🍺 Projeto TryBeer!

Nessa aplicação, foram criados e integrados tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja.
O objetivo do TryBeer é agilizar a vida do vendedor e das pessoas que compram seus produto, dessa forma, o aplicativo possui:

  ``Acesso via login``
  > Tanto clientes, pessoas vendedoras e quem administra o sistema, têm acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
  
  ``Fazer a comunicação entre clientes e pessoas vendedoras``
  > A pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos possuem detalhes sobre seus pedidos;
  
  > Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

  É possivel fazer login como pessoa vendedora utilizando o email ``fulana@deliveryapp.com`` e senha ``fulana@123``, pessoa administradora com email ``adm@deliveryapp.com`` e senha ``--adm2@21!!--`` e como consumidor com email ``zebirita@email.com``  e senha ``$#zebirita#$``;
  
  ## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Instalação](#install)** para saber como rodar o projeto.

### 📋 Pré-requisitos

  ``MySQL``
  > O projeto utiliza o banco de dados MySQL. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04) como instalá-lo.

  ``Node``
  > O projeto espera que sua versão do node seja a 16.
  
## 🔧 Instalação <a name="install"></a>

Clone o repositório:
```
git@github.com:mariyzx/delivery-app.git.
```
> ✨ Complete o arquivo .env com suas variáveis de ambiente.
- Existe um arquivo `.env.example` para saber quais são as informações.

Instale as dependências com `npm dev:prestart` e `npm install` na raíz do projeto.


Utilize o comando `npm run dev` para rodar o front-end e o back-end.

## ⚙️ Executando os testes

Para executar os testes do projeto TryBeer basta ir até a pasta `back-end` ou `front-end` e utilizar o comando `npm test`.

## 🛠️ Construído com

* [Javascript](https://www.javascript.com/) - Linguagem utilizada.
* [MySQL](https://www.mysql.com/) - Banco de dados.
* [Node.JS](https://nodejs.org/en/) - Ambiente de execução.
* [Express](https://expressjs.com/pt-br/) - Framework para Node.js.
* [Sequelize](https://sequelize.org/) - ORM em Node.js para MySQL.
* [Mocha](https://mochajs.org/) - Framework de testes.
* [Chai](https://www.chaijs.com/) - Framework de testes.
* [Sinon](https://sinonjs.org/) - Framework de testes.
* [JWT](https://jwt.io/) - Método de autenticação.
* [React](https://pt-br.reactjs.org/) - Linguagem utilizada.
* [Styled Components](https://styled-components.com/) - Linguagem de estilização.
* [Axios](https://axios-http.com/ptbr/docs/intro) - Cliente HTTP.

## ✍ Desempenho

O projeto TryBeer foi desenvolvido por [Mariana Werneck](https://www.linkedin.com/in/marinhomariana8/), [Marco Túlio Huara](https://www.linkedin.com/in/marcotuliohuara), [Lizandra Debussy](https://www.linkedin.com/in/lizandra-debussy/), [Crisna Bezerra](https://www.linkedin.com/in/crisna-bezerra/) e [Jaiana Santos](https://www.linkedin.com/in/jaiana-s/) durante o curso de Desenvolvimento Web na [Trybe](https://www.betrybe.com/)!

## 🔨 Futuras alterações

Como sempre há algo para melhorar, essas são algumas ideias para implementar no TryBeer no futuro:

* Validação de campos com `Joi` ou `Zod`;
* Fazer deploy da aplicação na `Railway` e `Vercel`;

## 💚 Connect:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marinhomariana8/) [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
)](mailto:marinhomariana8@gmail.com)
