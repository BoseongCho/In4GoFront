import {handleActions} from "redux-actions";

const initialState = [];

export const GET_APPROVAL = 'approval/GET_APPROVAL';
export const POST_APPROVAL_BOOKMARK = 'approval/POST_APPROVAL_BOOKMARK';
export const DELETE_APPROVAL_BOOKMARK = 'approval/DELETE_APPROVAL_BOOKMARK';
export const RE_WRITE_PAGE = 'approval/RE_WRITE_PAGE';
//type을 문자열 상수로 만들어 주는 것.
export const CHANGE_BOOKMARK_VALUE = 'approval/CHANGE_BOOKMARK_VALUE'

const approvalReducer = handleActions(
    {
        [GET_APPROVAL]: (state, {payload}) => {

            return payload;
        },
        [POST_APPROVAL_BOOKMARK]: (state, payload) => {

            return payload;
        },
        [DELETE_APPROVAL_BOOKMARK] : (state, payload) =>{

            return payload;
        },
        [RE_WRITE_PAGE] : (state, {payload}) =>{
            if(state.data[payload.index].bookmark == null){
                state.data[payload.index].bookmark = '1'
            } else state.data[payload.index].bookmark = null;
            return {
                ...state,
            };
        }
    },
    initialState
)

export default approvalReducer;
