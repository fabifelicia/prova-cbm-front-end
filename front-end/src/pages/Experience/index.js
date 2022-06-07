import React from 'react'
import { useNavigate } from 'react-router-dom'

import Buton from '../../components/Buton'

import * as S from './styled'

import { Form, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import userIcon from '../../assets/userIcon.png'
import clipboardIcon from '../../assets/clipboardIcon.png'
import resumeIcon from '../../assets/resumeIcon.png'
import line from '../../assets/line.png'
import line2 from '../../assets/line2.png'


export default function Experience() {

  const navigate = useNavigate()

  return (
    <S.DivContainer>
      <S.DivCard>
        <S.Nav>
          <S.NavImage secundary>
            <Image src={userIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image src={line2} />
          </S.NavImage>
          <S.NavImage primary>
            <Image src={clipboardIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image src={line} />
          </S.NavImage>
          <S.NavImage>
            <Image src={resumeIcon} />
          </S.NavImage>
        </S.Nav>

        <S.Title>Experiência</S.Title>
        <S.Content style={{ marginTop: '45px' }}>
          <S.Label style={{ marginLeft: '22px' }}>Formação</S.Label>

          <FontAwesomeIcon onClick={() => {}} style={{cursor: 'pointer'}} icon={solid("circle-plus")} />

        </S.Content>

        <S.ContentContainer>
          <S.Label>Experiência</S.Label>
          <S.Input type="text" />
          <S.Label>Curso</S.Label>
          <S.Input type="text" />
        </S.ContentContainer>
        <S.Content style={{ marginTop: '30px' }}>
          <S.Label style={{ marginLeft: '22px' }}>Experiência</S.Label>

          <FontAwesomeIcon onClick={() => {}} style={{cursor: 'pointer'}} icon={solid("circle-plus")} />

        </S.Content>
        <S.ContentContainer style={{ height: '283px' }}>
          <S.Label>Empresa</S.Label>
          <S.Input type="text" />
          <S.Label>Cargo</S.Label>
          <S.Input type="text" />
          <S.Content>

            <S.Label>Tempo de Serviço</S.Label>
            <S.InputGroup>
              <S.Input type="text" />
            </S.InputGroup>
            <S.Label>É seu emprego atual</S.Label>
            <S.InputGroup>
              <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline
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

            </S.InputGroup>
          </S.Content>
        </S.ContentContainer>

        <S.ContentContainer style={{ marginTop: '30px', marginBottom: '61px', border: 'none' }}>
          <S.Label style={{ marginLeft: '22px' }}>Competências</S.Label>
          <S.Input style={{ height: '135px', width: '628px', resize: 'none' }} as="textarea" />
          <FontAwesomeIcon onClick={() => {}} style={{cursor: 'pointer', position: 'relative', bottom:'120px', left: '20px' }} icon={solid("circle-plus")} />
        </S.ContentContainer>

        <S.Footer>
          <Buton primary={false} name="Voltar" onClick={() => navigate('/data')} />
          <Buton primary={true} name="Próximo" onClick={() => navigate('/resume')} />
        </S.Footer>

      </S.DivCard>
    </S.DivContainer>
  )
}
