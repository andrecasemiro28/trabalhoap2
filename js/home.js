function buscar(tipo) {
  document.getElementById("text").innerHTML = "Carregando...";
  fetch(`https://botafogo-atletas.mange.li/${tipo}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      criarCards(data);
    })
    .catch(function (erro) {
      alert('Não foi possível obter os dados no momento, tente novamente.')
    });
}

function navegarParaDetalhes(event) {
  window.location = 'details.html?id=' + event.target.closest("article").dataset.id;
}

function criarCards(data) {
  var html = "";

  for (var i = 0; i < data.length; i++) {
    jogador = data[i];
    var item = `
            <article id="player-${jogador.id}" data-id="${jogador.id}" class="player">
                <h2>${jogador.nome}</h2>
                <img src="${jogador.imagem}" alt="${jogador.nome} atleta de futebol do Botafogo.">
                <h3 style="padding: 0.5em; position: relative; background-color: white;">Saiba mais</h3>
            </article>`;

    html += item;
  }
  
  document.getElementById("text").style.display = 'none';
  document.getElementById("elenco").innerHTML = html;


  var articles = document.getElementById("elenco").children;
  for (var i = 0; i < articles.length; i++) {
    articles[i].onclick = navegarParaDetalhes;
  }
}

document
  .getElementById("btn-all")
  .addEventListener("click", () => buscar("all"));
document
  .getElementById("btn-fem")
  .addEventListener("click", () => buscar("feminino"));
document
  .getElementById("btn-mas")
  .addEventListener("click", () => buscar("masculino"));

  document
  .getElementById("btn-sair")
  .addEventListener("click", logout);

  document
  .getElementById("select-elenco")
  .addEventListener("change", (event) => {
    buscar(event.target.value);
  });