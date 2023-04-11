
/// mock.calls is an array of arguments that have been called on a mock
it('mock.calls', () => {
    const func = jest.fn((num: number) => '1')
    func(3)
    func(2)
    console.log(func.mock.calls)
})


// mock.results returns an array of values returned from function
// follows the shape of
// {
// type: "return" | "throw" | "incomplete"
// value: the return value
// }
test('mock results', () => {
    const isStringOrObject = jest.fn((data: string | object) => {
        if(typeof data === "string") {
            return true
        }
        else if(typeof data === 'object') {
            return true
        }
        else {
            return false
        }
    })
    isStringOrObject({})
    expect(isStringOrObject.mock.results[0].type).toBe('return')
})