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
    
    const $itens = document.querySelectorAll(`.${classe} .item`)
    const alturaDosItens = somaAlturaDosItens($itens)
    document.querySelector(`.${classe}`).style.height = `${alturaDosItens}px`
    
    document.querySelector(`.${classe}`).classList.toggle('exibir') 
    $mostrarMais[id].style.display = 'none'
    $mostrarMenos[id].style.display = 'block'
}
        
function mostrarMenos(id) {
    const classe = classeDoItem(id)
    document.querySelector(`.${classe}`).classList.toggle('exibir')
    document.querySelector(`.${classe}`).style.height = '0'
    $mostrarMais[id].style.display = 'block'
    $mostrarMenos[id].style.display = 'none'
}

const $mostrarMais = document.querySelectorAll('.mostrarMais')
const $mostrarMenos = document.querySelectorAll('.mostrarMenos')
const $btnMostrarMais = document.querySelectorAll('#btnMostrarMais')
const $btnMostrarMenos = document.querySelectorAll('#btnMostrarMenos')

const $formacaoAcademica = document.querySelectorAll('.containerFormacaoAcademica .formacaoAcademica')
const $licencasECertificados = document.querySelectorAll('.containerLicencasECertificados .licencasECertificados')
const $numeroDeItensFormacaoAcademica = numeroDeElementos($formacaoAcademica)
const $numeroDeItenslicencasECertificados = numeroDeElementos($licencasECertificados)

$btnMostrarMais[0].innerHTML = `Exibir todos os ${$numeroDeItensFormacaoAcademica} itens de formação acadêmica &#11183;`
$btnMostrarMais[1].innerHTML = `Exibir todos os ${$numeroDeItenslicencasECertificados} itens de licencas e certificados &#11183;`

$btnMostrarMais[0].addEventListener('click', () => mostrarMais(0))
$btnMostrarMais[1].addEventListener('click', () => mostrarMais(1))
$btnMostrarMenos[0].addEventListener('click', () => mostrarMenos(0))
$btnMostrarMenos[1].addEventListener('click', () => mostrarMenos(1))