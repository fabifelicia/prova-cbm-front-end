import styled from 'styled-components'

import { Card, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const DivContainer = styled(Container) `
  width: 1440px;
  height: 1495px;
  display: flex;
  aling-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  font-family: 'Inter';
  font-weight: 500;
` 

export const DivCard = styled(Card)`
  width: 998px;
  height: 1296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 88px;
  padding: 61px 0 30px 0;   
  border-radius: 70px;
  background-color: #fff;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
`

export const Title = styled(Card.Header)`  
  font-size: 40px;  
  line-height: 48.41px;  
  color: #979595;
  border: none;
  background-color: transparent;
`
export const Content = styled(Container)`
  width: 658px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContentContainer = styled(Container) `
  width: 658px;
  height: 202px;
  border-radius: 8px;
  border: 2px solid #d9d9d9;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
`

export const InputGroup = styled(Form.Group)`
  width: 298px;
`

export const Label = styled(Form.Label)`
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 400;
  color: #979595
`

export const Input = styled(Form.Control)`
  background-color: #f3f3f3 ;
  border-radius: 11px;
  border: none;
  height: 44px;

`