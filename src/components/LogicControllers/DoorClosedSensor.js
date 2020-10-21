import React, { useContext, useEffect } from 'react';
import { ElevatorContext } from '../Context/Elevator'

const DoorClosedSensor = () => {
  const Elevator = useContext(ElevatorContext)
  useEffect(() => {
    if (Elevator.state.doorCycle === 0) {
      Elevator.dispatch({ type: "UPDATE_DIRECTION" })
    }
  }, [Elevator.state.doorCycle, Elevator.dispatch])

  return <div />
}

export default DoorClosedSensor