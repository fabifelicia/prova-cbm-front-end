import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

import { Image, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import * as S from './styled'

import userIcon from './assets/userIcon.png'
import clipboardIcon from './assets/clipboardIcon.png'
import resumeIcon from './assets/resumeIcon.png'
import line from './assets/line.png'

export default function Dados() {

  const [ signs, setSigns ] = useState([])
  const [ bloodType, setBloodType ] = useState([])

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

  return (
    <S.DivContainer>
      <S.DivCard>
        <S.Nav>
          <S.NavImage>
            <Image src={userIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image style={{ width: '100%' }} src={line} />
          </S.NavImage>
          <S.NavImage>
            <Image src={clipboardIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image style={{ width: '100%' }} src={line} />
          </S.NavImage>
          <S.NavImage>
            <Image src={resumeIcon} />
          </S.NavImage>
        </S.Nav>
        <S.Title>Dados Pessoais</S.Title>
        <S.FormName>
          <Form.Group className="mb-3">
            <S.Label>Nome</S.Label>
            <S.Input type="text" />
          </Form.Group>
        </S.FormName>

        <S.FormData>
          <S.InputGroup className="mb-3">
            <S.Label>CPF</S.Label>
            <S.Input type="text" />
          </S.InputGroup>

          <S.InputGroup className="mb-3">
            <S.Label>Data de Nascimento</S.Label>
            <S.Input type="text" />
          </S.InputGroup>

        </S.FormData>

        <S.Label>Signo</S.Label>
        <Form.Select>
          <option></option>
          {signs.map(signo => {
            return (
              <option key={signo}>{signo}</option>
            )
          })}
        </Form.Select>
        
          <S.Label>Tipo Sanguíneo</S.Label>
          <Form.Select>
          <option></option>
          {bloodType.map(type => {
            return (
              <option key={type}>{type}</option>
            )
          })}
        </Form.Select>


        <S.FormData>
          <S.InputGroup className="mb-3" controlId="formBasicEmail">
            <S.Label>E-mail</S.Label>
            <S.Input type="email" />
          </S.InputGroup>
          <S.InputGroup className="mb-3">
            <S.Label>Telefone</S.Label>
            <S.Input type="text" />
          </S.InputGroup>
        </S.FormData>
        <Footer />
      </S.DivCard>
    </S.DivContainer>
  )
}
