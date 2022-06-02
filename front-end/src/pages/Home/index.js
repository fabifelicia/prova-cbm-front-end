import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  
  return (
   <Container style={{display:'flex', alignItems: 'center', justifyContent: 'center', margin: '100px'}}>
     <Card style={{width: '18rem', borderRadius: '5rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Title>Trabalhe conosco</Card.Title>        
        <Button style={{margin: '5px', borderRadius: '30px'}} variant="primary">Cadastre-se</Button>
        <Button style={{margin: '5px', borderRadius: '30px'}} variant="primary">Ver Concorrentes</Button>
      </Card.Body>
    </Card>
    
   </Container>
      
    
  )
}
