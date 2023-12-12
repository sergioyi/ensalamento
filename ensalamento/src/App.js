import './logo.svg';
import style from './App.module.css';
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div>
      <nav><Link to="/Curso"><button className={style.button}>Cadastro de Curso</button></Link><Link to="/Periodo"><button className={style.button}>Cadastro de Período</button></Link><button className={style.button}>Cadastro de Professores</button><button className={style.button}>Cadastro de Salas</button><button className={style.button}>Cadastro de Desafio</button><Link to="/Calendario"><button className={style.button}>Calendário de horários</button></Link></nav>
    <Outlet/>
    </div>
  );
}

export default App;
