import { aCallback } from '../src/calc'
import * as callBackModule from '../src/calc'

// .toHaveBeenCalled
// callback should only be called when given a string argument
function callOnString(callback: (data: string) => void, data: any) {
  if (typeof data === 'string') {
    callback(data);
  }
}


it('should call the callback if arg is string only', () => {
  const callback = jest.fn()
  callOnString(callback, 'string')
  expect(callback).toHaveBeenCalled()
})

it('should not be called if arg is not string', () => {
  const callback = jest.fn()
  callOnString(callback, 2)
  expect(callback).not.toHaveBeenCalled
})

it('test', () => {
  const arg = jest.fn(() => 'string')()
})



// testing toHaveBeenCalledWith
// if the user chooses a number less than 10, expect
// aCallback to have been called with option 1
// else expect with option 2


function makeNumberChoice(data: number) {
  if(data < 10) {
    return aCallback('option1')
  }
  else {
    return aCallback('option2')
  }
}

it('should call the callback with option1 if number arg is less than 10', () => {
  const mock = jest.spyOn(callBackModule, 'aCallback')
  makeNumberChoice(3)
  expect(mock).toHaveBeenCalledWith('option1')
})