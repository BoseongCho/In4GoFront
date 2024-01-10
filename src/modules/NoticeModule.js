import {handleActions} from "redux-actions";

const initialState = [];

export const GET_NOTICE = 'notice/GET_NOTICE';
export const GET_NOTICE_DETAIL = 'notice/GET_NOTICE_DETAIL';


const noticeReducer = handleActions(
    {
        [GET_NOTICE] : (state, {payload}) => {

            return {noticeList : payload};
        },
        [GET_NOTICE_DETAIL] : (state, {payload}) => {

            return {noticeDetail : payload};
        },
    },

    initialState
)

export default noticeReducer;