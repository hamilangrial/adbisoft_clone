import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ApplyCard = () => {
  return (
    <Container>
      <Section>
        <div className="section1">
          <h3>Become a part of our global team!</h3>
          <Button>
            <Link to={"/"}>Apply here</Link>
          </Button>
          <Image><img src="https://images.ctfassets.net/o0a5sen1qlbz/5k2zJWX4UvAouB72b9iM6r/6199b6fd99a763f265f2cd5c81cb49d5/Group_2231.svg" alt="" /></Image>
        </div>
        <div className="section2">
        <h3>Partner with us for your next venture!</h3>
          <Button>
            <Link to={"/"} className="yellow-btn">Let's get started</Link>
          </Button> 
          <Image>
            <img src="https://images.ctfassets.net/o0a5sen1qlbz/5zvNs7mAGcqElvQpZEBXPo/fa9965513ee3d463ea0d912d30a8a10c/Group_2152.png" alt="" />
          </Image>
        </div>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: '';
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(234,249,255,.78);
  }

  &::after {
    content: '';
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -22;
    background-color: hsla(36,89%,89%,.72);
  }

`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  /* background-color: red;  */
  margin: 0 auto;

  .section1 {
    width: 50%;
    box-sizing: border-box;
    padding: 50px 70px 90px 30px;
    background-color: rgba(234,249,255,.2);
    position: relative;
    h3 {
      margin: 0 ;
      margin-bottom: 40px;
      font-size: 35px;
      font-weight: 600;
    }
  }


  .section2{
    width: 50%;
    box-sizing: border-box;
    padding: 50px 70px 90px 50px;
    background-color: hsla(36,89%,89%,.22);
    position: relative;
    h3 {
      margin: 0 ;
      margin-bottom: 40px;
      font-size: 35px;
      font-weight: 600;
    }
  }
`;

const Button = styled.span`
  a {
    background-color: #223554;
    color: #fff;
    padding: 12px 30px;
    text-align: center;
    border-radius: 40px;
    transition-duration: 350ms;
    transition-property: all;
    transition-timing-function: ease;
    &:hover {
      background-color: #133a78;
    }
  }

  .yellow-btn{
    background-color: #f37224;
    outline: none;
    border: none;
    &:hover {
      background-color: #f37224;
    }
  }
`;

const Image = styled.span`
  position: absolute;
  right: 25px;
  bottom: 0;
  img {
    width: 110px;
  }
`

export default ApplyCard;
