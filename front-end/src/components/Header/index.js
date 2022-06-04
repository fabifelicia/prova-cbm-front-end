import React from 'react'

import * as S from './styled'

import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import userIcon from './assets/userIcon.png'
import clipboardIcon from './assets/clipboardIcon.png'
import resumeIcon from './assets/resumeIcon.png'
import line from './assets/line.png'

export default function Header() {
  return (
    <S.Nav>
          <S.NavImage>
            <Image src={userIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image style={{ width: '100%' }} src={line} />
          </S.NavImage>
          <S.NavImage>
            <Image src={clipboardIcon} />
          </S.NavImage>
          <S.NavImage>
            <Image style={{ width: '100%' }} src={line} />
          </S.NavImage>
          <S.NavImage>
            <Image src={resumeIcon} />
          </S.NavImage>
        </S.Nav>
  )
}
