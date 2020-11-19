import React from 'react';
import styled, { keyframes } from 'styled-components';
import logoOnly from '../../../public/logoOnly.png';
import { HiCheck } from 'react-icons/hi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InfoAgeGender from './InfoAgeGender';

import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
.slick-slider {
  @media (min-width: 768px) {
    width: 420px;
  }
   width: 375px; 
  }
  .slick-track {
    height : 100vh;
  }

  .slick-prev:before, .slick-next:before {
    color : gray;
    font-size: 90px;
  }

  .slick-next {
        right: 50px;
  }
`;
const ResponseBlock = styled.div`
  @media (min-width: 768px) {
    width: 420px;
    left: 50vw;
    position: absolute;
  }
  overflow: hidden;
  flex-direction: column;
  left: 0;
  width: 100%;
  background: white;
  align-items: center;

  display: flex;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  height: 100vh;
`;

const InfoCarousel = ({ onChange }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ResponseBlock>
      <Global />
      <div>
        <Slider {...settings}>
          <div>{/* <InfoAgeGender onChange={onChange} /> */}</div>
          <div>1</div>
          <div></div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </ResponseBlock>
  );
};

export default InfoCarousel;
