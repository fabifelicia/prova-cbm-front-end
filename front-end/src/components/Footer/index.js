import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styled'

export default function Footer() {

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/experience')
  }

  const handleReturn = () => navigate('/')

  return (
    <S.Footer>
          <S.Btn onClick={handleReturn}>Voltar</S.Btn>
          <S.Btn primary onClick={handleSubmit}>Próximo</S.Btn>
    </S.Footer>
  )
}


