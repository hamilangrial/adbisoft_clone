import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = ({url, title}) => {
  return (
        <Btn>
            <Link to={url}>{title}</Link>
        </Btn>
  )
}


const Btn  = styled.span`
    a {
      background-color: #0a76db;
      color: #fff;
      padding: 12px 30px;
      text-align: center;
      border-radius: 40px;
      transition-duration: 350ms;
      transition-property: all;
      transition-timing-function: ease;
      &:hover {
          background-color: #18386c;
      }
    }
`
export default Button;