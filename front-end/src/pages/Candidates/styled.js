import styled from 'styled-components'

import { Card, Button, Container, ListGroup } from 'react-bootstrap'
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
  align-items: flex-start;
  justify-content: start;  
  padding: 87px 51px 49px 51px;
  border-radius: 70px;
  background-color: #fff;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);`

export const Title = styled(Card.Header)`  
  font-size: 40px;
  font-style: normal;
  line-height: 48px;
  padding-left: 9px;
  margin-bottom: 57px;
  color: #767474;
  border: none;
  background-color: transparent;
`

export const List = styled(ListGroup)`
  width: 100%;
  border-radius: 10px;  
  border: none; 
  margin-bottom: 27px;
  
  &:nth-child(2n) {
    background-color: #f3f3f3;
  }
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

export const Buton = styled(Button)`
  width: 160.84px;
  height: 35px;  
  border-radius: 14px;
  font-size: 18px;  
  font-weight: 600;
  color: #fff;
  line-height: 22px;
  border: none;
  background-image: linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%);  
`

export const ButtonReturn = styled(Buton)`
width: 216.84px;
height: 68px;
position: relative;
margin-top: 900px; 
font-size: 24px;
line-height: 29px;
font-weight: 500;
`