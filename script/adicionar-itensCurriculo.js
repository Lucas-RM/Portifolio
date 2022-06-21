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

function adicionarItemNaDiv(divItensEscondidos, divPrimeirosItens, i, item) {
    if (i > 2) { divItensEscondidos.innerHTML += item } 
    else { divPrimeirosItens.innerHTML += item }
}

function adicionarItens(dados, classeDaDivDoItem) {
    const $divPrimeirosItens = document.querySelectorAll('.divPrimeirosItens')
    const $itensLicencasECertificados = document.querySelector('.itensLicencasECertificados')
    const $itensFormacaoAcademica = document.querySelector('.itensFormacaoAcademica')
    const spanFormacaoAcademica = '.formacaoAcademica div span'
    const spanLicencasECertificados = '.licencasECertificados div span'
    const descricao = '.formacaoAcademica div .description'

    let item, indiceDoBotao;

    for (let i = 0; i < dados.length; i++) {
        if (classeDaDivDoItem === 'licencasECertificados') {
            indiceDoBotao = 2; 
            item = licencasECerificados(dados, i)
            adicionarItemNaDiv($itensLicencasECertificados, $divPrimeirosItens[1], i, item)
            criaParagrafo(dados, i, spanLicencasECertificados)

        } else if (classeDaDivDoItem === 'formacaoAcademica') {
            indiceDoBotao = 0; 
            item = formacaoAcademica(dados, i)

            adicionarItemNaDiv($itensFormacaoAcademica, $divPrimeirosItens[0], i, item)
            criaParagrafo(dados, i, spanFormacaoAcademica)

            if (dados[i].descricao.length > 0) {
                criaDescricao(dados, i, descricao)                
            } else {
                document.querySelectorAll(descricao)[i].style.display = 'none'
            }
        }

        temMenosDeQuatroItens(dados, indiceDoBotao)
    }   
}

function licencasECerificados(dados, i) {
    return `
    <hr>
    <div class="licencasECertificados item">
        <img src="${dados[i].img}" class="imgItens">
        <div>
            <span>
                <h4 class="h4">${dados[i].titulo}</h4>
            </span>
            
            <div class="divLinkCertificado">
                <a href="${dados[i].link}" target="_blank" class="linkCertificado" id="linkCertificado">Certificado</a>
            </div>
        </div>
    </div>
    `
}

function formacaoAcademica(dados, i) {
    return `
    <hr>
    <div class="formacaoAcademica item">
        <img src="${dados[i].img}" class="imgItens">
        <div>
            <span>
                <h4 class="h4">${dados[i].titulo}</h4>
            </span>

            <div class="description"></div>
        </div>
    </div>
    `
}

adicionarItens(licencasECertificadosDados, 'licencasECertificados')
adicionarItens(formacaoAcademicaDados, 'formacaoAcademica')
