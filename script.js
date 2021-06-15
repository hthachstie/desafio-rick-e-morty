const linkApi = `https://rickandmortyapi.com/api/character/`;

function gerarValorAleatorio(){
    let personagens = []
    for ( i = 0; i < 4; i ++){
        personagens.push(Math.floor(Math.random() * 671))
    }
  return personagens
};

async function pegarPersonagens() {
  const resposta = await fetch(linkApi + gerarValorAleatorio());
  const data = await resposta.json();
  return data;
}

async function criarPersonagem() {
  let container = document.getElementById("personagens");
  let html = ''
  let personagens = await pegarPersonagens()
  personagens.forEach(personagem => {
    html+=`<img src=${personagem.image}> <h2> ${personagem.name} </h2>`
  })
  container.innerHTML = html;
}

criarPersonagem();

