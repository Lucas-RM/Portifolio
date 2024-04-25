function criaParagrafo(dados, index, classePai) {
    const $containerParagrafos = document.querySelectorAll(`${classePai}`)
    for (let i = 0; i < dados[index].paragrafo.length; i++) {
        const p = document.createElement('p')
        p.innerHTML = dados[index].paragrafo[i]
        $containerParagrafos[index].appendChild(p)
    } 
}


function criaDescricao(dados, index, classePai) {
    const $containerDescricao = document.querySelectorAll(`${classePai}`)
    for (let i = 0; i < dados[index].descricao.length; i++) {
        const p = document.createElement('p')
        p.innerHTML = dados[index].descricao[i]
        $containerDescricao[index].appendChild(p)
    }
}


function criaCargo(dados, index, classePai) {
    const $containerCargo = document.querySelectorAll(`${classePai}`)
    for (let i = 0; i < dados[index].cargos.length; i++) {
        const span = document.createElement('span')
        span.innerHTML = dados[index].cargos[i]
        $containerCargo[index].appendChild(span)
    } 
}


function adicionarItens(dados, classe_item, qtdItensDestaque) {
    const $itensDestaque = document.querySelector(`.${classe_item} .itensDestaques`)
    const $itensEscondidos = document.querySelector(`.${classe_item} .itensEscondidos`)

    let item = ""

    for (let i = 0; i < dados.length; i++) {
        item = htmlItens(dados, i)[0][classe_item]

        if (i >= qtdItensDestaque) { $itensEscondidos.innerHTML += item } 
        else { $itensDestaque.innerHTML += item }
        
        let temParagrado = dados.some(e => e.paragrafo)
        let temDescricao = dados.some(e => e.descricao)
        let temCargo = dados.some(e => e.cargos)
        
        if (temParagrado)
            criaParagrafo(dados, i, `.${classe_item}__info`)    
        
        if (temDescricao) {
            if (dados[i].descricao.length > 0)
                criaDescricao(dados, i, `.${classe_item}__cabecalho .description`)                
            else
                document.querySelectorAll(`.${classe_item}__cabecalho .description`)[i].style.display = 'none'
        } 
        
        if (temCargo) {
            criaCargo(dados, i, `.${classe_item}__cabecalho .experiencia__cargos`)
        } 
    }
}

const QTD_ITENSDESTAQUE = 2;
const $itens = document.querySelectorAll('#itens')

$itens.forEach((data) => {
    const nomeClasseItem = data.parentNode.getAttribute("class")
    
    fetch(`./script/dados${nomeClasseItem}.js`)
    .then(res => res.text())
    .then(res => {
        res = JSON.parse(res)
        adicionarItens(res, nomeClasseItem, QTD_ITENSDESTAQUE)
    })
    .catch(error => console.log(error))

})