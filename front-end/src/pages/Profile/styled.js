import styled from 'styled-components'

import { Card, Button, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const DivContainer = styled(Container) `
  display: flex;
  aling-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  font-family: 'Inter';
  font-weight: 500; 
` 

export const DivCard = styled(Card)`
  width: 998px;  
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center; 
  padding: 88px 106px 49px;
  border-radius: 70px;
  background-color: #fff;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
`

export const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    
`

export const Title = styled(Card.Title)`
  margin-bottom: 21px;
  font-size: 40px;
  line-height: 48.41px;
  color: #979595;  
`

export const Label = styled(Form.Label)`
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 400;
  color: #979595;
`

export const Buton = styled(Button)`
  width: 216.84px;
  height: 68px;  
  border-radius: 14px;
  font-size: 24px;
  color: #fff;
  line-height: 29px;
  border: none;
  background-image: linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%)
`
