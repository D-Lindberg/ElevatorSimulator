import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components'
import { ElevatorContext } from '../Context/Elevator'

const OpenDoorAnimation = () => keyframes`
  0% {left: 5%}
  100% {left: 50%}
`
const CloseDoorAnimation = () => keyframes`
  0% {left: 50%}
  100% {left: 5%}
`

const ReOpenDoorAnimation = (starting) => keyframes`
  0% {left: ${starting}%}
  100% {left: 50%}
`

const Door = styled.div`
  position: absolute;
  width: 45%;
  height: 90%;
  top: 10%;
  border: none;
  background-color: gray;
`

const DoorOpening = styled(Door)`
  animation: ${OpenDoorAnimation} 2250ms ease-in-out forwards;
`

const DoorClosing = styled(Door)`
  animation: ${CloseDoorAnimation} 4500ms ease-in-out forwards;
`

const DoorReopening = styled(Door)`
  animation: ${({ startingPosition }) => ReOpenDoorAnimation(startingPosition)} ${({ duration }) => duration}ms ease-in forwards;
`

const ClosedDoor = styled(Door)`
  left: 5%;
`

const OpenedDoor = styled(Door)`
  left: 50%;
`

const ElevatorDoor = () => {
  const Elevator = useContext(ElevatorContext)

  const doorHasBeenOpened = (e) => {
    e.preventDefault()
    Elevator.dispatch({ type: 'DOOR_IS_OPENED' })
  }

  const doorHasBeenClosed = (e) => {
    e.preventDefault()
    Elevator.dispatch({ type: 'DOOR_IS_CLOSED' })
  }

  switch (Elevator.state.doorCycle) {
    case 0:
      return <ClosedDoor />
    case 1:
      return <DoorOpening
        onAnimationEnd={(e) => { doorHasBeenOpened(e) }} />
    case 2:
      return <OpenedDoor />
    case 3:
      return <DoorClosing
        onAnimationEnd={(e) => { doorHasBeenClosed(e) }} />
    case 4:
      return <DoorReopening
        startingPosition={Elevator.state.doorPosition}
        duration={Elevator.state.doorReopenDuration}
        onAnimationEnd={(e) => { doorHasBeenOpened(e) }} />
    default:
      return <ClosedDoor />
  }
}

export default ElevatorDoor