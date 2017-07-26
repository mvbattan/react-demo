import { stringArrayToObject } from '../utils';

export const actions = stringArrayToObject(['ACTIVATE'], '@@ITEM');

const actionCreators = {
  activateButton: id => ({ type: actions.ACTIVATE, payload: { id } })
};

export default actionCreators;
