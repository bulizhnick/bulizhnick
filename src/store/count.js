export const count = {
  state: {
    number: 0,
  },
  reducers: {
    increment(state, payload) {
      state.number += payload;
    },
  },
  effects: dispatch => ({
    async incrementAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};
