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


export const ContentContainer = styled(Container)`  
  height: 170px;  
  border-bottom: 2px solid #d9d9d9;
  background-color: #fff;
  display: flex;
  flex-direction: column;  
  align-items: start;
  justify-content: flex-start; 
  padding-left: 0;
`

export const Content = styled(Container)`  
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding-left: 0; 
  
`

export const Title = styled(Card.Title)`
  margin-bottom: 36px;
  font-size: 40px;
  line-height: 48.41px;
  color: #767474;  
`
export const SubTitle = styled(Title)`
  font-size: 24px;
  line-height: 29px;
  margin: 17px 0;
`

export const Label = styled(Form.Label)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #868686;
   
`

export const LabelStrong = styled(Form.Label)`
  font-weight: 500;
  margin-right: 5px;
  
`

export const LabelWithColor = styled(Label)`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #fff;  
  background-color: #9BD26F;
  padding: 8px 12px;
  border-radius: 11px; 
  margin-bottom: 170px; 
`

