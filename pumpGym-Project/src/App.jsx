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
        <Route path='/pump-gym' element={<Home/>}></Route>
        <Route path='/pump-gym/unidades' element={<UnidadesPage/>}> </Route>
        <Route path='/pump-gym/modalidades' element={<ModalidadesPage/>}> </Route>
        <Route path='/pump-gym/contato' element={<Contato/>}> </Route>
        <Route path='/pump-gym/aluno' element={<Aluno/>}> </Route>
        <Route path='/pump-gym/matricula' element={<Matricula/>}> </Route>
        <Route path='/pump-gym/modalidades/musculação' element={<Modalidade pageInfo={{title:' MUSCULAÇÃO 24H ', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est magnam soluta deleniti incidunt, velit reprehenderit natus porro esse facilis saepe amet fugit reiciendis nisi sit quos aspernatur quia, non veritatis!'}}/>}> </Route>
        <Route path='/pump-gym/modalidades/crossTraining' element={<Modalidade  pageInfo={{title:' CROSS TRAINING ', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est magnam soluta deleniti incidunt, velit reprehenderit natus porro esse facilis saepe amet fugit reiciendis nisi sit quos aspernatur quia, non veritatis!'}}/>}> </Route>
        <Route path='/pump-gym/modalidades/nutricionista' element={<Modalidade  pageInfo={{title:'NUTRICIONISTA ', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est magnam soluta deleniti incidunt, velit reprehenderit natus porro esse facilis saepe amet fugit reiciendis nisi sit quos aspernatur quia, non veritatis!'}}/>}> </Route>
        <Route path='/pump-gym/modalidades/funcional' element={<Modalidade  pageInfo={{title:'FUNCIONAL', description:'bla bla bla'}}/>}> </Route>
        <Route path='/pump-gym/modalidades/danças' element={<Modalidade  pageInfo={{title:'DANÇAS', description:'bla bla bla'}}/>}> </Route>
        <Route path='/pump-gym/modalidades/cardio-hit' element={<Modalidade  pageInfo={{title:'CARDIO & HIT', description:'bla bla bla'}}/>}> </Route>
        <Route path='/pump-gym/modalidades/artes-marciais' element={<Modalidade  pageInfo={{title:'ARTES MARCIAIS', description:'bla bla bla'}}/>}> </Route>
      </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
