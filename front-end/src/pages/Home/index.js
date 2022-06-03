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
          <S.Buton style={{ background: 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%)'}} onClick={handleCadastro}>Cadastre-se</S.Buton>
          <S.Buton style={{ background: 'linear-gradient(91.76deg, #A8A8A8 0%, #C4C4C4 100%)'}} onClick={handleList}>Ver Concorrentes</S.Buton>
        </S.CardBody>
      </S.DivCard>
    </S.DivContainer>


  )
}
