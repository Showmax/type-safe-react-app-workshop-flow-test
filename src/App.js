// @flow
import React from 'react';

type Props = {
  name: string,
}

const TestComponent = ({ name }: Props) => (
  <div>{name}</div>
);

const App = () => (
  <div>
    <TestComponent name={2} />
  </div>
);

export default App;
