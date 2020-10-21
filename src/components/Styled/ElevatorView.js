import React, { useContext } from 'react';
import { ElevatorContext } from '../Context/Elevator'
import styled from 'styled-components'

const img0 = require('../../images/floor_01.png')
const img1 = require('../../images/floor_02.png')
const img2 = require('../../images/floor_03.png')
const img3 = require('../../images/floor_04.png')
const img4 = require('../../images/floor_05.png')
const img5 = require('../../images/floor_06.png')
const img6 = require('../../images/floor_07.png')
const img7 = require('../../images/floor_08.png')
const img8 = require('../../images/floor_09.png')
const img9 = require('../../images/floor_10.png')
const img10 = require('../../images/floor_11.png')
const img11 = require('../../images/floor_12.png')
const img12 = require('../../images/floor_13.png')
const img13 = require('../../images/floor_14.png')
const img14 = require('../../images/floor_15.png')
const img15 = require('../../images/floor_16.png')
const img16 = require('../../images/floor_17.png')
const img17 = require('../../images/floor_18.png')
const img18 = require('../../images/floor_19.png')
const img19 = require('../../images/floor_20.png')


let imagesource = [
  img0, img1, img2, img3, img4,
  img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14,
  img15, img16, img17, img18, img19
]

const FloorImage = styled.img`
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  position: absolute;
  width: 45%;
  height: 90%;
  top: 10%;
  left: 5%;
  border: none;
`
const ElevatorView = () => {
  const Elevator = useContext(ElevatorContext)
  let FloorNum = Elevator.state.currentFloor
  return (
    <Wrapper>
      <FloorImage src={imagesource[FloorNum - 1]} />
    </Wrapper>
  );
}

export default ElevatorView;