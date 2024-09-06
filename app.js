function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    if(!campoPesquisa){
        section.innerHTML = "<p>Preencha corretamente com atleta ou esporte!</p>";

        return 

    }

    campoPesquisa = campoPesquisa.toLowerCase()

// Declara as variaveis para armazenar os resultados da pesquisa em formato HTML
let resultados = "";
let titulo = "";
let descricao = "";
// Itera sobre os dados, construindo o HTML para cada resultado
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if(titulo.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa)){
        //cria um novo elemento HTML
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
                
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
                      
            <a href="${dado.link}" target="_blank">Saiba mais...</a>
            <img src="${dado.foto}" alt="" class="foto">  
        </div>
    `
    }/*else{
        resultados = `
            <div class="item-resultado">
            <h2>Nada foi encontrado</h2>        
            </div>
        `

    }*/
    //Acima temos o 'se não' se o resultado for vazio
   
}
//Se nada for encontrado a variavel resultado retorna o aviso
if (!resultados){
    resultados = "<p>Sem resultado<br>Erro 03A</p>";
}

// Atribui o HTML gerado para a seção de resultados
section.innerHTML = resultados;
}