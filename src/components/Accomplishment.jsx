import React from 'react'
import styled from 'styled-components'

const Accomplishment = () => {
  return (
    <Wrapper>
        <Container>
            <h1>We're proud of our accomplishments</h1>
            <p>As a result of Arbisoft's experience and work ethic, we have formed valuable industry partnerships over the years. This has not only helped us in getting certified from industry leaders, but also in acquiring new businesses and customers.</p>
        </Container>
        <CompanyList> 
            <ul>
                <li>
                    <img src="https://images.ctfassets.net/o0a5sen1qlbz/30qC6MbLEaTFPryEDg1iq9/5367433274ec7e4e6aad6f3d8c8daf4f/Microsoft.svg" alt="microsoft"  />
                </li>
                <li>
                    <img src="https://images.ctfassets.net/o0a5sen1qlbz/1mowajsTrGxtHgqk73v0X1/9bf3dcc30564afb76603b3363665801b/Mongodb.svg" alt="mongo"  />
                </li>
                <li>
                    <img src="https://images.ctfassets.net/o0a5sen1qlbz/770bQWCUEi7JLP8TGbNb2C/ffad68757b6a4ea4b94d05e65f67d813/zyte.svg" alt="zyte"  />
                </li>
                <li>
                    <img src="https://images.ctfassets.net/o0a5sen1qlbz/4rqybTnguH51KnpeCwCsnp/3d4be02cb8913e66303e99bf028f3665/edX.svg" alt="edx"  />
                </li>
                <li>
                    <img src="https://images.ctfassets.net/o0a5sen1qlbz/66er28IVuZHtS34cxjFV48/0ea307468933a75d2047b1aac04b335a/Clutch.svg" alt="clutch"  />
                </li>
                <li>
                    <img src="https://images.ctfassets.net/o0a5sen1qlbz/qYmyG6D7R2dORIbae8I3x/e20bd5f2a63c584d91d8f53fc72c35e0/AWS.svg" alt="aws"  />
                </li>
                <li>
                    <img src="https://images.ctfassets.net/o0a5sen1qlbz/7hVZDyWwuqkNDe4fShPZ72/b7922712675d9d87b2d2dadf628ffbe6/Clutch_2.svg" alt="clutch-asia"  />
                </li>
            </ul>
        </CompanyList>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    padding: 150px 0;
`

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 250px;
    box-sizing: border-box;

    h1 {
        font-size: 45px;
        margin-bottom: 30px;
        text-align: center;
    }
    p {
        font-size: 18px;
        text-align: center;
        box-sizing: border-box; 
    }

    @media (max-width: 1200px) {
        padding: 0 50px;
        h1 {
            font-size: 38px;
        }
    }
`

const CompanyList = styled.div`
   width: 100%;
   max-width: 1200px;
   padding-top: 130px;
   box-sizing: border-box;
   margin: 0 auto;


   ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    @media (max-width: 1200px) {
         flex-wrap: wrap;
         padding: 0 50px;
    }
   }

`



export default Accomplishment