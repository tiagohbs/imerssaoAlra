function pesquisar(){
    //obter o termo da pesquisa
    const termoPesquisa = document.getElementById('termo-pesquisa').value

    //filtrar os dados
    const resultadosFiltrados = dados.filter(dado =>{
        return dado.titulo.toLowerCase().includes(termoPesquisa) ||
        dado.descricao.toLowerCase().includes(termoPesquisa);
    })




//let section = document.getElementById("resultados-pesquisa");

let resultados= "";

for (let dado of resultadosFiltrados)
{
    resultados += 
        `
            <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Saiba mais...</a>             
                    </div>

        `
}
const section = document.getElementById("resultados-pesquisa");
section.innerHTML = resultados;
return resultadosFiltrados;
}

//Feito com ajuda do Gemini
