import React, { useContext, useEffect } from 'react';
import { ElevatorContext } from '../Context/Elevator'

const ElevatorMotor = () => {
  const Elevator = useContext(ElevatorContext)

  useEffect(() => {
    if (Elevator.state.elevatorMotorOn) {
      Elevator.dispatch({ type: "MOVE" })
    }
  }, [Elevator.state.elevatorMotorOn, Elevator.dispatch])

  return <div />
}

export default ElevatorMotor