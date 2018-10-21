import immerPlugin from '@rematch/immer';
import { init } from '@rematch/core';

import { count } from '../components/App/app.model';

const immer = immerPlugin();

const store = init({
  models: {
    count,
  },
  plugins: [immer],
  reducers: {},
});

export { store };
