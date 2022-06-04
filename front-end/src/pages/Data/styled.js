import styled from 'styled-components'

import { Card, Button, Container, ListGroup, Navbar, Figure } from 'react-bootstrap'
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

export const Nav = styled(Navbar)`
  width: 628px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: trasnparent  
`

export const NavImage = styled(Figure)`
  width: 149px;
  height: 149px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;  
  &:first-child {
    background-image: linear-gradient(100.23deg, #D42F43 -23.11%, rgba(211, 130, 62, 0.73) 126.59%);
  }
  &:nth-child(2n + 1) {
    background-color: #c3c3c3;
  }
`

export const Title = styled(Card.Header)`  
  font-size: 40px;  
  line-height: 48px;  
  color: #979595;
  border: none;
  background-color: transparent;
`

export const List = styled(ListGroup)`
  width: 100%;
  border-radius: 10px;
  background-color: #f3f3f3;
  border: none; 
  margin-bottom: 27px;  
`

export const ListGroupItem = styled(ListGroup.Item)`  
  font-size: 24px;
  line-height: 29px;
  color: #767474;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
`

export const Footer = styled(Container)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 66.16px 0 51px;
`

export const Btn = styled(Button)`
width: 216.84px;
height: 68px;
border-radius: 14px; 
font-size: 24px;
line-height: 29px;
font-weight: 500;
border: none;
color: #fff;
background-image: ${props => props.primary 
  ? 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%)' 
  : 'linear-gradient(0deg, #8A8A8A, #8A8A8A)'
  }
`