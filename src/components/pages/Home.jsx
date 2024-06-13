import React from 'react';
import Contents from '../layout/Contents.jsx';

import Slider from '../section/Slider.jsx';
import Intro from '../section/Intro.jsx';
import Port from '../section/Port.jsx';
import Youtube from '../section/Youtube.jsx';
// import Unsplash from '../section/Unsplash.jsx';
import Movie from '../section/Movie.jsx';

const Home = () => {
  return (  
  <>
    <Contents>
      <Slider attr="slider__wrap score section" />
      <Intro attr='intro__wrap score3 section'/>
      <Port attr='port__wrap score3 section center' />
      <Youtube attr='youtube__wrap score3 section' />
      {/* <Unsplash attr='unsplash__wrap score3 section '  /> */}
      <Movie attr='movies__wrap score3 section mb70 '/>
    </Contents>
  </>
  )
};

export default Home;
