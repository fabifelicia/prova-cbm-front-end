import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home() {
  
  return (
   <Container style={{position: 'relative', width: '1440px', height: '1024px', backgroundColor:'#f7f7f7'}}>
     <Card style={{width: '589px', height: '623px', borderRadius: '70px', backgroundColor: '#fff', boxShadow:'0px 24px 32px rgba(0, 0, 0, 0.25'}}>
      <Card.Img variant="top" src="./assets/logo.png" />
      <Card.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Title style={{fontSize: '40px', lineHeight: '48.41px', color: '#979595'}}>Trabalhe conosco</Card.Title>        
        <Button style={{margin: '5px', borderRadius: '63px', width: '408px', height: '90px', backgroundColor: 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%), #D9D9D9'}}>Cadastre-se</Button>
        <Button style={{margin: '5px', borderRadius: '30px'}} variant="secondary">Ver Concorrentes</Button>
      </Card.Body>
    </Card>
    
   </Container>
      
    
  )
}
