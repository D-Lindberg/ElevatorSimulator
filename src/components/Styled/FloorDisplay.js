import React, { useContext, useMemo } from 'react';
import { ElevatorContext } from '../Context/Elevator'
import styled from 'styled-components'


const FloorIndicator = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  width: 10%;
  height: 40%;
  border: 1px solid gray;
  background-color: red;
  color: black;
  font-size: 3.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FloorDisplay = () => {
  const Elevator = useContext(ElevatorContext)
  const currentFloor = Elevator.state.currentFloor
  return useMemo(() => {
    return (
      <FloorIndicator>
        {`${currentFloor}`}
      </FloorIndicator>
    )
  }, [currentFloor])
}

export default FloorDisplay