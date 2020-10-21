import React from 'react';
import styled from 'styled-components'
import ElevatorView from './ElevatorView'
import ElevatorDoor from './ElevatorDoor'
import ElevatorWall from './ElevatorWall'

const Frame = styled.div`
  position: relative;
  width: 80vh;
  height: 80vh;
  border-left: 10vw solid gray;
  border-right: 10vw solid gray;
  border-top: 10vh solid black;
  border-bottom: 10vh solid brown;
`

const ElevatorFrame = () => {
  return (
    <Frame>
      <ElevatorView />
      <ElevatorDoor />
      <ElevatorWall />
    </Frame>
  );
}

export default ElevatorFrame;