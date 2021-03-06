import types from './types';

const initialState = {
	selected: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_SELECTED_LIB:
			return { ...state };
		default:
			return state;
	}
};
