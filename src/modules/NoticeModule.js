import {handleActions} from "redux-actions";

const initialState = [];

export const GET_NOTICE = 'notice/GET_NOTICE';

const noticeReducer = handleActions(
    {
        [GET_NOTICE] : (state, {payload}) => {

            return payload;
        },
    },
    initialState
)

export default noticeReducer;