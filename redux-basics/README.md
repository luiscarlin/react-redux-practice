## Redux

### Notes

- in React, app state changes originated from a child component have to be propagated through the parent
- Redux solves this by giving every component in the app the ability to update the app state without the extra wiring
- any component in the app  can
  1. dispatch an action
  2. action run through a reducer that performs the action and changes the app state (you can have multiple reducers)
  3. reducer places the modified state in the app store (single per app)
  4. components that are subscribed to the store will get their states updated
  5. ui updates
- doesn't need reactjs. Redux works standalone


### Get Started


- install -> `npm install --save redux`
- create store
