import React from 'react'
import { useNavigate } from "react-router-dom";

import * as S from './styled'


import logo from './assets/logo.png'


export default function Home() {

  const navigate = useNavigate()

  function handleCadastro() {
    navigate('/data')
  }

  function handleList() {    
      navigate('/list')      
    
  }

  return (
    <S.DivContainer>
      <S.DivCard>
        <S.Image src={logo}/>
        <S.CardBody>
          <S.Title>Trabalhe conosco</S.Title>
          <S.Buton primary onClick={handleCadastro}>Cadastre-se</S.Buton>
          <S.Buton onClick={handleList}>Ver Concorrentes</S.Buton>
        </S.CardBody>
      </S.DivCard>
    </S.DivContainer>


  )
}
