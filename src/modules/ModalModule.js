import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const CLEAR_INFO = 'modal/CLEAR_INFO';
export const GET_APPROVAL_SEARCHINFO = 'modal/GET_APPROVAL_SEARCHINFO';

const actions = createActions({
})

const modalReducer = handleActions(
    {

        [GET_APPROVAL_SEARCHINFO] : (state, { payload } ) => {

            return payload;
        },

        [CLEAR_INFO] : (state, { payload }) => {

            return payload;
        }



    },
    initialState
)
export default modalReducer;