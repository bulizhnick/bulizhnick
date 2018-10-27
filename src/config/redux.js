import immerPlugin from '@rematch/immer';
import { init } from '@rematch/core';

import { count } from '../store/count';

const immer = immerPlugin();

const store = init({
  models: {
    count,
  },
  plugins: [immer],
  reducers: {},
});

export { store };
