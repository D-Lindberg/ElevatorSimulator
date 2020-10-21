import React, { useContext, useEffect } from 'react';
import { ElevatorContext } from '../Context/Elevator'

const LightSwitch = () => {
  const Elevator = useContext(ElevatorContext)

  useEffect(() => {
    Elevator.dispatch({ type: "UPDATE_LIGHTS" })
  }, [Elevator.state.direction, Elevator.dispatch])
  return <div />
}

export default LightSwitch