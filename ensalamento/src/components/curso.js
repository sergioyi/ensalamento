

///AQUI ESTO CERTO




import {useState } from "react";
import style from './curso.module.css'
import React from 'react';
//import Tenta from "./renderiza/curso";
function Curso() {
  const corpo = document.getElementById("corpo");//onde os dados vão parar
  const ficaEnvio2 = document.getElementById("ficaEnvio2");//onde fica o input e o boaão  de envio

  const cursos_input = document.getElementById("cursos")
  const coordenador_input = document.getElementById("coordenador")
  const dt_in_curso_input = document.getElementById("dt_in_curso")

  const botao = document.getElementById("botao");

  const [curso, setCurso] = useState()
  const [coordenador, setCoordenador] = useState()
  const [dt_in_curso, setDt_in_curso] = useState()

  var vetor = [];
  /*
  ///////////////////////////////////////////////////
  const recCurso = [];
  const recCoordenador = [];
  const recData = [];
  function Renderiza() {
    if (localStorage.objetos) {//se tiver "valores" nolocalStorage execute o de baixo
      vetor = JSON.parse(localStorage.getItem('objetos'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
    }
    vetor.forEach(e => {
      recCurso.push(e.curso)
      recCoordenador.push(e.coordenador)
      recData.push(e.dt_in_curso)
      //console.log("o retorno do renderiza "+e)
    })
    console.log("o retorno do renderiza " + recCurso)
  }
  ///////////////////////////////////////////////////
  */

  function CREAT(e) {///VALORES = OBJETOs, INSERIR = CURSO
    const objeto = {
      curso: curso,
      coordenador: coordenador,
      dt_in_curso: dt_in_curso
    };
    e.preventDefault()
    if (localStorage.getItem('objetos')) {
      vetor = JSON.parse(localStorage.getItem('objetos'))
    }
    vetor.push(objeto)
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
/*
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  const edica = (e) => {
    let nomeAEditar = e.target.parentElement.parentElement.children[1].textContent
    let numeroAEditar = e.target.parentElement.parentElement.children[0].textContent
    cursos_input.value = nomeAEditar
    let nomeDoCoordenador = e.target.parentElement.parentElement.children[2].textContent
    coordenador_input.value = nomeDoCoordenador
    let numeroDAData = e.target.parentElement.parentElement.children[3].textContent
    dt_in_curso_input.value = numeroDAData

    botao.style.display = "none";
    let novobotao = document.createElement("button");
    novobotao.innerText = "Enviar 2.0";
    ficaEnvio2.innerHTML = "";
    ficaEnvio2.appendChild(novobotao);

    vetor.forEach((e)=>{
    console.log(nomeAEditar+" funciona a edição "+numeroAEditar+" "+ e.curso)
    })
    //vetor.splice(numeroAEditar, 1, curso.value);      EU CONSEUINDO POSSO DELETAR A FUNÇÃO UPDATE

  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
*/
  function UPDATE(editar) {
    let numeroAEditar = editar.target.parentElement.parentElement.children[0].textContent
    cursos_input.value = "";
    coordenador_input.value = ""
    dt_in_curso_input.value = ""

    //criando o botão para que eu possa fazer um 2º envio
    botao.style.display = "none";
    let novobotao = document.createElement("button");
    novobotao.innerText = "Enviar 2.0";
    ficaEnvio2.innerHTML = "";
    ficaEnvio2.appendChild(novobotao);
    //devolvendo a lista de objetos para o vetor
    if (localStorage.getItem('objetos')) {
      vetor = JSON.parse(localStorage.getItem('objetos'))
    }
    //vend se eu posso enviar os dados do objeto para o splice
    //console.log(objeto.curso+" "+objeto.coordenador+" "+objeto.dt_in_curso+" ")
    //quandoapertar o novo botão vai 
    novobotao.onclick=()=>{
      const objeto = {
        curso: cursos_input.value,
        coordenador: coordenador_input.value,
        dt_in_curso: dt_in_curso_input.value 
      };
      /*let novoobjeto = {
        novocurso: objeto.curso,
        novocoordenador: objeto.coordenador,
        novadata: objeto.dt_in_curso
      }*/
      vetor.splice(numeroAEditar, 1, objeto);
      localStorage.setItem("objetos", JSON.stringify(vetor));
      vetor = JSON.parse(localStorage.getItem("objetos"));
      if (corpo) {
        corpo.innerHTML = "";
      }
      mostrar();
      novobotao.remove();
      //devolvendo o botao enviar normal
      botao.style.display = "block"
    }
    //console.log(cursos_input.value+" funciona a edição "+numeroAEditar)
  }
  //const [cursoedit, setCursoedit] = useState("segio")

  function mostrar() {
    if (localStorage.objetos) {//se tiver "valores" nolocalStorage execute o de baixo
      vetor = JSON.parse(localStorage.getItem('objetos'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
    }
    let i = 0;
    vetor.forEach(e => {
      //console.log(e)
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
      <html lang="pt-br" className={style.html}>
        <body>
          <h1>Cadastro de Cursos</h1>
          <form id="form">
            <label htmlFor="cursos"><strong>Cadastro de Cursos</strong></label>
            <input
              type="text"
              name="cursos"
              id="cursos"
              onChange={(e) => setCurso(e.target.value)}
            />

            <label htmlFor="coordenador"><strong>Cadastro de Cordenador</strong></label>
            <input
              type="text"
              name="coordenador"
              id="coordenador"
              onChange={(e) => setCoordenador(e.target.value)}
            />

            <label htmlFor="dt_in_curso"><strong>Inicio do curso</strong></label>
            <input
              type="date"
              name="dt_in_curso"
              id="dt_in_curso"
              onChange={(e) => setDt_in_curso(e.target.value)}
            />

            <div id="ficaEnvio2"></div>
            <button type="submit" id="botao" onClick={CREAT}>Enviar</button>
          </form>
          <br />
          <table id="tabela">
            <thead>
              <tr>
                <th>ID</th>
                <th>Curso</th>
                <th>Cordenador</th>
                <th>Inicio</th>
              </tr>
            </thead>
            <tbody id="corpo" >
            </tbody>
          </table>

        </body>
      </html>
    </>
  );
}
export default Curso;





//<Tenta curso={recCurso} coordenador={recCoordenador} data={recData} edit={edica} />
/*
import { useState} from "react";
import style from './curso.module.css'
import React from 'react';
function Curso() {
  const corpo = document.getElementById("corpo");//onde os dados vão parar
  const ficaEnvio2 = document.getElementById("ficaEnvio2");//onde fica o input e o boaão  de envio
  const cursos_input = document.getElementById("cursos")
  const botao = document.getElementById("botao");

  const [curso, setCurso] = useState()
  const [coordenador, setCoordenador] = useState()
  const [dt_in_curso, setDt_in_curso] = useState()

  var vetor = [];
  
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
    console.log(`aqui aio o vetor `+ vetor)
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
    vetor.forEach((e)=>{
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
      <html lang="pt-br" className={style.html}>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Cadastro de Cursos</title>
        </head>
        <body>
          <h1>Cadastro de Cursos</h1>
          <form>
              
              <label htmlFor="cursos"><strong>Cadastro de Cursos</strong></label>
              <input
                type="text"
                name="cursos"
                id="cursos"
                onChange={(e) => setCurso(e.target.value)}
              />
              
              <label htmlFor="coordenador"><strong>Cadastro de Cordenador</strong></label>
              <input
                type="text"
                name="coordenador"
                onChange={(e) => setCoordenador(e.target.value)}
              />

              <label htmlFor="dt_in_curso"><strong>Cadastro de Cordenador</strong></label>
              <input
                type="date"
                name="dt_in_curso"
                onChange={(e) => setDt_in_curso(e.target.value)}
              />

              <div id="ficaEnvio2"></div>
              <button type="submit" id="botao" onClick={CREAT}>Enviar</button>
          </form>
          <br />
          <table id="tabela">
            <thead>
              <tr>
                <th>ID</th>
                <th>Curso</th>
                <th>Cordenador</th>
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
export default Curso;
*/


