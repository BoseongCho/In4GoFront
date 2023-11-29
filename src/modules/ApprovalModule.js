import {handleActions} from "redux-actions";

const initialState = [];

export const GET_APPROVAL = 'approval/GET_APPROVAL';
//type을 문자열 상수로 만들어 주는 것.

const approvalReducer = handleActions(
    {
        [GET_APPROVAL]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
)

export default approvalReducer;
