import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


//pages
import Home from './pages/home/Home'
import UnidadesPage from './pages/unidades/Unidades'
import ModalidadesPage from './pages/modalidades/Modalidades'
import Contato from './pages/contato/Contato'
import Aluno from './pages/area-do-aluno/Aluno'
import Matricula from './pages/matricula/Matricula'
import Modalidade from './pages/modalidade/Modalidade'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/unidades' element={<UnidadesPage/>}> </Route>
        <Route path='/modalidades' element={<ModalidadesPage/>}> </Route>
        <Route path='/contato' element={<Contato/>}> </Route>
        <Route path='/aluno' element={<Aluno/>}> </Route>
        <Route path='/matricula' element={<Matricula/>}> </Route>
        <Route path='modalidades/musculação' element={<Modalidade pageInfo={{title:' MUSCULAÇÃO 24H ', description:'bla bla bla'}}/>}> </Route>
        <Route path='modalidades/crossTraining' element={<Modalidade  pageInfo={{title:' CROSS TRAINING ', description:'bla bla bla'}}/>}> </Route>
        <Route path='modalidades/nutricionista' element={<Modalidade  pageInfo={{title:'NUTRICIONISTA ', description:'bla bla bla'}}/>}> </Route>
        <Route path='modalidades/funcional' element={<Modalidade  pageInfo={{title:'FUNCIONAL', description:'bla bla bla'}}/>}> </Route>
        <Route path='modalidades/danças' element={<Modalidade  pageInfo={{title:'DANÇAS', description:'bla bla bla'}}/>}> </Route>
        <Route path='modalidades/cardio-hit' element={<Modalidade  pageInfo={{title:'CARDIO & HIT', description:'bla bla bla'}}/>}> </Route>
        <Route path='modalidades/artes-marciais' element={<Modalidade  pageInfo={{title:'ARTES MARCIAIS', description:'bla bla bla'}}/>}> </Route>
      </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
