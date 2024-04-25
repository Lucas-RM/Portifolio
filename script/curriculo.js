function somaAlturaDosItens(itens, margemDeErro) {
    let altura = 0
    itens.forEach(element => {
        const $style = getComputedStyle(element)
        const $itemMarginTop = $style.marginTop
        const $itemMarginBottom = $style.marginBottom

        altura += element.offsetHeight + parseInt($itemMarginTop) + parseInt($itemMarginBottom) + margemDeErro
    })
    return altura
}


function mostrarMais(id) {
    const $itensEscondidos = document.querySelectorAll('.itensEscondidos')[id]
    $itensEscondidos.classList.toggle('exibir')

    const $itens = $itensEscondidos.querySelectorAll('.item')
    const alturaDosItens = somaAlturaDosItens($itens, 3)
    $itensEscondidos.style.height = `${alturaDosItens}px`

    $btnMostrarMais[id].style.display = 'none'
    $btnMostrarMenos[id].style.display = 'block'
}


function mostrarMenos(id) {
    const $itensEscondidos = document.querySelectorAll('.itensEscondidos')[id]
    $itensEscondidos.classList.toggle('exibir')
    $itensEscondidos.style.height = '0'

    $btnMostrarMais[id].style.display = 'block'
    $btnMostrarMenos[id].style.display = 'none'
}


function addDescricao_BtnMostrarMais(botao) {
    const $botaoParent_section = botao.parentNode.parentNode.getAttribute("class")
    const nomeClasseItem = `.${$botaoParent_section}__conteudo`
    const $itens = document.querySelectorAll(`${nomeClasseItem}`)
    const $tituloCard_curriculo = document.querySelector(`.curriculo__cardTitulo:has(~ .${$botaoParent_section})`)

    let qtdDeItens = $itens.length
    let cardTitulo = $tituloCard_curriculo.textContent

    if (qtdDeItens > QTD_ITENSDESTAQUE) {
        botao.style.display = 'block'

        botao.innerHTML = `
        Exibir todos os ${qtdDeItens} itens de ${cardTitulo} <i class="fa-solid fa-arrow-down-short-wide"></i>`
    }
}


function carregar_botoes() {
    $btnMostrarMais.forEach((botao, i) => {
        addDescricao_BtnMostrarMais(botao, i)
        botao.addEventListener('click', () => mostrarMais(i))
    })

    $btnMostrarMenos.forEach((botao, i) => botao.addEventListener('click', () => mostrarMenos(i)))
}


const $btnMostrarMais = document.querySelectorAll('#btnMostrarMais')
const $btnMostrarMenos = document.querySelectorAll('#btnMostrarMenos')

window.addEventListener("resize", debounce(() => { 
    $btnMostrarMenos.forEach((botao, i) => {
        if (botao.style.display == 'block') {
            mostrarMenos(i)
            mostrarMais(i)
        }
    })
}))

setTimeout(() => {
    carregar_botoes()
}, 500)