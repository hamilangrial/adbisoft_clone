import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineArrowRight } from "react-icons/ai";


const NavDropdown = () => {
  return (
    <Container> 
        <Link to={'/'}>Go to overview <span><AiOutlineArrowRight /></span> </Link>
        <Navs>
            <ul>
                <li>Data and Artificial Intelligence</li>
                <li>Enterprise Software Development</li>
                <li>Web App Development</li>
                <li>Mobile App Development</li>
            </ul>
        
            <ul>
                <li>Education Technology</li>
                <li>QA and Software Testing
</li>
                <li>UX, Product, and Design</li>
                <li>Web Scraping</li>
            </ul>
        
            <ul>
                <li>Cyber Security
</li>
                <li>DevOps Solutions</li>
            </ul>
        
            
        </Navs>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 100px;   
    box-sizing: border-box;

    a {
        font-size: 20px;
        padding: 10px 0;
        color: #223554;
        font-weight: bolder;
        display: flex;
        align-items: center;
        width: 200px;
        justify-content: start;
        span {
            display: flex;
        align-items: center;
        justify-content: start; 
                color: #0a76db;
            }
            
    }
    
    

`

const Navs = styled.div`
    
        display: flex;
        border-top: 1px solid #e3e3e3;
        padding: 30px 0;
        gap: 80px;
        ul {
            li {
                cursor: pointer;
                height: 50px;
                font-weight: bold;

                a {
                    padding: 0;
                    margin: 0;
                    height: 20px;
                    font-size: 16px;
                    cursor: initial;
                }
            }
        }

`



export default NavDropdown