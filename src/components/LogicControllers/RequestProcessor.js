import React, { useContext, useEffect } from 'react';
import { ElevatorContext } from '../Context/Elevator'

const RequestProcessor = () => {
  const Elevator = useContext(ElevatorContext)

  useEffect(() => {
    if (Elevator.state.doorCycle === 0 && Elevator.state.buttonPushed) {
      Elevator.dispatch({ type: "UPDATE_DIRECTION" })
    }
  }, [Elevator.state.doorCycle, Elevator.state.buttonPushed, Elevator.dispatch])
  return <div />
}

export default RequestProcessor