const containerProjeto = document.querySelector('.conteudoPrincipal_Projetos .container')

for (let i = 0; i < projetos.length; i++) {
    const div_postProjeto = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const div_descricao = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    div_postProjeto.classList.add('conteudoPrincipal_Projetos-postProjetos');
    img.classList.add('conteudoPrincipal_Projetos-img');
    div_descricao.classList.add('conteudoPrincipal_Projetos-descricao');
    h3.classList.add('conteudoPrincipal_Projetos-titulo');

    a.href = projetos[i].link;
    img.src = projetos[i].img;
    h3.innerHTML = projetos[i].titulo;
    p.innerHTML = projetos[i].descricao;

    a.target = '_blank';

    containerProjeto.appendChild(div_postProjeto);
    div_postProjeto.appendChild(a);
    a.appendChild(img);
    a.appendChild(div_descricao);
    div_descricao.appendChild(h3);
    div_descricao.appendChild(p);
};