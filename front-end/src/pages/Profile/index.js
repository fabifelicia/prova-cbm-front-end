import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Buton from '../../components/Buton'

import * as S from './styled'

export default function Profile() {

  const [candidates, setCandidates] = useState([])
  const navigate = useNavigate()

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

  return (
    <S.DivContainer>
      {candidates.map(candidate => {
        return (
          <S.DivCard>
            <S.Title>{candidate.name}</S.Title>
            <S.ContentContainer>
              
              <S.Label><S.LabelStrong>Nome:</S.LabelStrong>{ candidate.name }</S.Label>
              <S.Content>
                <S.Label> <S.LabelStrong>CPF:</S.LabelStrong>{candidate.cpf}</S.Label>
                <S.Label> < S.LabelStrong>Data de Nascimento:</S.LabelStrong>{candidate.data_nascimento}</S.Label>
                <S.Label> <S.LabelStrong>Signo:</S.LabelStrong>{candidate.signo}</S.Label>
              </S.Content>
              <S.Label><S.LabelStrong>Tipo Sanguíneo:</S.LabelStrong>{candidate.tipo_sanguineo}</S.Label>
              <S.Content>
                <S.Label><S.LabelStrong>E-mail:</S.LabelStrong>{candidate.email}</S.Label>
                <S.Label><S.LabelStrong>Telefone:</S.LabelStrong>{candidate.telefone}</S.Label>
              </S.Content>
              
            </S.ContentContainer>

            <S.SubTitle>Resumo</S.SubTitle>
            <S.ContentContainer>
               <S.Label>{candidate.resumo}</S.Label>
            </S.ContentContainer>
            <S.SubTitle>Formação</S.SubTitle>
             <S.ContentContainer style={{height: '83px'}}>
                  <S.Label><S.LabelStrong>Instituição:</S.LabelStrong>{candidate.formação[0].instituicao}</S.Label>
                  <S.Label><S.LabelStrong>Curso:</S.LabelStrong> {candidate.formação[0].curso}</S.Label>
             </S.ContentContainer>                
           
            <S.SubTitle>Experiência</S.SubTitle>
            <S.ContentContainer style={{height: '120px', marginBottom: '18px'}}>
                  <S.Label><S.LabelStrong>Empresa:</S.LabelStrong> {candidate.experiencia[0].empresa}</S.Label>
                  <S.Label><S.LabelStrong>Cargo:</S.LabelStrong>{candidate.experiencia[0].cargo}</S.Label>
                  <S.Label><S.LabelStrong>Tempo:</S.LabelStrong> {candidate.experiencia[0].tempo}</S.Label>            

            </S.ContentContainer>
            <S.SubTitle style={{margin: ' 0 0 17px 0'}}>Competências</S.SubTitle>
            <S.ContentContainer style={{border:'none', margin: '0', height: '150px'}}>
              {candidates.map(candidate => {
                return (
                  <S.Content>                    
                      <S.LabelWithColor>{candidate.competencias}</S.LabelWithColor>                    
                  </S.Content>
                )
              })}

            </S.ContentContainer>
            
            <Buton primary={true} name='Voltar' onClick={() => navigate('/list')} />
          </S.DivCard>
        )
      })}
    </S.DivContainer>
  )
}
