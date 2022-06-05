import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'


import * as S from './styled'

export default function Resume() {
  return (
    <S.DivContainer>
      <S.DivCard>
        <Header />
        <S.Title>Resumo</S.Title>
        <S.Label>Sobre</S.Label>
        <S.Input type="text" />
        <Footer />
      </S.DivCard>
    </S.DivContainer>
  )
}
