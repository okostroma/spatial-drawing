import createReducer from "../utils"
import { ActionTypes } from '../../actions/index'



export const initialState = {
    data: {},
};

export default createReducer(
    {
        [ActionTypes.SET_DATA]: (state, action) => ({
            ...state,
            data: action.data
        }),


    },
    initialState
);