import React, { useContext, useMemo } from 'react';
import { ElevatorContext } from '../Context/Elevator'
import styled from 'styled-components'

const GoingUp = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 3.6vh;
  left: 2vh;
  border-left: 3vh solid transparent;
  border-right: 3vh solid transparent;
  border-bottom: 3vh solid ${({ indicatorOn }) => indicatorOn ? '#fa0000' : '#550000'};
`
const GoingDown = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 7.2vh;
  left: 2vh;
  border-left: 3vh solid transparent;
  border-right: 3vh solid transparent;
  border-top: 3vh solid ${({ indicatorOn }) => indicatorOn ? '#fa0000' : '#550000'};
`

export const UpIndicator = () => {
  const Elevator = useContext(ElevatorContext)
  const upIndicator = Elevator.state.indicatorUp
  return useMemo(() => {
    return <GoingUp indicatorOn={upIndicator} />
  }, [upIndicator])
}

export const DownIndicator = () => {
  const Elevator = useContext(ElevatorContext)
  const downIndicator = Elevator.state.indicatorDown
  return useMemo(() => {
    return <GoingDown indicatorOn={downIndicator} />
  }, [downIndicator])
}