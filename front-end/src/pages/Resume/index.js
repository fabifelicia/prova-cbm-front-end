import React from 'react'
import { useNavigate } from 'react-router-dom'

import Buton from '../../components/Buton'

import * as S from './styled'

import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import userIcon from '../../assets/userIcon.png'
import clipboardIcon from '../../assets/clipboardIcon.png'
import resumeIcon from '../../assets/resumeIcon.png'
import line2 from '../../assets/line2.png'

export default function Resume() {
  const navigate = useNavigate()

  function handleSubmit() {
    
  }

  return (
    <S.DivContainer>
      <S.DivCard>
      <S.Nav>
          <S.NavImage secundary>
            <Image src={userIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image src={line2} />
          </S.NavImage>
          <S.NavImage secundary>
            <Image src={clipboardIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image src={line2} />
          </S.NavImage>
          <S.NavImage primary>
            <Image src={resumeIcon} />
          </S.NavImage>
        </S.Nav>

        <S.Title>Resumo</S.Title>
        <S.Label>Sobre</S.Label>
        <S.Input as="textarea" />

        <S.Footer>
          <Buton primary={false} name="Voltar" onClick={() => navigate('/experience')} />
          <Buton primary={true} name="Enviar" onClick={handleSubmit} />
        </S.Footer>
        
      </S.DivCard>
    </S.DivContainer>
  )
}
