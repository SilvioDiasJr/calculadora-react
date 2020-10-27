import React from 'react'
import Button from '../components/Button'
import Display from '../components/Display'

import './Calculator.css'

const Calculator = () => {

  function clearMemory() {
    console.log('limpar')
  }

  function setOperation(operation) {
    console.log(operation)
  }

  function addDigit(n) {
    console.log(n)
  }

  return (
    <div className="calculator">
      <Display value={100} />
      <Button label='AC' click={_ => clearMemory()} triple/>
      <Button label='/' click={_ => setOperation('/')} operation/>
      <Button label='7' click={_ => addDigit('7')}/>
      <Button label='8' click={_ => addDigit('8')}/>
      <Button label='9' click={_ => addDigit('9')}/>
      <Button label='*' click={_ => setOperation('*')} operation/>
      <Button label='4' click={_ => addDigit('4')}/>
      <Button label='5' click={_ => addDigit('5')}/>
      <Button label='6' click={_ => addDigit('6')}/>
      <Button label='-' click={_ => setOperation('-')} operation/>
      <Button label='1' click={_ => addDigit('1')}/>
      <Button label='2' click={_ => addDigit('2')}/>
      <Button label='3' click={_ => addDigit('3')}/>
      <Button label='+' click={_ => setOperation('+')} operation/>
      <Button label='0' click={_ => addDigit('0')} double/>
      <Button label='.' click={_ => addDigit('.')}/>
      <Button label='=' click={_ => setOperation('=')} operation/>
    </div>
  )
}

export default Calculator