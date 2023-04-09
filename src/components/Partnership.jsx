import React from 'react'
import styled from 'styled-components'
import {Button} from './';

const Partnership = () => {
  return (
    <Container>
      <Section>
          <Image>
            <img src="https://images.ctfassets.net/o0a5sen1qlbz/7dk2dzSRcJhJoJwwVX8uDB/fc7f485487ec67e47d21858ceb6ecd3a/Illustration.png" alt="" width={'100%'} />
          </Image>
          <RightSection>
            <h2>Decades of Partnership</h2>
            <p>We are a full-scale software development firm that knows the value of lasting relationships and can combine focused detail-oriented action with long-term strategic thinking.</p>
            <Button className="btn" url="/" title="View our technical skill set" />
          </RightSection>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 130px 0;
`

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  /* align-items: center; */
  justify-content: center;

  @media (max-width: 1200px) {
    padding: 0 30px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

`

const Image = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const RightSection = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding: 30px 150px 0 50px;


  h2 {
    font-size: 45px;
  }
  p {
    font-size: 18px;
    font-weight: lighter;
    margin-bottom: 110px;
  }

   span{
    margin-top: 100px;
  }

  @media (max-width: 1200px) {
    /* box-sizing: border-box; */
    padding: 30px 0 30px 30px;

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 0;
    width: 100%;
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 18px;
      margin-bottom: 50px;
    }
  }

`


export default Partnership