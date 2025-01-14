import styled from 'styled-components'

import { Card, Container, Form, Figure } from 'react-bootstrap'
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
  align-items: center;
  justify-content: space-between;  
  padding: 61px 0 30px 0;   
  border-radius: 70px;
  background-color: #fff;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
`

export const Nav = styled(Container)`  
  display: flex;
  align-items: center;
  justify-content: center;   
`

export const NavImage = styled(Figure)`
  width: 149px;
  height: 149px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:nth-child(2n + 1) {    
    border-radius: 50%; 
    background-color: ${props => props.secundary
      ? '#429542'
      : '#c3c3c3'
    }   
  }

  &:nth-child(2n) {
    width: 103px;    
  }

  background-image: ${props => props.primary 
    ? 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%)' 
    : 'none'
    } 
  `

export const Title = styled(Card.Header)`  
  font-size: 40px;  
  line-height: 48px;  
  color: #979595;
  border: none;
  background-color: transparent;
`

export const FormName = styled(Form)`
  width: 628px;  
`

export const FormData = styled(FormName)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between; 
  
  &:last-child {
    margin-bottom: 61px;
  }
`

export const InputGroup = styled(Form.Group)`
  width: 298px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
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
  color: #979595;
 

`

export const Selecao = styled(Form.Select)`
  width: 298px;
  background-color: #f3f3f3 ;
  border-radius: 11px;
  border: none;
  height: 44px;
  font-family: 'Inter';
  font-weight: 500;
  color: #979595;
` 

export const Footer = styled(Container)`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 66.16px 0 51px;
margin-top: 61px;
`

