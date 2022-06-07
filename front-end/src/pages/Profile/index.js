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
            <S.Label><strong>Nome:</strong>{candidate.name}</S.Label>
            <S.Label>CPF:{candidate.cpf}</S.Label>
            <S.Label> Data de Nascimento:{candidate.data_nascimento}</S.Label>
            <S.Label>Signo:{candidate.signo}</S.Label>
            <S.Label>Tipo Sanguíneo:{candidate.tipo_sanguineo}</S.Label>
            <S.Label>E-mail:{candidate.email}</S.Label>
            <S.Label>Telefone:{candidate.telefone}</S.Label>
            <S.Title>Resumo</S.Title>
            <S.Label>{candidate.resumo}</S.Label>
            <S.Title>Formação</S.Title>
            
                  <S.Label>Instituição: {candidate.formação[0].instituicao}</S.Label>
                  <S.Label>Curso: {candidate.formação[0].curso}</S.Label>
                
           
            <S.Title>Experiência</S.Title>
            
                  <S.Label>Empresa: {candidate.experiencia[0].empresa}</S.Label>
                  <S.Label>Cargo: {candidate.experiencia[0].cargo}</S.Label>
                  <S.Label>Tempo: {candidate.experiencia[0].tempo}</S.Label>
             
            <S.Title>Competências</S.Title>
            {candidates.map(candidate => {
              return (
                <S.Label>{candidate.competencias}</S.Label>

              )
            })}
            <Buton primary={true} name='Voltar' onClick={() => navigate('/list')} />
          </S.DivCard>
        )
      })}
    </S.DivContainer>
  )
}
