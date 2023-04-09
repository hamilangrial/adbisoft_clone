import React from 'react'
import styled from 'styled-components'

const FeedbackCard = ({ name, title, comment, logo, userimage}) => {
  return (
    <Card>
        <User>
            <img src={userimage} alt="" />
            <div>
                <h3>{name}</h3>
                <span>{title}</span>
            </div>
        </User>
        <p>{comment}</p>
        <Logo>
            <img src={logo} height={40} alt="" />
        </Logo>
    </Card>
  )
}


const Card = styled.div`
    width: 400px;
    padding: 20px 30px 0;
    background-color: #fff;
    transition-duration: 300ms;
    transition-timing-function: ease;
    margin-bottom: 50px;
    p{
        font-size: 16px;
        min-height: 100px;
        border-bottom: 1px solid #e3e3e3;
        box-sizing: border-box;
    }
`
const User = styled.div`
    display: flex;
    padding-bottom: 40px;
    align-items: center;
    

    img {
        width: 90px;
        height: 90px;
        border-radius: 100%;
    }

    div {
        padding-left: 30px;
        h3 {
            font-size: 28px;
            margin: 0;
            padding: 0;
        }
        p {
            font-size: 16px;
        }
    }
`
const Logo = styled.div`
    padding: 30px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
        /* width: 180px; */
    }
`

export default FeedbackCard