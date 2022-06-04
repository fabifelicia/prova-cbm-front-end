import styled from 'styled-components'

import { Card, Container, Navbar, Figure, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const DivContainer = styled(Container) `
  width: 1440px;
  height: 1024px;
  display: flex;
  aling-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  font-family: 'Inter';
  font-weight: 500;
  overflow: hidden;
` 

export const DivCard = styled(Card)`
  width: 998px;
  height: 848px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 88px; 
  padding: 61px 0 30px 0;   
  border-radius: 70px;
  background-color: #fff;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
`

export const Title = styled(Card.Header)`  
  font-size: 40px;  
  line-height: 48px;  
  color: #979595;
  border: none;
  background-color: transparent;
`

export const Label = styled(Form.Label)`
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 400;
  color: #979595;
  position: relative;
  left: -280px;
`

export const Input = styled(Form.Control)`
  width: 628px;
  background-color: #f3f3f3 ;
  border-radius: 11px;
  border: none;
  height: 293px;
  margin-bottom: 79px;

`