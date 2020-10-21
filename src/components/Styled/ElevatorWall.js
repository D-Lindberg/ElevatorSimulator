import React from 'react';
import styled from 'styled-components'
import FloorDisplay from './FloorDisplay'
import ButtonDisplayPanel from './ButtonDisplayPanel'
import { UpIndicator, DownIndicator } from './DirectionIndicators'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  border: none;
  background-color: transparent;
`
const LeftSide = styled.div`
  position: absolute;
  top: 10%;
  left: 0%;
  width: 5%;
  height: 90%;
  border: none;
  background-color: silver;
`
const RightSide = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 50%;
  height: 90%;
  border: none;
  background-color: silver;
`
const TopSide = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 10%;
  border: none;
  background-color: silver;
`

const ElevatorWall = () => {
  return (
    <Wrapper>
      <TopSide>
        <FloorDisplay />
      </TopSide>
      <LeftSide />
      <RightSide>
        <UpIndicator />
        <DownIndicator />
        <ButtonDisplayPanel />
      </RightSide>
    </Wrapper>
  )
}

export default ElevatorWall