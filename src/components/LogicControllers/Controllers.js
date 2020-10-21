import React from 'react';
import styled from 'styled-components'
import DoorAutoClose from './DoorAutoClose'
import LightSwitch from './LightSwitch';
import DoorClosedSensor from './DoorClosedSensor'
import ElevatorPreMotor from './ElevatorPreMotor';
import ElevatorMotor from './ElevatorMotor';
import FloorSensor from './FloorSensor';
import DoorOpenedSensor from './DoorOpenedSensor';
import RequestProcessor from './RequestProcessor';

const ControllerLayout = styled.div`
  position: relative;
  text-align: left;
  margin: 5px;
  padding: 0;
  border: none;
`

const Controllers = () => {
  return (
    <ControllerLayout>
      <p>{`Click on any floor number to begin.`}</p>
      <p>{`Clicking '<|>' will open or re-open the door.`}</p>
      <p>{`Depending on your machine, you may experience a delay in the buttons lighting up while the door is being animated.`}</p>
      <RequestProcessor />
      <LightSwitch />
      <DoorOpenedSensor />
      <DoorClosedSensor />
      <DoorAutoClose />
      <ElevatorPreMotor />
      <ElevatorMotor />
      <FloorSensor />
    </ControllerLayout>
  );
}

export default Controllers;
