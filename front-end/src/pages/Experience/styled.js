import styled from 'styled-components'

import { Card, Container, Form, Figure } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const DivContainer = styled(Container)`
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
  justify-content: flex-start;  
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
export const ContentContainer = styled(Container)`
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

export const FormData = styled(Form)`
  display: flex;  
  align-items: start;
  justify-content: center; 
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
  padding-left: 20px;
`

export const Footer = styled(Container)`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 66.16px 0 51px;
`

export const RadioButton = styled(InputGroup) ` 
  align-items: center;
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 400;
  font-family: 'Inter';
  color: #979595;
  
  .form-check {
    display: inline-flex;
    align-items: center;
    justify-content: center;      
  }
 
`

export const Check = styled(Form.Check)`
  .form-check-input {
    width: 42px;
    height: 42px;
    margin-right: 5px;
  }
  
 .form-check-input:checked {
    background-color: #D42F43;
  }
`

