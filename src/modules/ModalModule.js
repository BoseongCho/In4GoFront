import {createActions, handleActions} from "redux-actions";
import {RE_WRITE_PAGE} from "./ApprovalModule";

const initialState = [];

export const CLEAR_INFO = 'modal/CLEAR_INFO';
export const GET_APPROVAL_SEARCHINFO = 'modal/GET_APPROVAL_SEARCHINFO';
export const POST_APPROVAL_INSERT = 'modal/POST_APPROVAL_INSERT';
export const RE_WRITE_MODAL = 'modal/RE_WRITE';
export const POST_NOTICE_INSERT = 'modal/POST_NOTICE_INSERT'


const modalReducer = handleActions(
    {

        [GET_APPROVAL_SEARCHINFO] : (state, { payload } ) => {
            return payload;
        },

        [CLEAR_INFO] : (state, payload ) => {
     // 여기서 {payload}로 원래 값을 담아주지 않고 빈 값을 넘겨줌으로서 초기화
            return payload;
        },
        [POST_APPROVAL_INSERT] : (state, { payload }) => {
            return payload;
        },
        [RE_WRITE_MODAL] : (state, payload) =>{
            return payload
        },
        [POST_NOTICE_INSERT] : (state, payload) =>{
            return payload;
        }
    },
    initialState
)
export default modalReducer;