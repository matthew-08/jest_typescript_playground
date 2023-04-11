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