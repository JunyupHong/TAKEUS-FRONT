import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

const SwiperContentWrap = styled.div`
  position: relative;
  width: 364px;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const Slide = styled.div`
  display: flex;
  height: 100%;
  background-size: cover;
  border-radius: 10px;

  img {
    width: 100%;
    background-image: url(${props => props.img});
    transform: ${props => `translateX(${props.xPosition}px)`};
    transition: transform ease-in 0.3s;
  }
`;

function SwiperContent({ images, setWidth, xPosition, handleClickPrev, handleClickNext }) {
  const slideRef = useRef();

  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth, xPosition]);

  return (
    <SwiperContentWrap>
      <Slide
        xPosition={xPosition}
        ref={slideRef}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </Slide>

      <Arrow
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </SwiperContentWrap >
  );
}

export default SwiperContent;
