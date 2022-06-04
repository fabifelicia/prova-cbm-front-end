import React from 'react'

import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import * as S from './styled'

import userIcon from './assets/userIcon.png'
import clipboardIcon from './assets/clipboardIcon.png'
import resumeIcon from './assets/resumeIcon.png'
import line from './assets/line.png'

export default function Dados() {
  return (
    <S.DivContainer>
      <S.DivCard>
        <S.Nav>                 
          <S.NavImage>
            <Image src={userIcon}/>
          </S.NavImage>
          <S.NavImage>
            <Image style={{width: '100%'}} src={line}/>
          </S.NavImage>
          <S.NavImage>
            <Image src={ clipboardIcon }/>
          </S.NavImage>
          <S.NavImage>
            <Image style={{width: '100%'}} src={line}/>
          </S.NavImage>
          <S.NavImage>
            <Image src={ resumeIcon }/>
          </S.NavImage>          
        </S.Nav>
        <S.Title>Dados Pessoais</S.Title>
        <S.Footer>
          <S.Btn>Voltar</S.Btn>
          <S.Btn primary>Próximo</S.Btn>
        </S.Footer>
      </S.DivCard>
    </S.DivContainer>
  )
}
