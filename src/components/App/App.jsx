import React from 'react';
import { Heading, Button } from 'grommet';

const AppComponent = props => (
  <React.Fragment>
    <Heading level={1}>Library {props.count}</Heading>
    <Button
      primary
      label="+1"
      onClick={() => {
        props.increment(1);
      }}
    />
    <Button
      primary
      label="+1 async"
      onClick={() => {
        props.incrementAsync(1);
      }}
    />
  </React.Fragment>
);

export { AppComponent };
