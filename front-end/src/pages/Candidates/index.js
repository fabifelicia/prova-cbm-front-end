import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styled'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Candidates() {

  const navigate = useNavigate()
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    const url = 'http://localhost:3333/perfil'
    getCandidates(url)
  }, [navigate])

  async function getCandidates(url) {
    const response = await fetch(url)
    const candidates = await response.json()
    console.log(candidates)

    setCandidates(candidates)
  }


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
          {candidates.map(candidate => (
            <S.ListGroupItem key={candidate.id}>{candidate.name}
              <S.Buton onClick={handleProfile}>
                <FontAwesomeIcon style={{ marginRight: '5px' }} icon={solid("magnifying-glass")} color='#fff' />
                Ver
              </S.Buton>
            </S.ListGroupItem>
          ))}
        </S.List>
        <S.ButtonReturn onClick={handleReturn}>Voltar</S.ButtonReturn>
      </S.DivCard>
    </S.DivContainer>
  )
}
