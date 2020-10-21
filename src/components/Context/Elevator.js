import React, { createContext, useReducer } from 'react';

const ElevatorState = {
  buttonPushed: false,
  currentFloor: 1,
  direction: 0,
  directionSet: false,
  indicatorUp: false,
  indicatorDown: false,
  queue: [],
  queueDown: [],
  queueUp: [],
  elevatorIdle: true,
  elevatorStopped: true,
  elevatorNeedsToStop: false,
  elevatorMotorOn: false,
  doorPosition: 12,
  doorCycle: 1,
  doorTimeClosingBegan: null,
  doorReopenDuration: 2250,
  doorTimeOpened: null,
  doorOpenDuration: 3000,
}



const clone = function (array) {
  return array.slice(0);
};

const removeValues = function (array, value) {
  let newArray = clone(array);
  let stop = false;
  while (!stop) {
    let index = newArray.indexOf(value);
    if (index >= 0) {
      newArray.splice(index, 1);
    } else {
      stop = true;
    }
  }
  return newArray;
}

const sleep = (milliseconds) => {
  let initial = Date.now()
  let current = Date.now()
  while (current - initial < milliseconds) {
    current = Date.now()
  }
}

const insertNewRequest = (elevator, targetFloor) => {
  let newElevator = { ...elevator }
  if (!newElevator.queue.includes(targetFloor) && newElevator.currentFloor !== targetFloor) {
    newElevator.queue.push(targetFloor);
    newElevator.buttonPushed = true;
    newElevator.elevatorIdle = false;
    if (newElevator.direction === 0) {
      newElevator.direction = targetFloor > newElevator.currentFloor ? 1 : -1;
    }
    if (targetFloor > newElevator.currentFloor) {
      newElevator.queueUp.push(targetFloor)
      newElevator.queueUp.sort((a, b) => a - b)
    } else {
      newElevator.queueDown.push(targetFloor)
      newElevator.queueDown.sort((a, b) => b - a)
    }
  }
  return newElevator
}

const removeFloorFromQueue = (elevator, targetFloor) => {
  let newElevator = { ...elevator }
  newElevator.queue = removeValues(elevator.queue, targetFloor)
  newElevator.queueUp = removeValues(elevator.queueUp, targetFloor)
  newElevator.queueDown = removeValues(elevator.queueDown, targetFloor)
  return newElevator
}

const determineDirection = (elevator) => {
  let direction = elevator.direction, isIdle = false, newDirectionSet = true
  if (elevator.queue.length === 0) {
    direction = 0
    isIdle = true
    newDirectionSet = false
  } else if (direction === 1 && elevator.queueUp.length === 0) {
    direction = -1
  } else if (direction === -1 && elevator.queueDown.length === 0) {
    direction = 1
  }
  let newElevator = { ...elevator, direction: direction, elevatorIdle: isIdle, directionSet: newDirectionSet, buttonPushed: false }
  return newElevator
}

const adjustLights = (elevator) => {
  let up = false, down = false
  if (elevator.direction === 1) up = true
  if (elevator.direction === -1) down = true
  let newElevator = { ...elevator, indicatorUp: up, indicatorDown: down }
  return newElevator
}

const preMovement = (elevator) => {
  let newElevator = { ...elevator, elevatorStopped: false, elevatorNeedsToStop: false, elevatorMotorOn: true, directionSet: false }
  return newElevator
}

const moveFloor = (elevator) => {
  let newFloor = elevator.currentFloor + elevator.direction
  let newElevator = { ...elevator, currentFloor: newFloor, elevatorMotorOn: false }
  sleep(1000)
  return newElevator
}

const prepareToStop = (elevator) => {
  let newElevator = { ...elevator }
  newElevator.elevatorNeedsToStop = true
  newElevator.elevatorStopped = true
  newElevator.queue = removeValues(elevator.queue, elevator.currentFloor)
  newElevator.queueUp = removeValues(elevator.queueUp, elevator.currentFloor)
  newElevator.queueDown = removeValues(elevator.queueDown, elevator.currentFloor)
  return newElevator
}

const keepElevatorMoving = (elevator) => {
  let newElevator = { ...elevator, elevatorMotorOn: true }
  return newElevator
}

const openDoors = (elevator) => {
  if (!elevator.elevatorStopped) {
    return elevator
  }
  let newElevator = { ...elevator, doorCycle: 1 }
  return newElevator
}

const doorIsOpened = (elevator) => {
  let current = Date.now()
  let newElevator = { ...elevator, doorCycle: 2, doorTimeOpened: current }
  return newElevator
}

const closeDoors = (elevator) => {
  let current = Date.now()
  let newElevator = { ...elevator, doorCycle: 3, doorTimeClosingBegan: current, doorTimeOpened: null }
  return newElevator
}
const doorIsClosed = (elevator) => {
  let newElevator = { ...elevator, doorCycle: 0, doorTimeClosingBegan: null }
  return newElevator
}

const reopenDoor = (elevator) => {
  let current = Date.now()
  let duration = current - elevator.doorTimeClosingBegan
  let position = 50 - Math.floor(duration / 100)
  let newDuration = Math.floor(duration / 2)
  let newElevator = { ...elevator, doorPosition: position, doorReopenDuration: newDuration, doorCycle: 4 }
  return newElevator
}




const ElevatorReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return ElevatorState
    case 'ADD_FLOOR_PRESSED':
      let newState_01 = insertNewRequest(state, action.targetFloor)
      return { ...state, ...newState_01 }
    case 'REMOVE_FLOOR_FROM_QUEUES':
      let newState_02 = removeFloorFromQueue(state, action.targetFloor)
      return { ...state, ...newState_02 }
    case 'UPDATE_DIRECTION':
      let newState_03 = determineDirection(state)
      return { ...state, ...newState_03 }
    case 'UPDATE_LIGHTS':
      let newState_04 = adjustLights(state)
      return { ...state, ...newState_04 }
    case 'MOVE':
      let newState_05 = moveFloor(state)
      return { ...state, ...newState_05 }
    case 'OPEN_THE_DOOR':
      let newState_06 = openDoors(state)
      return { ...state, ...newState_06 }
    case 'DOOR_IS_OPENED':
      let newState_07 = doorIsOpened(state)
      return { ...state, ...newState_07 }
    case 'DOOR_IS_CLOSED':
      let newState_08 = doorIsClosed(state)
      return { ...state, ...newState_08 }
    case 'REOPEN_THE_DOOR':
      let newState_09 = reopenDoor(state)
      return { ...state, ...newState_09 }
    case 'CLOSE_THE_DOOR':
      let newState_10 = closeDoors(state)
      return { ...state, ...newState_10 }
    case 'PREPARE_TO_MOVE':
      let newState_11 = preMovement(state)
      return { ...state, ...newState_11 }
    case 'PREPARE_TO_STOP':
      let newState_12 = prepareToStop(state)
      return { ...state, ...newState_12 }
    case 'CONTINUE_MOVING':
      let newState_13 = keepElevatorMoving(state)
      return { ...state, ...newState_13 }
    default:
      return state
  }
}

export const ElevatorContext = createContext(ElevatorState)

export const ElevatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ElevatorReducer, ElevatorState);
  return (
    <ElevatorContext.Provider value={{ state, dispatch }}>
      {children}
    </ElevatorContext.Provider>
  )
}

