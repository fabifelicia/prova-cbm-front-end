import React from 'react'
import Footer from '../../components/Footer'

import { Image, Form } from 'react-bootstrap'
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
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" />            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Signo</Form.Label>
            <Form.Control type="select" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Tipo Sanguíneo</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" />
          </Form.Group>          
        </Form>
        <Footer />
      </S.DivCard>
    </S.DivContainer>
  )
}
