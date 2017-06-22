
## Exemplo node.js utilizando design pattern MVC ##


----------
**Esse repositório demonstra de forma simples a utilização de node.js para criar uma web application em MVC e também um CRUD básico com banco de dados MySQL. As views são tratadas dinâmicamente com o módulo EJS (Embedded JavaScript) que é um engine interpretador de javascript em páginas html.**

*O projeto é desenvolvido a partir do conteúdo do curso de node.js na plataforma de cursos online da [Udemy](https://www.udemy.com/curso-completo-do-desenvolvedor-nodejs).*

Requisitos
----------

 - [node.js](https://nodejs.org)
 - [npm - já vem instalado com node](https://www.npmjs.com/)
 - [MySQL Server](https://dev.mysql.com/downloads/mysql/)
 - [Editor de Texto - Visual Studio Code](https://code.visualstudio.com/)
 
 **Eu recomento utilizar o VS Code, é uma ferramenta completa para desenvolver em diversas linguagens, além de ter diversas extensões, possui terminal de comando (já que no node é necessário acessar o prompt de comando para subir servidor, instalar pacotes com npm etc...), com o Visual Studio Code também é possível fazer o debug do código.**

*Outros editores de texto: *

 - [Sublime](https://www.sublimetext.com/)
 - [Notepad++](https://notepad-plus-plus.org/download/v7.4.2.html)
 
 ## Módulos ##

 - [$ npm install express --save](https://www.npmjs.com/package/express)
 - [$ npm install express-validator --save](https://www.npmjs.com/package/express-validator)
 - [$ npm install consign --save](https://www.npmjs.com/package/consign)
 - [$ npm install ejs --save](https://www.npmjs.com/package/ejs)
 - [$ npm install body-parser --save](https://www.npmjs.com/package/body-parser)
 - [$ npm install mysql --save](https://www.npmjs.com/package/mysql)
 
 ## Banco de Dados ##
Após instalar corretamente o MySQL Server, se você utilizou a configuração de instalação de desenvolvedor acesse pelo prompt de comando o mysql com o seguinte comando:

    cd "C:\Program Files\MySQL\MySQL Server 5.7\bin"

Considerando que você instalou no diretório padrão da instalação e que a versão atual utilizada é a 5.7. Acesse o servidor com o usuário e a senha que foi configurado na instalação, com o comando:

    mysql -u root -p

	*será exibido o campo para inserir o sua senha*
	Enter Password: <digite sua senha>

Após isso será iniciado o servidor então já será possível criar o banco e a tabela utilizada nesse repositório.

**Criando o banco**

    create database portal_noticias;

**Criando a tabela de notícias**

    create table noticias(
    -> id_noticia int not null primary key auto_increment,
    -> autor varchar(30) not null,
    -> titulo varchar(50) not null,
    -> data_criacao timestamp default current_timestamp,
    -> resumo varchar(100) not null,
    -> noticia text not null);

**Com a tabela criada é possível fazer um teste para inserir a primeira notícia**

    use portal_noticias;
    insert into noticias(autor, titulo, resumo, noticia) values ('Nome do Autor', 'Titulo da Notícia', 'Resumo da Notícia', 'Texto da Notícia');

**Testando...**

    select * from noticias;

Se tudo correr bem, já será possível trabalhar no projeto e fazer as configurações necessárias com o banco de dados.

  
  
