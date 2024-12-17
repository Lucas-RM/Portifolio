const projetos = [
    {
        link: 'https://lucas-rm.github.io/gitfind-react-cli/',
        img: './img/projetos/git-find.jpg',
        titulo: 'git find',
        descricao: 'Este projeto, desenvolvido em <b>React</b>, utiliza a <b>API do GitHub</b> para permitir a <u>busca de perfis de usuários e seus respectivos repositórios</u>. A aplicação permite que os usuários insiram o nome de um perfil do GitHub e, ao realizar a busca, exibe na tela informações básicas do perfil, além de uma lista de repositórios públicos associados a esse usuário.'
    },
    {
        link: 'https://github.com/Lucas-RM/minimal-api/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'Minimal API',
        descricao: 'Neste desafio criei uma <b>API</b> utilizando a técnica de <b>Minimals APIs</b> para o <u>registro de veículos</u>, ampliando suas funcionalidades ao incorporar <u>administradores</u> com regras <b>JWT</b>. Ao explorar o funcionamento da API, familiarizarei com o uso do <b>Swagger</b>, além de trabalhar com testes, garantindo a robustez e confiabilidade do sistema que desenvolvi.'
    },
    {
        link: 'https://github.com/Lucas-RM/crud-angular/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'crud angular',
        descricao: 'Este é um projeto <b>CRUD</b> simples para cadastro de produtos. Ele permite realizar as operações de criação, leitura, atualização e exclusão de produtos em uma aplicação frontend utilizando <b>Angular</b>.'
    },
    {
        link: 'https://github.com/Lucas-RM/blog-pessoal-nextjs/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'blog pessoal',
        descricao: 'Este Projeto, desenvolvido em <b>Next.js</b>, foi feito para criar um <b>Blog Pessoal</b> dinâmico e com um integração a um serviço de nuvem (<b>Supabase</b>).'
    },
    {
        link: 'https://github.com/Lucas-RM/github-repos-wiki-react/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'gitHub repos wiki',
        descricao: 'Neste Desafio de Projeto eu construí uma <b>Wiki</b> para <u>salvar alguns repositórios do GitHub</u>. Aprendi a como consumir a <b>API do GitHub</b> e como listar e remover repositórios de interesse.'
    },
    {
        link: 'https://github.com/Lucas-RM/trilha-net-api-desafio/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'gerenciador de tarefas',
        descricao: 'Repositório criado para o desenvolvimento do desafio em que foi solicitado para construir um <b>Sistema Gerenciador de Tarefas</b>, onde eu poderia cadastrar uma lista de tarefas que permitiria organizar melhor a minha rotina. Essa lista de tarefas precisava ter um <b>CRUD</b> e a aplicação deverá ser do tipo Web API ou MVC. No caso, construí uma <b>Web API</b>.'
    },
    {
        link: 'https://lucas-rm.github.io/agenda/',
        img: './img/projetos/projeto-agenda.jpg',
        titulo: 'projeto agenda',
        descricao: 'O projeto <b>Agenda</b> é um site que as pessoas podem definir o ano, o mês, o dia e o horário de suas tarefas. Além disso, terá as funções de deletar e de marcar como concluído as tarefas finalizadas.'
    },
    {
        link: 'https://github.com/Lucas-RM/clone-dio/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'clone DIO',
        descricao: 'Este projeto é um <b>clone da plataforma DIO</b>, desenvolvido em <b>React</b> utilizando <u>styled-components</u> para a estilização de componentes. O objetivo é replicar a interface e funcionalidades principais da plataforma, proporcionando uma experiência prática no desenvolvimento de interfaces modernas e responsivas.'
    },
    {
        link: 'https://github.com/Lucas-RM/tela-de-login-typescript-react/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'tela de login',
        descricao: 'Este projeto foi implementado uma <b>Tela de Login</b> usando <b>TypeScript</b> contendo uma etapa de autenticação e validação dentro do <b>React</b>.'
    },
    {
        link: 'https://github.com/Lucas-RM/calculadora-react-desafio-dio/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'calculadora (react)',
        descricao: 'Projeto criado para solucionar o desafio de criar uma <b>Calculadora</b> utilizando a biblioteca <b>React</b> no curso feito na plataforma DIO.'
    },
    {
        link: 'https://github.com/Lucas-RM/FileCrypto/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'file crypto',
        descricao: 'Este projeto foi criado para implementar um programa em <b>Python</b> que realiza a <b>criptografia</b> e <b>descriptografia</b> de arquivos utilizando diferentes métodos de criptografia. As funcionalidades principais incluem: Criptografias de <b>CYPHER (Matriz)</b>, <b>RSA (Chave Pública e Privada)</b>, <b>ASCII</b> e <b>HEXADECIMAL</b>.'
    },
    {
        link: 'https://github.com/Lucas-RM/calculadora-testes-unitarios/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'calculadora (testes unitários)',
        descricao: 'Projeto feito com intuito de aprender sobre <b>testes unitários</b>. Criação de uma calculadora simples e montando testes para os métodos da classe Calculadora.'
    },
    {
        link: 'https://lucas-rm.github.io/pesquisa_inclusao_digital/',
        img: './img/projetos/projeto-inclusaoDigital.jpg',
        titulo: 'projeto inclusão digital',
        descricao: 'Projeto acadêmico realizado em grupo na faculdade com a finalidade de compreender o processo de <b>Inclusão Digital</b> na sociedade.'
    },
    {
        link: 'https://github.com/Lucas-RM/fundamentos-javascript/',
        img: './img/projetos/padrao-gitHub-logo.jpg',
        titulo: 'fundamentos javascript',
        descricao: 'Repositório dedicado a <u>projetos, exemplos e exercícios em </u><b><u>JavaScript</u></b>. Aqui você encontrará códigos práticos, desde conceitos básicos até funcionalidades avançadas, para aprimorar o conhecimento nessa linguagem amplamente utilizada no desenvolvimento web.'
    },
    {
        link: 'https://github.com/Lucas-RM/Editor-de-Texto/',
        img: './img/projetos/editor-de-texto.jpg',
        titulo: 'editor de texto',
        descricao: 'Projeto acadêmico feito em curso com intuito de assemelhar-se com um editor de texto básico.'
    },
    {
        link: 'https://lucas-rm.github.io/relogio-online/',
        img: './img/projetos/projeto-relogio.jpg',
        titulo: 'projeto relógio',
        descricao: 'Projeto com intuito de representar um relógio em um site.'
    },
    {
        link: 'https://lucas-rm.github.io/alura-midi/',
        img: './img/projetos/alura-midi.jpg',
        titulo: 'alura MIDI',
        descricao: 'Site feito em curso da plataforma Alura com o objetivo de tocar sons de instrumentos quando clicar em um botão ou quando pressionar a tecla <b>SPACE</b>.'
    },
    {
        link: 'https://lucas-rm.github.io/projeto-apeperia/',
        img: './img/projetos/projeto-apeperia.jpg',
        titulo: 'projeto apeperia',
        descricao: 'Site feito em curso da plataforma Alura com intuito de aprender sobre <b>Layouts Responsivos (mobile)</b>.'
    },
    {
        link: 'https://lucas-rm.github.io/alura-flexbox/',
        img: './img/projetos/alura-flexbox.jpg',
        titulo: 'alura flexbox',
        descricao: 'Site feito em curso da plataforma Alura com intuito de aprender sobre <b>Flexbox</b>.'
    },
    {
        link: 'https://lucas-rm.github.io/Projeto-Huddle/',
        img: './img/projetos/projeto-huddle.jpg',
        titulo: 'projeto huddle',
        descricao: 'Projeto acadêmico feito em curso com objetivo de aplicar <b>posicionamento do conteúdo</b> do site e deixar o site <b>responsivo</b>, sendo compatível para celular, computador, iPads, entre outros dispositivos.'
    },
    {
        link: 'https://lucas-rm.github.io/alura-store/',
        img: './img/projetos/alura-store.jpg',
        titulo: 'alura store',
        descricao: 'Site feito em curso da plataforma Alura com o objetivo de aprender sobre <b>CSS Grid</b> e a <b>simplificação de Layouts</b>.'
    },
    {
        link: 'https://lucas-rm.github.io/teclado/',
        img: './img/projetos/teclado-teclas.jpg',
        titulo: 'teclado (código da tecla)',
        descricao: 'Se você não sabe qual a numeração (ou keyCode) das teclas do seu teclado e quer saber o mais rápido possível, acesse esse site e descubra.'
    }
];
