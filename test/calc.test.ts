
describe('check for equality', () => {
  it.only('', () => {
    const objFactory = () => {
      return {
        prop: '1'
      }
    }
    class testObj {
      prop: string
      constructor() {
        this.prop = "1"
      }
    }
    const object1 = objFactory()
    const object2 = new testObj()
    expect(object1).toEqual(object2)
  })
})