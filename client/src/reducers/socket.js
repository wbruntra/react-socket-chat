import update from 'immutability-helper';

const initialState = {
  messages: [{handle: 'Bill', msg:'Hello world!'}],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'message':
      return update(state, {
        messages: { $push: [action.data] },
      });
    default:
      return state;
  }
};
