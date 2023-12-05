import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const POST_LOGIN = 'member/POST_LOGIN';

const memberReducer = handleActions(
    {
        [POST_LOGIN] : (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default memberReducer;