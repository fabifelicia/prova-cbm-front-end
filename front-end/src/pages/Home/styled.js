import styled from 'styled-components'

import { Card, Button, Container } from 'react-bootstrap'
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
  width: 589px;
  height: 623px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 179px;  
  border-radius: 70px;
  background-color: #fff;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
`

export const Image= styled(Card.Img)`
  width: 215px;
  height: 214px;
  margin-top: 48px;   
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

export const Buton = styled(Button)`
  width: 408px;
  height: 90px;
  margin-bottom: 17px;
  border-radius: 63px;
  font-size: 32px;
  color: #fff;
  line-height: 38.73px;
  border: none;
  background-image: ${props => props.primary 
    ? 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%)' 
    : 'linear-gradient(91.76deg, #A8A8A8 0%, #C4C4C4 100%)'
    }
`

