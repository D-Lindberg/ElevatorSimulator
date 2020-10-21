import React from 'react';
import styled from 'styled-components'
import ElevatorButton from './ElevatorButton'

const items = ['', '<|>', '>|<', '!', '?', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']


const Display = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  width: 50%;
  height: 40%;
  border: 1px solid silver;
  background-color: silver;
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-between;
 
`

const ButtonDisplayPanel = () => {
  console.log("i'm being rendered")
  return (
    <Display>
      {items.map((item, index) => (<ElevatorButton value={item} key={index} />))}
    </Display>
  )
}

export default ButtonDisplayPanel