import { connect } from 'react-redux';
import { AppComponent } from './App';

const stateToProps = (state) => ({
  count: state.count.number,
});

const dispatchToProps = (store) => ({
  increment: () => store.count.increment(1),
  incrementAsync: () => store.count.incrementAsync(1),
});

const App = connect(
  stateToProps,
  dispatchToProps,
)(AppComponent);

export { App };
