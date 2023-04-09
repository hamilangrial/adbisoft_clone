import React from 'react'
import styled from 'styled-components'
import Button from './Button'


const BannerCarousel = ({ heading, description, btn1, btn2, background, logo }) => {

    

  return (
    <Container style={{ backgroundImage: `url(${background})`}}>

    <Wrapper>
        <Text>
            <h1>{heading}</h1>
            <p>{description}</p>
            <Button className='btn' url={'/'} title={btn1} />
            {
                btn2 ? (<Button className='btn' url={'/'} title={btn2} /> ) : ''
            }
            
        </Text>
        
        <Image>
            <img src={logo} alt="" height={200} width={400} />
        </Image>
    </Wrapper>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: 600px;
    background-color: black;
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 4000px; */
    @media (max-width: 700px) {
        height: auto;
  }


`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    padding: 70px 50px;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    color: #fff;
    box-sizing: border-box;

    @media (max-width: 700px) {
        flex-direction: column;
  }

`

const Text = styled.div`
    width: 50%;
    h1 {
        font-size: 60px;
        margin-top: 0;
    }
    p {
        font-size: 21px;
        margin: 30px 0;
    }
    span {
        margin-right: 20px;
    }


    @media (max-width: 1070px) {
        h1 {
        font-size: 40px;
        margin-top: 0;
    }
    p {
        font-size: 16px;
        margin: 30px 0;
    }
    span {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }   

    @media (max-width: 700px) {
        span {
            flex-direction: row;
        }
  }

    }


    @media (max-width: 700px) {
        width: 100%;
  }

    
`
const Image = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: end;

@media (max-width: 700px) {
    margin-top: 50px;
  }

`



export default BannerCarousel