import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement } from './action/index';
import { reset } from './action/index';
import { increment } from './action/index';
import Ccount from './Ccount';

import { Button, Stack } from 'react-bootstrap';






export const UserContext = React.createContext()

const App = () => {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        Redux
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <UserContext.Provider value={counter}>
        <Ccount />
      </UserContext.Provider><br />

      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
    </div>
  )
}

export default App
