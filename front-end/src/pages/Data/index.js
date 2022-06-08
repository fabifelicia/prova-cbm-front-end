import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Buton from '../../components/Buton'

import userIcon from '../../assets/userIcon.png'
import clipboardIcon from '../../assets/clipboardIcon.png'
import resumeIcon from '../../assets/resumeIcon.png'
import line from '../../assets/line.png'

import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import * as S from './styled'

import * as mask from '../../masks.js'

export default function Dados() {

  const [signs, setSigns] = useState([])
  const [bloodType, setBloodType] = useState([])
  const [user, setUser] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    getSignos('http://localhost:3333/signos')
    getBloodType('http://localhost:3333/tipos-sanguineos')
  }, [navigate])

  async function getSignos(url) {
    const response = await fetch(url)
    const signos = await response.json()

    setSigns(signos)
  }

  async function getBloodType(url) {
    const response = await fetch(url)
    const bloodType = await response.json()

    setBloodType(bloodType)
  }

  function handleReturn() {
    navigate('/')
  }

  function handleNext() {    
    navigate('/experience')
  }

  const handleChange = useCallback((e) => {
    setUser({ 
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    })
  },[user])

  const handleCpf = useCallback((e) => {    
      mask.cpf(e)    
  },[])

  const handlePhone = useCallback((e) => {    
    mask.phone(e)    
},[])

  return (
    <S.DivContainer>
      <S.DivCard>
        <S.Nav>
          <S.NavImage primary={true}>
            <Image src={userIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image src={line} />
          </S.NavImage>
          <S.NavImage>
            <Image src={clipboardIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image src={line} />
          </S.NavImage>
          <S.NavImage>
            <Image src={resumeIcon} />
          </S.NavImage>
        </S.Nav>
        <S.Title>Dados Pessoais</S.Title>

        <S.FormName>
          <S.FormData className="mb-3">
            <S.Label>Nome</S.Label>
            <S.Input type="text" />
          </S.FormData>
        </S.FormName>

        <S.FormData style={{ flexDirection: 'row' }}>
          <S.InputGroup>
            <S.Label>CPF</S.Label>
            <S.Input type="text" name='cpf' onChange={handleChange} onKeyUp={handleCpf} />
          </S.InputGroup>

          <S.InputGroup className="mb-3">
            <S.Label>Data de Nascimento</S.Label>
            <S.Input type="date" />
          </S.InputGroup>
        </S.FormData>

        <S.FormData style={{ flexDirection: 'row' }}>
          <S.InputGroup>
            <S.Label>Signo</S.Label>
            <S.Selecao>
              <option></option>
              {signs.map(signo => {
                return (
                  <option style={{ fontFamiy: 'Inter', fontWeight: '500', color: '#979595' }} key={signo}>{signo}</option>
                )
              })}
            </S.Selecao>
          </S.InputGroup>
          <S.InputGroup className="mb-3">
            <S.Label>Tipo Sanguíneo</S.Label>
            <S.Selecao>
              <option></option>
              {bloodType.map(type => {
                return (
                  <option key={type}>{type}</option>
                )
              })}
            </S.Selecao>
          </S.InputGroup>
        </S.FormData>

        <S.FormData style={{ flexDirection: 'row' }}>
          <S.InputGroup className="mb-3" controlId="formBasicEmail">
            <S.Label>E-mail</S.Label>
            <S.Input type="email" />
          </S.InputGroup>
          <S.InputGroup className="mb-3">
            <S.Label>Telefone</S.Label>
            <S.Input type="text" name='phone' onChange={handleChange} onKeyUp={handlePhone}/>
          </S.InputGroup>
        </S.FormData>
        <S.Footer>
          <Buton primary={false} name="Voltar" onClick={handleReturn} />
          <Buton primary={true} name="Próximo" onClick={handleNext} />
        </S.Footer>

      </S.DivCard>
    </S.DivContainer >
  )
}
