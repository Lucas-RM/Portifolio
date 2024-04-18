function calculaIdade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        idade = ano_atual - ano_aniversario

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        idade--
    }

    return idade < 0 ? 0 : idade
}

const $tag_idade = document.querySelector('#idade')

const idade = calculaIdade(2003, 9, 30)

$tag_idade.innerHTML = idade + " anos"
