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

      </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
