import React, { useContext, useEffect } from 'react';
import { ElevatorContext } from '../Context/Elevator'

const FloorSensor = () => {
  const Elevator = useContext(ElevatorContext)

  useEffect(() => {
    if (Elevator.state.queue.includes(Elevator.state.currentFloor)) {
      Elevator.dispatch({ type: "PREPARE_TO_STOP" })
    } else if(!Elevator.state.elevatorIdle && !Elevator.state.elevatorNeedsToStop){
      Elevator.dispatch({type: "CONTINUE_MOVING"})
    }
  }, [Elevator.state.currentFloor, Elevator.state.queue, Elevator.dispatch, Elevator.state.doorCycle])

  return <div/>
}

export default FloorSensor