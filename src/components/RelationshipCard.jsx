import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const RelationshipCard = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Great software needs great relationships</h1>
        <p>Due to time shortage this is section is incomplete!!!!</p>
        <Section>
        <Card>
            <Image>
<img src="https://images.ctfassets.net/o0a5sen1qlbz/1lPMUI33FUBOZvnYRsNWlo/3ef36b4a50e37e29b8e3073cd134e97b/Mask_group.png" width={200} alt="" />
            </Image>
            <p>Helping Payperks drive positive change for financially-under served consumers and create value for the institutions which serve them.</p>
        </Card>
        </Section>
        <div>
        <Button title={'View ou work'} url={'#'} />

        </div>
      </Container>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    margin-top: 150px;
    width: 100%;
    padding: 50px 0;
    /* height: 600px; */
    background-color: #f8f8f8;
`
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
h1 {
  font-size: 45px;
  width: 500px ;
}
  div{
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `



const Section = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  padding: 20px;
  width: 400px;
  box-sizing: border-box;
  background-color: rgb(34, 53, 84);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p{
    font-size: 24px;
    color: #fff;
    padding: 10px 10px;
  }

`
  
const Image = styled.div`
  padding: 100px 40px ;
  /* box-sizing: border-box; */
  background-color: #fff;
  height: 200px;
  width: 300px;

`


export default RelationshipCard