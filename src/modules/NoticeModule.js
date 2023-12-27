import {handleActions} from "redux-actions";

const initialState = [];

export const GET_NOTICE = 'notice/GET_NOTICE';
export const POST_NOTICE_INSERT = 'notice/POST_NOTICE_INSERT'

const noticeReducer = handleActions(
    {
        [GET_NOTICE] : (state, {payload}) => {

            return payload;
        },
        [POST_NOTICE_INSERT] : (state, payload) =>{

            return payload;
        }
    },
    initialState
)

export default noticeReducer;