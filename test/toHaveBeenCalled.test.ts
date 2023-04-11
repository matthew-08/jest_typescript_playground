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

// What I'm going for here is that I should expect a function to be called in
// response to another function.  Initially, I had both the functions
// here in the same module - which didn't work.  I tried to mock the
// callback function inside the same module, but jest requires an object be passed
// The solution I found was to import the entire module *
// considering it returns an object, we can then spyOn the method from that 
// module.exports object.
// In general though, I think this is a bad test.
// The function should either be passed the callback (in which case we can 
// mock a callback)
// or
// we should test the return value of the higher order value to check 
// that it does the correct thing rather than checking that it calls the function

// This is a more sensible approach as we're testing the functions as 
// individual units and not worrying about how they interact with other functions
// Ultimatley - the tests should probablyy be split into
// higher order function:  Does it return the correct value based on a given input?
// callback function: Does it also return the correct value based on a given input?
// This way, the two functions are tested independantly.



it('should call the function with option1 if number arg is less than 10', () => {
  const mock = jest.spyOn(callBackModule, 'aCallback')
  makeNumberChoice(3)
  expect(callBackModule.aCallback).toHaveBeenCalledWith('option1')
  jest.resetAllMocks()
})

const makeNumberChoiceWithCallback = (data: number, callback: typeof callBackModule.aCallback) => {
    if(data < 10) {
      return callback('option1')
    }
    else {
      return callback('option2')
    }
}

it('should call a callback with correct arguments', () => {
  const callback = jest.fn((data: ReturnType<typeof aCallback>) => data)
  makeNumberChoiceWithCallback(3, callback)
  expect(callback).toHaveBeenCalledWith('option1')
})