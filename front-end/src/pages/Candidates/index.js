import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styled'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Candidates() {

  const navigate = useNavigate()

  function handleReturn() {
    navigate('/')
  }

  function handleProfile() {
    navigate('/profile')
  }

  return (
    <S.DivContainer>
      <S.DivCard>
        <S.Title>Candidatos</S.Title>
        <S.List>
          <S.ListGroupItem>Aurora Jesus
            <S.Buton onClick={handleProfile}>
              <FontAwesomeIcon style={{marginRight: '5px'}} icon={solid("magnifying-glass")} color='#fff'/>
              Ver
            </S.Buton>
          </S.ListGroupItem>
        </S.List>
        <S.ButtonReturn onClick={handleReturn}>Voltar</S.ButtonReturn>
      </S.DivCard>
    </S.DivContainer>
  )
}
