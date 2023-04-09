import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const initialValue = {
    years: 0,
    peoples: 0,
    offices: 0,
    projects: 0,
    rating: 0.5,
}   

const Achievement = () => {

    const [ achievements, setAchievements ] = useState(initialValue);

    useEffect(() => {
        increment();
    
    }, [achievements])


    const increment = () => {
        
       const timeout = setTimeout(() => { 

        if (achievements.peoples < 850) {
            setAchievements(prevState => ({
                ...prevState,
                peoples: prevState.peoples + 1
            }))
        }
        if (achievements.offices < 4) {
            setAchievements(prevState => ({
                ...prevState,
                offices: prevState.offices + 1,
            }))
        }
        if (achievements.projects < 550) {
            setAchievements(prevState => ({
                ...prevState,
                projects: prevState.projects + 1,
            }))
        }
        if (achievements.rating < 4) {
            setAchievements(prevState => ({
                ...prevState,
                rating: prevState.rating + 1 ,
            }))
        }
        if (achievements.years < 15) {
            setAchievements(prevState => ({
                ...prevState,
                years: prevState.years + 1 ,
            }))
        }
       }, 0.8)
     
       

      return () => {
        clearTimeout(timeout);
      }
    }


  return (
    <Container>
        <Section>
            <h1>A journy of <span>{achievements.years} years</span></h1>
            <ul>
                <Item>
                    <div><img src="https://www.arbisoft.com/icons/icon-people.svg" alt="people" /></div>
                    <h4><span>{achievements.peoples}</span>+</h4>
                    <p>People onboard</p>
                </Item>
                <Item>
                    <div><img src="https://www.arbisoft.com/icons/icon-home.svg" alt="home-icon" /></div>
                    <h4>{achievements.offices}</h4>
                    <p>Global offices</p>
                </Item>
                <Item>
                    <div><img src="https://www.arbisoft.com/icons/icon-bulb.svg" alt="bulb-icon" /></div>
                    <h4><span>{achievements.projects}</span>+</h4>
                    <p>Projects completed</p>
                </Item>
                <Item>
                    <div><img src="https://www.arbisoft.com/icons/icon-clutch.svg" alt    ="icon" /></div>
                    <h4>{achievements.rating}</h4>
                    <p>Clutch rating</p>
                </Item>
                
            </ul>
        </Section>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 100px;
    justify-content: center;

`

const Section = styled.div`
    width: 100%;
    max-width: 1200px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 60px;
        font-weight: 600;
        color: #223554;
        /* font-family: 'Roboto Slab'; */
        span {
            color: #0a76db;
        }
    }
    ul{
        width: 100%;
        /* background-color: #223554; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        padding: 20px 0 40px 0;
        border: 1px solid #e3e3e3;
        border-top: none;
        box-sizing: border-box;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
        border: 1px solid #e3e3e3;

            li {
                margin: 20px 0;
                border: none;
            }
        }
    }
`

const Item = styled.li`
    width: 25%;
    background-color: #fff;
    padding: 10px;
    text-align: center;
    border-right: 1px solid #e3e3e3;
    color: #223554;

    &:last-child {
        border: none;
    }

    h4 {
        font-size: 45px;
        margin: 0;
        margin-top: 13px;
        font-weight: 600;
    }
    p {
        font-size: 17px;
        font-family: sans-serif;
        font-weight: lighter;
        padding: 0;
        margin: 5px 0 0 0 ;
    }
`


export default Achievement