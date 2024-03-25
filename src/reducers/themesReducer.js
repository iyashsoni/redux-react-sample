import { CHANGE_THEME } from '../actions/ActionTypes';

const initialState = {
    isDark: false,
}
export default function themesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME: 
        const newState = {...state};
        const isDark = state.isDark;
        newState.isDark = !isDark;
        return newState;
    default:
      return state;
    }
}
