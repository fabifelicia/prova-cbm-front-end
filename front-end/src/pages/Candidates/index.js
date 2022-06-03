import React from 'react'

import { Card, ListGroup, Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Candidates() {
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Candidatos</Card.Header>
        <ListGroup>
          <ListGroup.Item>Aurora Jesus
            <Button style={{ background: 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%)', height: '50px' , fontWeight: '500'}}>
              <FontAwesomeIcon icon={solid("magnifying-glass")} color='#fff' />
              Ver
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}
