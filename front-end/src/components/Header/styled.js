import styled from 'styled-components'

import { Navbar, Figure} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
