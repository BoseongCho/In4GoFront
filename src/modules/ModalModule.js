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

        [CLEAR_INFO] : (state, payload ) => {
     // 여기서 {payload}로 원래 값을 담아주지 않고 빈 값을 넘겨줌으로서 초기화
            return payload;
        }



    },
    initialState
)
export default modalReducer;