import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  const [active, setActive] = useState("industries");

  useEffect(() => {}, []);

  const handleActive = (bar) => {
    setActive(bar);
  };

  return (
    <Wrapper>
      <Bar>
        <ul>
          <li onClick={() => handleActive("industries")} className={`${active === 'industries' ? 'active' : ''}` }>Industries</li>
          <li onClick={() => handleActive("services")} className={`${active === 'services' ? 'active' : ''}` }>Services</li>
          <li onClick={() => handleActive("products")} className={`${active === 'products' ? 'active' : ''}` }>Products</li>
          <li>
            <Link to={"/"}>
              All industries <IoIosArrowForward size={26} />
            </Link>
          </li>
        </ul>
      </Bar>
      {/* First Content  */}
      {active === "industries" && (
        <Section>
          <Card
            style={{
              backgroundImage:
                "url('https://images.ctfassets.net/o0a5sen1qlbz/1veIRunEu2URjCxI0obAT0/ef8da52859d806a25587850dfce07b22/Mask_group__5_.png')",
            }}
          >
            <h1>Education</h1>
            <p>
              We have partnered with some of the leading education and financial
              institutions, and nonprofits to modernize the way the world
              learns.
            </p>
            <button>Learn more</button>
          </Card>
          <Card
            style={{
              backgroundImage:
                "url('https://images.ctfassets.net/o0a5sen1qlbz/4qOi6MxBT7dYo5OZ8NyOaq/6a2ae47d5dfcc9409dc0ca8d42da9831/Mask_group__6_.png')",
            }}
          >
            <h1>Finance</h1>
            <p>
              Our experts have teamed up with a wide range of organisation's to
              help them adjust to fast-paced changes in the financial sector.
            </p>
            <button>Learn more</button>
          </Card>
          <Card
            style={{
              backgroundImage:
                "url('https://images.ctfassets.net/o0a5sen1qlbz/1zaGvwPel5K8vb0YCtAHdj/2084b0354906e03134dc580f912dd736/Mask_group__7_.png')",
            }}
          >
            <h1>Healthcare</h1>
            <p>
              Our apps have contributed to the technological revolution in the
              healthcare industry, from educating medical students to managing
              patients in clinics.
            </p>
            <button>Learn more</button>
          </Card>
          <Card
            style={{
              backgroundImage:
                "url('https://images.ctfassets.net/o0a5sen1qlbz/A3UeH08YLuMKHGN0TobuU/01c781d270b4cdf546eb990ae091b714/Mask_group__8_.png')",
            }}
          >
            <h1>Travel</h1>
            <p>
              We have partnered with some of the leading education and financial
              institutions, and nonprofits to modernize the way the world
              learns.
            </p>
            <button>Learn more</button>
          </Card>
        </Section>
      )}
        {/* Second content */}
      {active === "services" && (
        <Section>
          <Card className="bordered">
            <img
              width={80}
              height={80}
              src="https://images.ctfassets.net/o0a5sen1qlbz/3xgOMp7bU6o2didlOAxLMr/8c73c95808509cc81d8a77ad40adc0bc/brain_1.png"
              alt=""
            />
            <h1>Data and AI</h1>
            <p>
              We can help you unlock your business potential with our
              cutting-edge Machine Learning and Artificial Intelligence
              capabilities.
            </p>
            <button className="bordered-btn">Learn more</button>
          </Card>
          <Card className="bordered">
            <img
              width={80}
              height={80}
              src="https://images.ctfassets.net/o0a5sen1qlbz/227mkoIvHDPZJch01G4MKj/686ef7419b9314df89b8b4501342f84b/function_1.png"
              alt=""
            />
            <h1>Web Apps</h1>
            <p>
              We provide custom-tailored solutions for each phase of development
              from designing to coding and implementation.
            </p>
            <button className="bordered-btn">Learn more</button>
          </Card>
          <Card className="bordered">
            <img
              width={80}
              height={80}
              src="https://images.ctfassets.net/o0a5sen1qlbz/5kNW4vW4WFgNoVUqtbr3Pt/8e01ad3e0bdd76283ff60d8d4d42297e/settings__1__1__1_.png"
              alt=""
            />
            <h1>Mobile Apps</h1>
            <p>
              We build native apps optimized for iOS and Android to provide
              users with a seamless mobile experience that leverages the full
              power of the OS.
            </p>
            <button className="bordered-btn">Learn more</button>
          </Card>
          <Card className="bordered">
            <img
              width={80}
              height={80}
              src="https://images.ctfassets.net/o0a5sen1qlbz/67Wts0FJ4z039zn4AU16sT/a4f985d63b5654153ca106645dd11dfb/software_1.png"
              alt=""
            />
            <h1>Enterprise software</h1>
            <p>
              We bring your ideas to life with our turnkey solutions that are
              custom-designed to fit into your enterprise software ecosystem.
            </p>
            <button className="bordered-btn">Learn more</button>
          </Card>
        </Section>
      )}

      {/* Third Content */}
      {active === "products" && (
        <Section>
          <Card className="bordered third-content">
            <img
              width={130}
              height={70}
              src="https://images.ctfassets.net/o0a5sen1qlbz/1d5ohUTbAcwRwaoSlK9LVK/d64c11cddf21645f888a86748d2d3352/Edly-logo_1__1_.png"
              alt=""
            />
            <p>
            A learning and training management system that responds to your needs and delivers accordingly while simultaneously connecting you to your audience.
            </p>
            <button className="bordered-btn">Explore Edly</button>

          </Card>
          <Card className="bordered third-content">
            <img
              width={200}
              height={70}
              src="https://images.ctfassets.net/o0a5sen1qlbz/4VfrfkK6TX5oYcMwrLd671/e8055f84b1e15807cff16f96e319d57f/Moonbeam-logo_1__1_.png"
              alt=""
            />
            <p>
            A podcast player that enables listeners to sift through short audio clips from different podcasts and find new shows that they otherwise wouldn’t come across.
            </p>
            <button className="bordered-btn">Explore Moonbeam</button>
          </Card>
          <Card className="bordered third-content">
            <div>
            <img
              width={200}
              height={35}
              src="https://images.ctfassets.net/o0a5sen1qlbz/2Cq3bzoRpRKQGp1Xsbbjbs/92a154729dc03b7cb6afdf74c2348b5b/_x30_1-Component-_x2F_-Logo-_x2F_-Full-_x2F_-Small__1_.png"
              alt=""
            />
            </div>
            <p>
            An applicant tracking system and recruiting software that gives you more power over hiring decisions that matter. Hirestream automates the tasks that slow you down and refines your process through single-click bulk applicant management.
            </p>
            <button className="bordered-btn">Explore Hirestream</button>
          </Card>
          <Card className="bordered third-content">
            <img
              width={200}
              height={70}
              src="https://images.ctfassets.net/o0a5sen1qlbz/3oe2OrDAwXTQoiNdHvdBx4/03795e9e2460ed9cdbeecdbad05e8d49/g12__1_.png"
              alt=""
            />
            <p>
            A social enterprise committed to connecting and empowering learners by making e-learning opportunities accessible and affordable for all.
            </p>
            <button className="bordered-btn">Explore ilmx</button>
          </Card>
        </Section>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
`;
const Bar = styled.div`
  width: 100%;
  ul {
    list-style: none;
    display: flex;
    height: 50px;
    gap: 30px;
    li {
      border: 1px solid #dcdbdb;
      border-bottom: none;
      color: #6a6a6a;
      font-weight: 500;
      font-size: 18px;
      line-height: normal;
      display: flex;
      align-items: center;
      padding: 0px 50px;
      cursor: pointer;

      &:last-child {
        font-size: 20px;
        padding: 10px;
        color: #0a76db;
        border: none;
        font-weight: lighter;
        letter-spacing: 1px;
        a {
          height: 44px;
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
            display: none;
        }
      }
    }
    .active {
        transition-duration: 300ms;
        transition-timing-function: ease;
        background-color: #0d3f8a;
        color: white;
    }
  }
`;

const Card = styled.div`
  width: 50%;
  box-sizing: border-box;
  background-color: transparent;
  padding: 90px 60px 30px;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 45px;
    color: #fff;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    color: #fff;
    margin-bottom: 50px;
    font-weight: 100;
  }
  button {
    color: #0d3f8a;
    outline: none;
    font-size: 18px;
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    text-align: center;
    border-radius: 40px;
  }
  .bordered-btn {
    border: 1px solid #0d3f8a;
    color: #0d3f8a;
    background-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 90px 50px;
  }


`;



const Section = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 0;
  border: 1px solid #dcdbdb;
  border-top: none;

  .bordered {
    border: 1px solid #dcdbdb;
    border-bottom: 10px solid white;
    h1,
    p {
      color: #223554;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    ${Card} {
      width: 100%;
    }
  }


  .third-content {
    transition-duration: 400ms;
    transition-timing-function: ease;
    box-sizing: border-box;
    &:hover {
        border-bottom: 10px solid #0a76db;
    }
    p {
        min-height: 119px;
        margin-bottom: 20;
    }
    div {
        height: 74px;
    }
    button {
        transition-duration: 300ms;
        box-sizing: border-box;
        transition-timing-function: ease;
        &:hover {
        background-color: #0a76db;
        color: white;
        border-color: #0a76db;
        }
    }
    
  }
`;

export default Services;
