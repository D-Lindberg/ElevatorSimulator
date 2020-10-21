import React, { useContext, useEffect } from 'react';
import { ElevatorContext } from '../Context/Elevator'

const DoorAutoClose = () => {
  const Elevator = useContext(ElevatorContext)

  useEffect(() => {
    if (Elevator.state.doorCycle === 2) {
      let initial = Elevator.state.doorTimeOpened
      let duration = Elevator.state.doorOpenDuration
      let current = Date.now()
      while (current - initial < duration) {
        current = Date.now()
      }
      Elevator.dispatch({ type: "CLOSE_THE_DOOR" })
    }
  }, [Elevator.state.doorCycle, Elevator.state.doorTimeOpened, Elevator.state.doorOpenDuration, Elevator.dispatch])

  return <div />
}

export default DoorAutoClose