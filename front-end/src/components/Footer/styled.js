import styled from 'styled-components'

import { Container, Button  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


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