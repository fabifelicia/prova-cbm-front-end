import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import * as S from './styled'

import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Experience() {
  return (
    <S.DivContainer>
      <S.DivCard>
        <Header />
        <S.Title>Experiência</S.Title>
        <S.Content style={{ marginTop: '45px' }}>
          <S.Label style={{ marginLeft: '22px' }}>Formação</S.Label>
          <FontAwesomeIcon icon={solid("circle-plus")} />
        </S.Content>
        <S.ContentContainer>
          <S.Label>Experiência</S.Label>
          <S.Input type="text" />
          <S.Label>Curso</S.Label>
          <S.Input type="text" />
        </S.ContentContainer>
        <S.Content style={{ marginTop: '30px' }}>
          <S.Label style={{ marginLeft: '22px' }}>Experiência</S.Label>
          <FontAwesomeIcon icon={solid("circle-plus")} />
        </S.Content>
        <S.ContentContainer style={{ height: '283px' }}>
          <S.Label>Empresa</S.Label>
          <S.Input type="text" />
          <S.Label>Cargo</S.Label>
          <S.Input type="text" />
          <S.Label>Tempo de Serviço</S.Label>
          <S.InputGroup>
            <S.Input type="text" />
          </S.InputGroup>
          <S.Label>É seu emprego atual</S.Label>
          <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Sim"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Não"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />               
              </div>
            ))}
          </Form>
        </S.ContentContainer>
        <S.ContentContainer style={{ marginTop: '30px', marginBottom: '65px', border: 'none' }}>
          <S.Label style={{ marginLeft: '22px' }}>Competências</S.Label>
          <S.Input style={{ height: '135px' }} type="text" />
        </S.ContentContainer>

        <Footer />
      </S.DivCard>
    </S.DivContainer>
  )
}
