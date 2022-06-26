function numeroDeElementos(classe) {
    return classe.length
}

function somaAlturaDosItens(itens) {
    let altura = 0    
    itens.forEach(element => {
        const $style = getComputedStyle(element)
        const $itemMarginTop = $style.marginTop
        const $itemMarginBottom = $style.marginBottom
        
        altura += element.offsetHeight + parseInt($itemMarginTop) + parseInt($itemMarginBottom) + 3
    })
    return altura
}

function classeDoItem(id) {
    switch (id) {
        case 0:
            return 'itensFormacaoAcademica'
            break
        case 1:
            return 'itensLicencasECertificados'
            break
    }
}
        
function mostrarMais(id) {
    const classe = classeDoItem(id)
    document.querySelector(`.${classe}`).classList.toggle('exibir') 
    
    const $itens = document.querySelectorAll(`.${classe} .item`)
    const alturaDosItens = somaAlturaDosItens($itens)
    document.querySelector(`.${classe}`).style.height = `${alturaDosItens}px`
    
    $btnMostrarMais[id].style.display = 'none'
    $btnMostrarMenos[id].style.display = 'block'
}
        
function mostrarMenos(id) {
    const classe = classeDoItem(id)
    document.querySelector(`.${classe}`).classList.toggle('exibir')
    document.querySelector(`.${classe}`).style.height = '0'

    $btnMostrarMais[id].style.display = 'block'
    $btnMostrarMenos[id].style.display = 'none'
}

const $btnMostrarMais = document.querySelectorAll('#btnMostrarMais')
const $btnMostrarMenos = document.querySelectorAll('#btnMostrarMenos')

const $formacaoAcademica = document.querySelectorAll('.formacaoAcademica__conteudo')
const $licencasECertificados = document.querySelectorAll('.licencasECertificados__conteudo')
const $numeroDeItensFormacaoAcademica = numeroDeElementos($formacaoAcademica)
const $numeroDeItenslicencasECertificados = numeroDeElementos($licencasECertificados)

$btnMostrarMais[0].innerHTML = `
    Exibir todos os ${$numeroDeItensFormacaoAcademica} itens de formação acadêmica <i class="fa-solid fa-arrow-down-short-wide"></i>`

$btnMostrarMais[1].innerHTML = `
    Exibir todos os ${$numeroDeItenslicencasECertificados} itens de licencas e certificados <i class="fa-solid fa-arrow-down-short-wide"></i>`


$btnMostrarMais.forEach((botao, i) => {
    botao.addEventListener('click', () => mostrarMais(i))
})

$btnMostrarMenos.forEach((botao, i) => {
    botao.style.display = 'none'
    botao.addEventListener('click', () => mostrarMenos(i))
})