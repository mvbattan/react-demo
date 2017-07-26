import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  activeId: 0
};

function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.ACTIVATE: {
      return state.merge({ activeId: action.payload.id }, { deep: true });
    }
    default: {
      return state;
    }
  }
}

export default reducer;
