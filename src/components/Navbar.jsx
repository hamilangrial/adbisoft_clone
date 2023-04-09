import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavDropdown } from './';


const Navbar = () => {

  const [isToggle, setIsToggel] = useState(false);

  const handleToggle = () => {
    setIsToggel(prev => setIsToggel(!prev));
  }

  return (
    <Header>
      <Container>
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <MenuBar>
          <MenuList>
            <li>
              <Link to={"/"}>Why Arbisoft </Link>
            </li>
            <li>
              <Link to={"/"} >
                What we do
                <IoIosArrowDown className="arrow" />{" "}
              </Link>
              <DropContainer className="dropcontainer">
                <NavDropdown />
    </DropContainer>

            </li>
            <li>
              <Link to={"/"}>
                Who we work with
                <IoIosArrowDown className="arrow" />{" "}
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                Our products
                <IoIosArrowDown className="arrow" />{" "}
              </Link>
            </li>
            <li>
              <Link to={"/"}>Our Work</Link>
            </li>
            <li>
              <Link to={"/"}>
                Inside Arbisoft
                <IoIosArrowDown className="arrow" />{" "}
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                Careers
                <IoIosArrowDown className="arrow" />{" "}
              </Link>
            </li>
            <li>
              <Link to={"/"}>Contact us</Link>
            </li>
          </MenuList>
          <Hamburger onClick={handleToggle}><RxHamburgerMenu size={30}/></Hamburger>
        </MenuBar>

{

  isToggle && (
  <MobileMenuList>
    menu
  </MobileMenuList>
  )
}
      </Container>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  height: 85px;
  padding: 0 18px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  background-color: transparent;
  /* position: relative; */
  @media (max-width: 768px) {
   padding-left : 15px;
   padding-right : 15px;
  }

`;

const MenuBar = styled.div`
  width: 100%;
  background-color: transparent;
  @media (max-width: 1070px) {
    display: flex;
    justify-content: end;
  }
  
  
`;


const DropContainer = styled.div`
  width: 100%;
  top: 65px;
  transition-duration: 300ms;
  transition-timing-function: ease;
  left: 0;
  right: 0;
  background-color: green;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
z-index: 101;
`

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: end;
  align-items: center;

  padding: 0;
  li {

    list-style: none;
    font-size: 16px;
    color: #223554;
    a {
      font-weight: lighter;
      display: flex;
      align-items: center;
      height: 70px; 
      svg {
        margin-left: 8px;
        width: 20px;
        color: #0a76db;
        transition-duration: 200ms;
        transition-timing-function: linear;
      }
    }

    &:hover .arrow {
        transform: rotate(-180deg);
    }    
    &:hover .dropcontainer {
        background-color: #fff;
        display: flex;
    }
    &:hover {
        color: #0a76db;
    }
    &:last-child {
      a {
        background-color: #0a76db;
        color: #fff;
        padding: 12px 30px;
        text-align: center;
        border-radius: 40px;
        transition-duration: 350ms;
        transition-property: all;
        transition-timing-function: ease;
        height: initial;
        &:hover {
            background-color: #18386c;
        }
      }
    }

    @media (max-width: 1200px) {
        font-size: 14px;
    }
  }

  @media (max-width: 1200px) {
        gap: 8px;
    }
    @media (max-width: 1070px) {
        display: none;
    }
`;

const MobileMenuList = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: aquamarine;
  z-index: 199;
display: none;
@media (max-width: 1070) {
  /* display: flex; */
}

`


const Hamburger = styled.span`
    display: none;
    cursor: pointer;
    padding-left: 20px;
    svg {
        color: #0a76db;
    }   
    @media (max-width: 1070px) {
        display: block;
    }
`



export default Navbar;
