import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Navbar } from './components';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`


export default App