## Redux

### Notes

- in React, app state changes originated from a child component have to be propagated through the parent
- Redux solves this by giving every component in the app the ability to update the app state without the extra wiring
- any component in the app  can -> dispatch an action -> action run through a reducer that performs the action and changes the app state -> 
