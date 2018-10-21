import React from 'react';
import { connect } from 'react-redux';
import { Heading, Button } from 'grommet';

let App = props => (
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

const stateToProps = state => ({
  count: state.count.number,
});

const dispatchToProps = store => ({
  increment: () => store.count.increment(1),
  incrementAsync: () => store.count.incrementAsync(1),
});

App = connect(
  stateToProps,
  dispatchToProps,
)(App);

export { App };
