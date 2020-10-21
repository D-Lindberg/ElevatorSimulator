import React, { useContext, useMemo } from 'react';
import { ElevatorContext } from '../Context/Elevator'
import styled from 'styled-components'


const FloorButton = styled.div`
  width: 3.5vh;
  height: 3.5vh;
  border-radius: 50%;
  background-color:  ${({ dataContent, pressed }) => {
    if (dataContent === '' || dataContent === '?') {
      return 'silver'
    } else {
      return pressed ? 'yellow' : 'white'
    }
  }};
  color: ${({ dataContent }) => dataContent === '?' ? 'silver' : 'black'
  };
  font-size: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {cursor: pointer;}
`
const handleClick = (e, dispatch, cycle) => {
  e.preventDefault();
  let floorNum = 0
  let value = e.target.innerText
  if (value === '!' || value === '>|<') {
    console.log("Just like in real life, these buttons don't do anything")
  } else if (value === '<|>') {
    if (cycle === 0) {
      dispatch({ type: "OPEN_THE_DOOR" })
    } else if (cycle === 3) {
      dispatch({ type: "REOPEN_THE_DOOR" })
    }
  } else {
    floorNum = parseInt(value)
    dispatch({ type: "ADD_FLOOR_PRESSED", targetFloor: floorNum })
  }
}

const ElevatorButton = ({ value }) => {
  const Elevator = useContext(ElevatorContext)
  let result = Elevator.state.queue.includes(parseInt(value))
  return useMemo(() => {
    return (
      <FloorButton
        onClick={(e) => handleClick(e, Elevator.dispatch, Elevator.state.doorCycle)}
        dataContent={value}
        pressed={result}
      >
        {value}
      </FloorButton>
    )
  }, [result, Elevator.dispatch, value, Elevator.state.doorCycle])
}

export default ElevatorButton