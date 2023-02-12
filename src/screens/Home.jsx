import React from 'react';
import Body from '../components/Body';
import CarouselComponent from '../components/CarouselComponent';
import Header from '../components/Header';
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <Header/>
      <CarouselComponent/>
      <Body/>
    </div>
  )
}

export default Home;