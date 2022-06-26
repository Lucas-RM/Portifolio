function criaParagrafo(dados, item, classePai) {
    const $containerParagrafos = document.querySelectorAll(`${classePai}`)
    for (let i = 0; i < dados[item].paragrafo.length; i++) {
        const p = document.createElement('p')
        p.innerHTML = dados[item].paragrafo[i]
        $containerParagrafos[item].appendChild(p)
    } 
}

function criaDescricao(dados, item, classePai) {
    const $containerDescricao = document.querySelectorAll(`${classePai}`)
    for (let i = 0; i < dados[item].descricao.length; i++) {
        const p = document.createElement('p')
        p.innerHTML = dados[item].descricao[i]
        $containerDescricao[item].appendChild(p)
    } 
}

function temMenosDeQuatroItens(itens, indiceDobotao) {
    if (itens.length < 4) {
        document.querySelectorAll('.divBtnItens')[indiceDobotao].style.display = 'none'
    }
}

function adicionarItemNaDiv(divItensEscondidos, primeirosItens, i, item) {
    if (i > 2) { divItensEscondidos.innerHTML += item } 
    else { primeirosItens.innerHTML += item }
}

function adicionarItens(dados, classeDaDivDoItem) {
    const $primeirosItens = document.querySelectorAll('.itensDestaques')
    const $itensFormacaoAcademica = document.querySelector('.itensFormacaoAcademica')
    const spanFormacaoAcademica = '.formacaoAcademica__info'
    const descricaoFormacaoAcademica = '.formacaoAcademica__cabecalho .description'
    const $itensLicencasECertificados = document.querySelector('.itensLicencasECertificados')
    const spanLicencasECertificados = '.licencasECertificados__info'

    let item, indiceDoBotao;

    for (let i = 0; i < dados.length; i++) {
        if (classeDaDivDoItem === 'formacaoAcademica__conteudo') {
            indiceDoBotao = 0; 
            item = formacaoAcademica(dados, i)

            adicionarItemNaDiv($itensFormacaoAcademica, $primeirosItens[0], i, item)
            criaParagrafo(dados, i, spanFormacaoAcademica)

            if (dados[i].descricao.length > 0) {
                criaDescricao(dados, i, descricaoFormacaoAcademica)                
            } else {
                document.querySelectorAll(descricaoFormacaoAcademica)[i].style.display = 'none'
            }

        } else if (classeDaDivDoItem === 'licencasECertificados__conteudo') {
            indiceDoBotao = 2; 
            item = licencasECerificados(dados, i)
            adicionarItemNaDiv($itensLicencasECertificados, $primeirosItens[1], i, item)
            criaParagrafo(dados, i, spanLicencasECertificados)
        }

        temMenosDeQuatroItens(dados, indiceDoBotao)
    }   
}

function formacaoAcademica(dados, i) {  
    return `
    <hr>
    <div class="formacaoAcademica__conteudo item">
        <img class="imgItem" src="${dados[i].img}">
        <div class="formacaoAcademica__cabecalho">
            <span class="formacaoAcademica__info">
                <h4 class="curriculo__cardSubtitulo">${dados[i].titulo}</h4>
            </span>

            <div class="description"></div>
        </div>
    </div>
    `
}

function licencasECerificados(dados, i) {
    return `
    <hr>
    <div class="licencasECertificados__conteudo item">
        <img  class="imgItem" src="${dados[i].img}">
        <div class="licencasECertificados__cabecalho">
            <span class="licencasECertificados__info">
                <h4 class="curriculo__cardSubtitulo">${dados[i].titulo}</h4>
            </span>
            
            <div class="divLinkCertificado">
                <a class="linkCertificado" id="linkCertificado" href="${dados[i].link}" target="_blank">Certificado</a>
            </div>
        </div>
    </div>
    `
}

adicionarItens(formacaoAcademicaDados, 'formacaoAcademica__conteudo')
adicionarItens(licencasECertificadosDados, 'licencasECertificados__conteudo')
