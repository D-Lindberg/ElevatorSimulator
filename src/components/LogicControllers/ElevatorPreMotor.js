import React, { useContext, useEffect } from 'react';
import { ElevatorContext } from '../Context/Elevator'

const ElevatorPreMotor = () => {
  const Elevator = useContext(ElevatorContext)

  useEffect(() => {
    if (Elevator.state.directionSet) {
      Elevator.dispatch({ type: "PREPARE_TO_MOVE" })
    }
  }, [Elevator.state.directionSet, Elevator.dispatch])

  return <div />
}

export default ElevatorPreMotor