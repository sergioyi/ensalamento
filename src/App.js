import './logo.svg';
import './App.css';
import React from 'react';
const inserir = document.getElementById("cadastro_de_cursos");////input de cread
const exclusao = document.getElementById("exclusao_de_cursos");///input de delet
const atualiza = document.getElementById("update_de_cursos");////input de update
const id_atualiza = document.getElementById("id_update");///saber qual o item para editar

var vetor = [];
const corpo = document.getElementById("corpo");
function mostrar(){
  if(localStorage.valores){//se tiver "valores" nolocalStorage execute o de baixo ====
      vetor = JSON.parse(localStorage.getItem('valores'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
  }
  for(var i in vetor){
    let linha = document.createElement("tr");
    let idItem = document.createElement("td");
    let cursoItem = document.createElement("td");
    let editItem = document.createElement("td");
    let deletItem = document.createElement("td");
    let editar = document.createElement("button");
    let removi = document.createElement("button");
    
    //dando o id as botões
    editar.id = "btetidar";
    removi.class = "btremover";
    
    //dando os valores
    cursoItem.innerText = vetor[i];
    idItem.innerText = i;
    editar.innerText = "Editar";
    removi.innerText = "Remover";
    //removi.onclick = removeLine;//atribuindo a função

    deletItem.appendChild(removi);
    editItem.appendChild(editar);
    linha.appendChild(idItem);
    linha.appendChild(cursoItem); 
    linha.appendChild(editItem);
    linha.appendChild(deletItem);
    corpo.appendChild(linha);//o corpo (no caso tbody) está recebendo a linha (no caso tr)
    const botoes = document.querySelectorAll('.btremover');
    botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
});
});
  } //fim do for


}
function App() {
  return (
    <div className="App">
      <html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/style/style.css" />
    <title>Cadastro de Cursos</title>
  </head>
  <body onLoad={mostrar} >

    <h1>Cadastro de Cursos</h1>

    <div id="corpo_nome">
      <label for="nome"><strong>Cadastro de Cursos</strong></label>
      <input
        type="text"
        name="cadastro_de_cursos"
        id="cadastro_de_cursos"
        placeholder="cad.cursos"
      />
      <button onClick={()=>{
  let novoItem = (inserir.value);
  vetor.push(novoItem);
  inserir.value = "";
  localStorage.valores = JSON.stringify(vetor);
  //vetor = JSON.parse(localStorage.getItem("valores"));
  corpo.innerHTML = "";
  mostrar();
}} >Enviar</button>
    </div>
    <label for="exclusao_de_cursos"><strong>Exclusão de Cursos</strong></label>
      <input
        type="text"
        name="exclusao_de_cursos"
        id="exclusao_de_cursos"
        placeholder="exc.cursos"
      />

    <button id="exclui" onClick={(linha)=>{
let novoItem = (exclusao.value);
 vetor.splice(novoItem,1);
  localStorage.valores = JSON.stringify(vetor);   
  linha.remove();
  mostrar();
}} >Excluir</button>

<label for="update_de_cursos"><strong>Atualização de Cursos</strong></label>

<input
        type="number"
        name="id_update"
        id="id_update"
        placeholder="ex: 1"
      />
    
      <input
        type="text"
        name="update_de_cursos"
        id="update_de_cursos"
        placeholder="upd.cursos"
      />
    <button id="alterei">Alterar</button>
    <div class="navbar">
    </div>

    <br />
    <table id="tabela">
      <thead>
        <tr>
          <th>Número</th>
          <th>Cursos Salvos</th>
        </tr>
      </thead>
      <tbody id="corpo">
      </tbody>
    </table>
  </body>
</html>
    </div>
  );
}

export default App;
