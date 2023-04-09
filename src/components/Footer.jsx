import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FiFacebook} from "react-icons/fi";
import {BsInstagram} from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";
import {CiTwitter} from "react-icons/ci";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <p>
            For job opportunities, reach out to{" "}
            <Link to={"/"}>pod@arbisoft.com</Link>
          </p>
          <p>
            For business enquiries, reach out to{" "}
            <Link to={"/"}>contact@arbisoft.com</Link>
          </p>
          <Address>
            <Contact>
              <div>
                <span>+1 (469) 215 2958</span>
                <span>2035 Central Cir Suite #201 McKinney, TX 75069</span>
              </div>
            </Contact>
            <Contact>
              <div>
                <span>+49 157 39369191</span>
                <span>
                  KAYAK Technology Center, Straße der Pariser Kommune 8, 10243
                  Berlin.
                </span>
              </div>
            </Contact>
            <Contact>
              <div>
                <span>(042) 37498533</span>
                <span>25 Canal Rd, Westwood Colony Lahore, Punjab 54000</span>
              </div>
            </Contact>
          </Address>
        </div>
        <Image>
          <img
            src="https://images.ctfassets.net/o0a5sen1qlbz/1o0sF51uH972lDcoj5Hhlo/7535ffcb36b16b86eec41fcd86869b21/Group_304.png"
            alt=""
            width={200}
          />
        </Image>
      </Container>
        <Social>
            <div className="rights">
              <span>© 2023 Arbisoft. Made by HAMi.</span>
              <Link to={'/'}>Privacy Policy</Link>
              <Link to={'/'}>Imprint</Link>
            </div>
            <div className="icons">
              <span>Find us on:</span>
                <ul>
                  <li><Link to={"#"}><FiFacebook /></Link></li>
                  <li><Link to={"#"}><BsInstagram /></Link></li>
                  <li><Link to={"#"}><FiLinkedin /></Link></li>
                  <li><Link to={"#"}><CiTwitter /></Link></li>
                </ul>
            </div>
        </Social>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0 70px 0;
  color: #c0cdf7;
  background-color: #0d3f8a;
  box-sizing: border-box;
  margin-top: 150px;
  @media (max-width: 1200px) {
    padding: 50px 20px 70px 20px;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 80px;
  border-bottom: 1px solid rgba(160, 160, 255, 0.5);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  p {
    font-size: 18px;

    a {
      color: #fff;
      margin-left: 5px;
      font-weight: 300;
    }
  }

  @media (max-width: 1200px) {
   flex-direction: column;
  }

`;
const Address = styled.div`
  display: flex;
  padding-top: 50px;
`;

const Contact = styled.div`
  padding-right: 100px;
  font-size: 14px;
  span {
    display: inline-block;
    line-height: 20px;
  }
  @media (max-width: 1200px) {
    padding: 30px;
  }
`;

const Image = styled.div`
@media (max-width: 1200px) {
    img {
      /* width: 50px; */
    }
  }
`;

const Social = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .rights {
    font-size: 14px;
    font-weight: lighter;
      span {
        padding-right: 100px;
      }
      a {
        padding-right: 80px;
      }
  }

  .icons {
    display: flex;
    gap: 30px;
    align-items: center;
    font-size: 14px;
    font-weight: lighter;
    ul {
      display: flex;
      gap: 20px;
      list-style: none;
      li > a {
        width: 40px;
        height: 40px;
        display: inline-block;
          font-size: 20px;
          background-color: #0a76db;
          text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
          border-radius: 100%;
          cursor: pointer;
          transition-duration: 300ms;
          transition-timing-function: ease;
          &:hover {
            background-color: #fff;
            color: #0a76db;
            
          }
        }
      
    }
 
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    display: inherit;
    flex-direction: column;
    justify-content: start;
    .rights {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
    }
  }

`

export default Footer;
