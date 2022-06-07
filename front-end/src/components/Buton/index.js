import React from 'react'

import * as S from './styled'

export default function Buton(props) {
  return (
    <S.Btn primary={props.primary} onClick={props.onClick}>{props.name}</S.Btn>    
  )
}
