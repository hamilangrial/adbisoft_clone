import React from 'react'
import { Accomplishment, Achievement, ApplyCard, Banner, Feedback, Footer, OurPeopleSection, Partnership, RelationshipCard, Services} from '../components'
import styled from 'styled-components'

const Home = () => {
  return ( 
    <>
    <Banner />
    <Achievement />
    <OurPeopleSection />
    <Services />
    <RelationshipCard />
    <Accomplishment />
    <Feedback />
    <Partnership />
    <ApplyCard />
    <Footer />
    </>
  )
}

export default Home