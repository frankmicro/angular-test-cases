import { AppComponent } from "./app.component"

describe('AppComponent', () => {
  let fixture: AppComponent

  beforeEach(() => {
    fixture = new AppComponent()
  })

  it('should have title my-app-test', () => {
      expect(fixture.title).toEqual('my-app-test')
  })

})

