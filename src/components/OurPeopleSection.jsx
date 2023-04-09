import React from "react";
import styled from "styled-components";
import { Button } from "./";

const OurPeopleSection = () => {
  return (
    <Wrapper>
      <Section>
        <ImageSide>
          <img
            src="https://images.ctfassets.net/o0a5sen1qlbz/1FjCoJHBOTaYx8ks7GX3Pz/ca511545b9614005f0647c86a2759955/Mask_group__2___1_.png"
            alt=""
          />
        </ImageSide>
        <TextSide>
          <h1>We are our people</h1>
          <p>
            Our team of over 800 blends the skills of engineers, developers, UX
            architects, and designers to craft impactful solutions. Together, we
            have aided businesses in their journey toward digital transformation
            by delivering custom software that drives change.
          </p>
          <Button title="Learn more" url="/" />
        </TextSide>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

const Section = styled(Wrapper)`
  max-width: 1200px;
  position: relative;
  box-sizing: border-box;
  height: 600px;

  @media (max-width:830px) {
    height: 900px;
    width: 100%;
  }
`;

const ImageSide = styled.div`
  width: 60%;
  position: absolute;
  left: 0;
  z-index: 9;
  @media (max-width: 1200px) {
    padding: 0 20px;
  }
  img {
    width: 580px;
    height: 450px;
    @media (max-width: 1200px) {
      width: 500px;
      height: 380px;
    }
    @media (max-width: 1050px) {
      width: 450px;
      height: 330px;
    }
  }

  @media (max-width:830px) {
        top:0;
        width:100%;
      box-sizing: border-box;

        img {
            width: 100%;
            height: 80%;
        }
  }


`;
const TextSide = styled.div`
  position: absolute;
  width: 60%;
  height: 550px;
  background-color: #f4f5f7;
  right: 0;
  box-sizing: border-box;
  padding: 100px 60px 100px 162px;
  color: #223554;
  @media (max-width: 1200px) {
    margin-right: 20px;
    height: 470px;
    padding-top: 40px;
  }
  @media (max-width: 1050px) {
    padding: 80px 30px 20px 200px;
  }
  h1 {
    text-align: start;
    font-size: 48px;
    @media (max-width: 1050px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 18px;
    line-height: 25px;
    font-weight: 100;
    margin-bottom: 50px;
  }
  @media (max-width:830px) {
    position: none;
  }

  @media (max-width:830px) {
        bottom:0;
        left: 0;
        right: 0;
        width:100%;
        height: 300px;
        height: 400px;
        padding: 120px 30px 30px ;
  }
  @media (max-width: 700px) {
    bottom: 150px;
  }

`;

export default OurPeopleSection;
