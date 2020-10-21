import React, { useContext, useEffect } from 'react';
import { ElevatorContext } from '../Context/Elevator'

const DoorOpenedSensor = () => {
  const Elevator = useContext(ElevatorContext)

  useEffect(() => {
    if (Elevator.state.elevatorStopped && Elevator.state.elevatorNeedsToStop) {
      Elevator.dispatch({ type: "OPEN_THE_DOOR" })
    }
  }, [Elevator.state.elevatorStopped, Elevator.state.elevatorNeedsToStop])

  return <div />
}

export default DoorOpenedSensor