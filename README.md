# Job Hunt - Busca de Emprego para Desenvolvedores

O Job Hunt é o resultado de um percurso dedicado, onde utilizei não apenas React e JavaScript, mas também uma série de outras tecnologias essenciais no desenvolvimento web moderno.

Através do Node.js, Express e Sequelize, construí uma plataforma robusta que simplifica a busca por oportunidades para desenvolvedores.

## Visão Geral

No vídeo que acompanha esta postagem, você terá uma visão detalhada de como o Job Hunt foi desenvolvido. Desde a criação de tabelas e modelos até a configuração de rotas para adicionar registros e inserir dados via Postman, cada etapa deste projeto foi uma oportunidade para aprender e crescer.

Além disso, implementei o Handlebars para criar uma interface de usuário atraente e responsiva, tornando a experiência do usuário ainda mais agradável.

A capacidade de resgatar dados, aplicar lógica de busca e adicionar informações ao banco de dados foi essencial para garantir que o Job Hunt ofereça uma solução abrangente para os desenvolvedores em busca de emprego.

## Funcionalidades

- **Criação de Tabelas e Modelos:** Utilização do Sequelize para definir e gerenciar modelos de dados.
- **Configuração de Rotas:** Implementação de rotas para adicionar e buscar dados utilizando Express.
- **Interface de Usuário:** Utilização do Handlebars para criar uma interface amigável e responsiva.
- **Busca e Filtro de Vagas:** Lógica de busca avançada para encontrar oportunidades de emprego.

## Demonstração

Você pode assistir a uma demonstração do desenvolvimento e funcionamento do Job Hunt no vídeo [aqui](https://github.com/ViniciusBorgesdeAraujo/tradingview/assets/105869015/bdb612bc-e996-4a7b-8f9d-f782d29dd85a).

## Estrutura do Projeto

```plaintext
job-hunt/
├── public/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   ├── app.js
│   ├── database.js
│   └── server.js
├── .gitignore
├── package.json
├── README.md
```

## Instalação

Siga os passos abaixo para clonar e rodar o projeto localmente.

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn instalado
- Banco de dados configurado

### Passos para instalação

1. **Clone o repositório:**

```bash
git clone [URL do Repositório]
```

2. **Navegue até o diretório do projeto:**

```bash
cd [nome do diretório]
```

3. **Instale as dependências:**

```bash
npm install
# ou
yarn
```

4. **Configure o banco de dados:**

   Crie um arquivo `.env` na raiz do projeto e adicione suas configurações de banco de dados:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
```

## Executar o Projeto

Depois de instalar as dependências e configurar o banco de dados, você pode executar o projeto localmente.

```bash
npm start
# ou
yarn start
```

Isso iniciará o servidor e você poderá acessar a aplicação através do seu navegador.

Agora você está pronto para explorar o Job Hunt e suas funcionalidades! Se precisar de mais alguma coisa, estou à disposição para ajudar!

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Vinicius Borges de Araujo - [GitHub](https://github.com/ViniciusBorgesdeAraujo)

---

Feito com ♥ por Vinicius Borges de Araujo.
