import React from 'react'
import Carousel,{ consts } from 'react-elastic-carousel';
import styled from 'styled-components'
import { banners } from '../utils/utils'
import {  BannerCarousel } from './'

import { IoIosArrowBack} from 'react-icons/io';
import { IoIosArrowForward} from 'react-icons/io';



const Banner = () => {

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '' : '';
    return (
      <>
      {
        type === consts.PREV ? <Button className='prev' onClick={onClick} disabled={isEdge}><IoIosArrowBack size={30} /> </Button>
           : <Button className='next' onClick={onClick} disabled={isEdge}><IoIosArrowForward size={30} /> </Button>
      }
        </>
    )
  }

  return (
    <Container>
      <Carousel itemsToShow={1}  
  renderArrow={myArrow}
      
      transitionMs={700} 
      >
        {banners.map((banner, index) => 
        <BannerCarousel key={index} heading={banner.heading} description={banner.description} btn1={banner.btn1} btn2={banner.btn2}
         background={banner.background}
         logo={banner.logo}
          />
        )}
      </Carousel>

    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    position : relative;
    .prev {
      left: 20px;
    }
    .next {
      right: 20px;
      /* top: 0; */
    }


    @media (max-width: 1070px)   {
    margin-top: 85px;
      
    }
`
const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 300px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

`

export default Banner