import './App.css'
import Cards from './components/Cards.jsx'
import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import Nav from './components/Nav'
import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import { useNavigate } from "react-router-dom";
import Form from './components/Form'
import { useSelector } from 'react-redux'
import FavoriteContainer from './components/FavoriteContainer'




//------------------------------------------------------------------------

function App () { //------------------- COMPONENTE ----------------------------


  const character = useSelector( state => state.character)
  const navigate = useNavigate();
  const location = useLocation();
  const access = useSelector(state => state.access)

  function CambiarFondo() {  // CAMBIAR FONDO DEPENDIENDO DE LA CARTA
    for (let f=0; f<character.length; f++) {
      
      if (isNaN(character[f].gender[0])) {
        document.body.style.backgroundImage = "url(https://pbs.twimg.com/media/DNeM89PXUAIDMkd.jpg)"
        return
      }
    }
    document.body.style.backgroundImage = "url(https://images5.alphacoders.com/571/571559.jpg)"
  }
  
  useEffect(()=>{
    CambiarFondo()
  },[character]) 

  useEffect(()=>{
    if (!access) {
      navigate('/')
    }
  },[])


//-----------------RENDER ----------------------------------
  return (
    <div className='App' style={{ padding: '25px' }}>
      <GlobalStyle />
      {location.pathname!='/'?<Nav />:null}
      <div>
        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/home' element={<Cards />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favorites' element={<FavoriteContainer />} />
        </Routes>
      </div>
    </div> 
  )
}

export default App