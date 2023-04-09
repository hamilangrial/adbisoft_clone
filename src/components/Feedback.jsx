import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel,{ consts } from 'react-elastic-carousel';
import {FeedbackCard } from './';
import {clients} from '../utils/utils';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { AiOutlineArrowRight} from 'react-icons/ai';

const Feedback = () => {

  const [ feedbacks, setFeedbacks ] = useState(clients);
 
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '' : '';
    return (
      <>
      {
        type === consts.PREV ? <Button className='prev' onClick={onClick} disabled={isEdge}><AiOutlineArrowLeft size={20} /> </Button>
           : <Button className='next' onClick={onClick} disabled={isEdge}><AiOutlineArrowRight size={20} /> </Button>
      }
        </>
    )
  }


  // const  renderPagination = ({ pages, activePage, onClick }) => {
  //   return (
  //     <Flex direction="row">
  //       {pages.map(page => {
  //         const isActivePage = activePage === page
  //         return (
  //           <Circle 
  //             key={page}
  //             onClick={() => onClick(page)}
  //             active={isActivePage}
  //           />
  //         )
  //       })}
  //     </Flex>
  //   ) 
  // }
 


  return (
    <Container>
      <Section>
        <h1>What our clients say</h1>
      <Carousel itemsToShow={2} renderArrow={myArrow}   transitionMs={700} 
      >
        {feedbacks.map((feedback, index) => 
        <FeedbackCard key={index} name={feedback.name} comment={feedback.comment} title={feedback.title} logo={feedback.logo}
         userimage={feedback.userImage} />
        )}
      </Carousel>
      </Section>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    background-color: #223554;
    padding: 90px 0;
`
const Section = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 20px;
    h1 {
      color: white;
      text-align: center;
      font-size: 45px;
    }
    .prev {
      left: 0;
    }
    .active {
      right: 0;
      top: 0;
    }
`
const Button = styled.button`
  width: 40px;
  height: 40px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #9fb1f4;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`



export default Feedback