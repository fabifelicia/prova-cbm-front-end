import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from './assets/logo.png'


export default function Home() {

  return (
    <Container style={{display: 'flex', alingItems: 'center', justifyContent: 'center', width: '1440px', height: '1024px', backgroundColor: '#f7f7f7', fontFamily: 'Inter', fontWeight: '500' }}>
      <Card style={{ width: '589px', height: '623px', borderRadius: '70px', backgroundColor: '#fff', boxShadow: '0px 24px 32px rgba(0, 0, 0, 0.25', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '179px' }}>
        <Card.Img src={logo} style={{  width: '215px', height: '214px', position: 'absolute', left: '188px', top: '46px', marginBottom: '44px' }} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '305px', marginBottom: '52px' }}>
          <Card.Title style={{ marginBottom: '21px', fontSize: '40px', lineHeight: '48.41px', color: '#979595' }}>Trabalhe conosco</Card.Title>
          <Button style={{ marginBottom: '17px', borderRadius: '63px', fontSize: '32px', color: '#fff', lineHeight: '38.73px', width: '408px', height: '90px', background: 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%)', border: 'none' }}>Cadastre-se</Button>
          <Button style={{ borderRadius: '63px', fontSize: '32px', color: '#fff', lineHeight: '38.73px', width: '408px', height: '90px', background: 'linear-gradient(91.76deg, #A8A8A8 0%, #C4C4C4 100%)', border: 'none' }} >Ver Concorrentes</Button>
        </Card.Body>
      </Card>

    </Container>


  )
}
