const htmlItens = (dados, i) => [{
    "formacaoAcademica": `
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
            `,

    "licencasECertificados": `
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
            `,

    "experiencia": `
            <hr>
            <div class="experiencia__conteudo item">
                <img class="imgItem" src="${dados[i].img}">
                <div class="experiencia__cabecalho">
                    <span class="experiencia__info">
                        <h4 class="curriculo__cardSubtitulo">${dados[i].titulo}</h4>
                    </span>

                    <div class="experiencia__cargos"></div>
        
                    <div class="description"></div>
                </div>
            </div>
            `,
}]