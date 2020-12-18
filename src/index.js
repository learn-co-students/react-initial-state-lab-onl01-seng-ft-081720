// import required files 
import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    {/* render components */}
    <ImageSlider />
    <Bomb initialCount={120} />
  </div>,
  // append element to dom
  document.getElementById('root')
);
