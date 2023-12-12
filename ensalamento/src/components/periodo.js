
import { useState } from "react";
import React from 'react';
import Tenta from "./renderiza/periodo";

function Periodo() {
  const corpo = document.getElementById("corpo");//onde os dados vão parar
  const ficaEnvio2 = document.getElementById("ficaEnvio2");//onde fica o input e o boaão  de envio
  const botao = document.getElementById("botao");
  
  const [turno, setTurno] = useState()
  const [periodo, setPeriodo] = useState()
  const [dt_in_curso, setDt_in_curso] = useState()
  const [curso, setCurso] = useState()

  var vetor = [];
  var vetor_curso = [];
///////////////////////////////////////////////////
//let paicurso = document.getElementById("paicurso");
function Renderiza(){
  if (localStorage.objetos) {//se tiver "valores" nolocalStorage execute o de baixo
    vetor_curso = JSON.parse(localStorage.getItem('objetos'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
  }
  vetor_curso.forEach(e => {
    recCurso.push(e.curso)
    let criaoption = document.createElement("option");
    criaoption.innerText = recCurso;
    console.log("aqui está o retorno do array de curso "+e.curso);
    //paicurso.appendChild(criaoption)
    //recCoordenador.push(e.coordenador)
  })

  console.log("o retorno do renderiza "+recCurso)
}
const recCurso = [];
//const recCoordenador = [];
  function CREAT(e) {
    e.preventDefault()
    const objeto = {
      periodo: periodo,
      turno: turno,
      dt_in_curso: dt_in_curso,
      curso: recCurso
    };
    if (localStorage.getItem('objetos_periodo')) {
      vetor = JSON.parse(localStorage.getItem('objetos_periodo'))
    }
    vetor.push(objeto)
    localStorage.setItem("objetos_periodo", JSON.stringify(vetor));
    vetor = JSON.parse(localStorage.getItem("objetos_periodo"))
    if (corpo) {
      corpo.innerHTML = " ";
    }
    mostrar()
  }

  function DELET(removi) {
    var numeroARemover = removi.target.parentElement.parentElement.children[0].textContent;
    vetor.splice(numeroARemover, 1);
    localStorage.setItem("objetos_periodo", JSON.stringify(vetor));
    vetor = JSON.parse(localStorage.getItem("objetos_periodo"));
    corpo.innerHTML = "";
    mostrar();
  }

  function UPDATE(editar) {
    let nomeAEditar = editar.target.parentElement.parentElement.children[1].textContent
    var numeroAEditar = editar.target.parentElement.parentElement.children[0].textContent
    console.log(numeroAEditar)
    console.log(nomeAEditar);
    botao.style.display = "none";
    let novobotao = document.createElement("button");
    novobotao.innerText = "Enviar 2.0";
    ficaEnvio2.innerHTML = "";
    ficaEnvio2.appendChild(novobotao);
    /*()=>{
 
 
    novobotao.addEventListener("click", () => {
      vetor.splice(numeroAEditar, 1, curso.value);
      localStorage.setItem("objetos_periodo", JSON.stringify(vetor));
      vetor = JSON.parse(localStorage.getItem("objetos_periodo"));
      ///////////////////////////////////////////////////
      if (corpo) {
        corpo.innerHTML = "";
      }
      mostrar();
      novobotao.remove();
      //devolvendo o botao enviar normal
      botao.style.display = "block"
    })
  }*/
}

function mostrar() {
  if (localStorage.objetos_periodo) {//se tiver "valores" nolocalStorage execute o de baixo
    vetor = JSON.parse(localStorage.getItem('objetos_periodo'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
  }
  let i = 0;
  vetor.forEach((e) => {
    console.log(e)
    let linha = document.createElement("tr");
    let idItem = document.createElement("td");
    let periodoItem = document.createElement("td");
    let turnoItem = document.createElement("td");
    let dt_in_cursoItem = document.createElement("td");
    let cursoItem = document.createElement("td");
    let editItem = document.createElement("td");
    let deletItem = document.createElement("td");
    let editar = document.createElement("button");
    let removi = document.createElement("button");
    //UPDATE
    editar.className = "editarbt";
    editar.onclick = UPDATE;

    //DELET
    removi.className = "deletarbt";
    removi.onclick = DELET;

    //dando os valores
    periodoItem.innerText = e.periodo;
    turnoItem.innerText = e.turno;
    dt_in_cursoItem.innerText = e.dt_in_curso;
    cursoItem.innerText = e.curso;
    console.log("aqui fica o curso que vem "+e.cursoItem)
    idItem.innerText = i++;
    editar.innerText = "Editar";
    removi.innerText = "Remover";

    deletItem.appendChild(removi);
    editItem.appendChild(editar);
    linha.appendChild(idItem);
    linha.appendChild(periodoItem);
    linha.appendChild(turnoItem);
    linha.appendChild(dt_in_cursoItem);
    linha.appendChild(cursoItem);
    linha.appendChild(editItem);
    linha.appendChild(deletItem);
    corpo.appendChild(linha);//o corpo (no caso tbody) está recebendo a linha (no caso tr)
  })
}
return (
  <>
    <html lang="pt-br">
      <body>
        <h1>Cadastro de Periodo</h1>
        <form>

          <label htmlFor="cursos"><strong>Cadastro de Periodo</strong></label>
          <select onChange={(e) => setPeriodo(e.target.value)}>
            <option value=" ">selecione um periodo</option>
            <option value="1º periodo">1º periodo</option>
            <option value="2º periodo">2º periodo</option>
            <option value="3º periodo">3º periodo</option>
          </select>

          <label><strong>turnos</strong></label>
          <select onChange={(e) => setTurno(e.target.value)}>
            <option value=" ">selecione um trurno</option>
            <option value="matutino">matutino</option>
            <option value="vespertino">vespertino</option>
            <option value="noturno">noturno</option>
          </select>
          <label forHTML="dt_in_curso"> <strong>de inicio</strong></label>
          <input
            type="date"
            name="dt_in_curso"
            id="dt_in_curso"
            onChange={(e) => setDt_in_curso(e.target.value)}
          />
          <label forHTML="paicurso"><strong>Curso</strong></label>
          <select id="paicurso" >
            <option>selecione um curso</option>
            {Renderiza()}
            <Tenta itens={(recCurso)}/>
          </select>

          <div id="ficaEnvio2"></div>
          <button type="submit" id="botao" onClick={CREAT}>Enviar</button>
        </form>
        <br />
        <table id="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Periodo</th>
              <th>Turno</th>
              <th>Inicio</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody id="corpo">
            <tr></tr>
          </tbody>
        </table>
      </body>
    </html>
  </>
);
}
export default Periodo



//      CERTO

/*import { useState } from "react";
import React from 'react';
import Tenta from "./renderiza/periodo";

function Periodo() {
  const corpo = document.getElementById("corpo");//onde os dados vão parar
  const ficaEnvio2 = document.getElementById("ficaEnvio2");//onde fica o input e o boaão  de envio
  const botao = document.getElementById("botao");
  
  const [turno, setTurno] = useState()
  const [periodo, setPeriodo] = useState()
  const [dt_in_curso, setDt_in_curso] = useState()

  var vetor = [];

///////////////////////////////////////////////////
//let paicurso = document.getElementById("paicurso");
const recCurso = [];
//const recCoordenador = [];
function Renderiza(){
  if (localStorage.objetos_periodo) {//se tiver "valores" nolocalStorage execute o de baixo
    vetor = JSON.parse(localStorage.getItem('objetos_periodo'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
  }
  vetor.forEach(e => {
    recCurso.push(e.curso)
    let criaoption = document.createElement("option");
    criaoption.innerText = recCurso;
    //paicurso.appendChild(criaoption)
    //recCoordenador.push(e.coordenador)
  })
  console.log("o retorno do renderiza "+recCurso)
}

  function CREAT(e) {///VALORES = objetos_periodo, INSERIR = CURSO
    e.preventDefault()
    const objeto = {
      periodo: periodo,
      turno: turno,
      dt_in_curso: dt_in_curso
    };
    if (localStorage.getItem('objetos_periodo')) {
      vetor = JSON.parse(localStorage.getItem('objetos_periodo'))
    }
    //console.log(localStorage)
    vetor.push(objeto)
    console.log(`aqui aio o vetor ` + vetor)
    localStorage.setItem("objetos_periodo", JSON.stringify(vetor));
    vetor = JSON.parse(localStorage.getItem("objetos_periodo"))
    if (corpo) {
      corpo.innerHTML = " ";
    }
    mostrar()
  }

  function DELET(removi) {
    var numeroARemover = removi.target.parentElement.parentElement.children[0].textContent;
    vetor.splice(numeroARemover, 1);
    localStorage.setItem("objetos_periodo", JSON.stringify(vetor));
    vetor = JSON.parse(localStorage.getItem("objetos_periodo"));
    corpo.innerHTML = "";
    mostrar();
  }

  function UPDATE(editar) {
    let nomeAEditar = editar.target.parentElement.parentElement.children[1].textContent
    var numeroAEditar = editar.target.parentElement.parentElement.children[0].textContent
    console.log(numeroAEditar)
    console.log(nomeAEditar);
    botao.style.display = "none";
    let novobotao = document.createElement("button");
    novobotao.innerText = "Enviar 2.0";
    ficaEnvio2.innerHTML = "";
    ficaEnvio2.appendChild(novobotao);
    /*()=>{
 
 
    novobotao.addEventListener("click", () => {
      vetor.splice(numeroAEditar, 1, curso.value);
      localStorage.setItem("objetos_periodo", JSON.stringify(vetor));
      vetor = JSON.parse(localStorage.getItem("objetos_periodo"));
      ///////////////////////////////////////////////////
      if (corpo) {
        corpo.innerHTML = "";
      }
      mostrar();
      novobotao.remove();
      //devolvendo o botao enviar normal
      botao.style.display = "block"
    })
  }*
}
//const [cursoedit, setCursoedit] = useState("segio")

function mostrar() {
  if (localStorage.objetos_periodo) {//se tiver "valores" nolocalStorage execute o de baixo
    vetor = JSON.parse(localStorage.getItem('objetos_periodo'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
  }
  let i = 0;
  vetor.forEach((e) => {
    console.log(e)
    let linha = document.createElement("tr");
    let idItem = document.createElement("td");
    let periodoItem = document.createElement("td");
    let turnoItem = document.createElement("td");
    let dt_in_cursoItem = document.createElement("td");
    let editItem = document.createElement("td");
    let deletItem = document.createElement("td");
    let editar = document.createElement("button");
    let removi = document.createElement("button");
    //UPDATE
    editar.className = "editarbt";
    editar.onclick = UPDATE;

    //DELET
    removi.className = "deletarbt";
    removi.onclick = DELET;

    //dando os valores
    periodoItem.innerText = e.periodo;
    turnoItem.innerText = e.turno;
    dt_in_cursoItem.innerText = e.dt_in_curso;
    idItem.innerText = i++;
    editar.innerText = "Editar";
    removi.innerText = "Remover";

    deletItem.appendChild(removi);
    editItem.appendChild(editar);
    linha.appendChild(idItem);
    linha.appendChild(periodoItem);
    linha.appendChild(turnoItem);
    linha.appendChild(dt_in_cursoItem);
    linha.appendChild(editItem);
    linha.appendChild(deletItem);
    corpo.appendChild(linha);//o corpo (no caso tbody) está recebendo a linha (no caso tr)
  })
}
return (
  <>
    <html lang="pt-br">
      <body>
        <h1>Cadastro de Periodo</h1>
        <form>

          <label htmlFor="cursos"><strong>Cadastro de Periodo</strong></label>
          <select onChange={(e) => setPeriodo(e.target.value)}>
            <option value=" ">selecione um periodo</option>
            <option value="1º periodo">1º periodo</option>
            <option value="2º periodo">2º periodo</option>
            <option value="3º periodo">3º periodo</option>
          </select>

          <label><strong>turnos</strong></label>
          <select onChange={(e) => setTurno(e.target.value)}>
            <option value=" ">selecione um trurno</option>
            <option value="matutino">matutino</option>
            <option value="vespertino">vespertino</option>
            <option value="noturno">noturno</option>
          </select>
          <label forHTML="dt_in_curso"> <strong>de inicio</strong></label>
          <input
            type="date"
            name="dt_in_curso"
            id="dt_in_curso"
            onChange={(e) => setDt_in_curso(e.target.value)}
          />
          <label forHTML="paicurso"><strong>Curso</strong></label>
          <select id="paicurso">
            <option>selecione um curso</option>
            {Renderiza()}
            <Tenta/>
          </select>

          <div id="ficaEnvio2"></div>
          <button type="submit" id="botao" onClick={CREAT}>Enviar</button>
        </form>
        <br />
        <table id="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Periodo</th>
              <th>Turno</th>
              <th>Inicio</th>
            </tr>
          </thead>
          <tbody id="corpo">
            <tr></tr>
          </tbody>
        </table>
      </body>
    </html>
  </>
);
}
export default Periodo*/



//        CERTO COM OS OPTIONS
/*import { useState } from "react";
import React from 'react';
import Tenta from "./renderiza/periodo";

function Periodo() {
  const corpo = document.getElementById("corpo");//onde os dados vão parar
  const ficaEnvio2 = document.getElementById("ficaEnvio2");//onde fica o input e o boaão  de envio
  const cursos_input = document.getElementById("cursos")
  const botao = document.getElementById("botao");
  
  const [curso, setCurso] = useState()
  const [coordenador, setCoordenador] = useState()
  const [dt_in_curso, setDt_in_curso] = useState()

  var vetor = [];

///////////////////////////////////////////////////
//let paicurso = document.getElementById("paicurso");
const recCurso = [];
//const recCoordenador = [];
function Renderiza(){
  if (localStorage.objetos) {//se tiver "valores" nolocalStorage execute o de baixo
    vetor = JSON.parse(localStorage.getItem('objetos'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
  }
  vetor.forEach(e => {
    recCurso.push(e.curso)
    let criaoption = document.createElement("option");
    criaoption.innerText = recCurso;
    //paicurso.appendChild(criaoption)
    //recCoordenador.push(e.coordenador)
  })
  console.log("o retorno do renderiza "+recCurso)
}

  function CREAT(e) {///VALORES = OBJETOs, INSERIR = CURSO
    e.preventDefault()
    const objeto = {
      curso: curso,
      coordenador: coordenador,
      dt_in_curso: dt_in_curso
    };
    if (localStorage.getItem('objetos')) {
      vetor = JSON.parse(localStorage.getItem('objetos'))
    }
    //console.log(localStorage)
    vetor.push(objeto)
    console.log(`aqui aio o vetor ` + vetor)
    localStorage.setItem("objetos", JSON.stringify(vetor));
    vetor = JSON.parse(localStorage.getItem("objetos"))
    if (corpo) {
      corpo.innerHTML = " ";
    }
    mostrar()
  }

  function DELET(removi) {
    var numeroARemover = removi.target.parentElement.parentElement.children[0].textContent;
    vetor.splice(numeroARemover, 1);
    localStorage.setItem("objetos", JSON.stringify(vetor));
    vetor = JSON.parse(localStorage.getItem("objetos"));
    corpo.innerHTML = "";
    mostrar();
  }

  function UPDATE(editar) {
    let nomeAEditar = editar.target.parentElement.parentElement.children[1].textContent
    var numeroAEditar = editar.target.parentElement.parentElement.children[0].textContent
    cursos_input.value = nomeAEditar;
    console.log(numeroAEditar)
    console.log(nomeAEditar);
    botao.style.display = "none";
    let novobotao = document.createElement("button");
    novobotao.innerText = "Enviar 2.0";
    ficaEnvio2.innerHTML = "";
    ficaEnvio2.appendChild(novobotao);
    /*()=>{
 
 
    novobotao.addEventListener("click", () => {
      vetor.splice(numeroAEditar, 1, curso.value);
      localStorage.setItem("objetos", JSON.stringify(vetor));
      vetor = JSON.parse(localStorage.getItem("objetos"));
      ///////////////////////////////////////////////////
      if (corpo) {
        corpo.innerHTML = "";
      }
      mostrar();
      novobotao.remove();
      //devolvendo o botao enviar normal
      botao.style.display = "block"
    })
  }*
}
//const [cursoedit, setCursoedit] = useState("segio")

function mostrar() {
  if (localStorage.objetos) {//se tiver "valores" nolocalStorage execute o de baixo
    vetor = JSON.parse(localStorage.getItem('objetos'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
  }
  let i = 0;
  vetor.forEach((e) => {
    console.log(e)
    let linha = document.createElement("tr");
    let idItem = document.createElement("td");
    let cursoItem = document.createElement("td");
    let coordenadorItem = document.createElement("td");
    let dt_in_cursoItem = document.createElement("td");
    let editItem = document.createElement("td");
    let deletItem = document.createElement("td");
    let editar = document.createElement("button");
    let removi = document.createElement("button");
    //UPDATE
    editar.className = "editarbt";
    editar.onclick = UPDATE;

    //DELET
    removi.className = "deletarbt";
    removi.onclick = DELET;

    //dando os valores
    cursoItem.innerText = e.curso;
    coordenadorItem.innerText = e.coordenador;
    dt_in_cursoItem.innerText = e.dt_in_curso;
    idItem.innerText = i++;
    editar.innerText = "Editar";
    removi.innerText = "Remover";

    deletItem.appendChild(removi);
    editItem.appendChild(editar);
    linha.appendChild(idItem);
    linha.appendChild(cursoItem);
    linha.appendChild(coordenadorItem);
    linha.appendChild(dt_in_cursoItem);
    linha.appendChild(editItem);
    linha.appendChild(deletItem);
    corpo.appendChild(linha);//o corpo (no caso tbody) está recebendo a linha (no caso tr)
  })
}
return (
  <>
    <html lang="pt-br">
      <body>
        <h1>Cadastro de Periodo</h1>
        <form>

          <label htmlFor="cursos"><strong>Cadastro de Periodo</strong></label>
          <select>
            <option value=" ">selecione um periodo</option>
            <option value="1º periodo">1º periodo</option>
            <option value="2º periodo">2º periodo</option>
            <option value="3º periodo">3º periodo</option>
          </select>

          <label><strong>turnos</strong></label>
          <select>
            <option value=" ">selecione um trurno</option>
            <option value="matutino">matutino</option>
            <option value="vespertino">vespertino</option>
            <option value="noturno">noturno</option>
          </select>
          <label forHTML="dt_in_curso"> <strong>de inicio</strong></label>
          <input
            type="date"
            name="dt_in_curso"
            id="dt_in_curso"
            onChange={(e) => setDt_in_curso(e.target.value)}
          />
          <label forHTML="paicurso"><strong>Curso</strong></label>
          <select id="paicurso">
            <option>selecione um curso</option>
            {Renderiza()}
            <Tenta itens={(recCurso)}/>
          </select>

          <div id="ficaEnvio2"></div>
          <button type="submit" id="botao" onClick={CREAT}>Enviar</button>
        </form>
        <br />
        <table id="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Periodo</th>
              <th>Turno</th>
              <th>Inicio</th>
            </tr>
          </thead>
          <tbody id="corpo">
            <tr></tr>
          </tbody>
        </table>
      </body>
    </html>
  </>
);
}
export default Periodo*/