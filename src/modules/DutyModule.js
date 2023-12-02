import { createActions, handleActions } from "redux-actions";

/* 초기 값*/
const initialState = [];

/* 액션 */
export const GET_WORKSET = "duty/GET_WORKSET";
export const PUT_WORKSET = "duty/PUT_WORKSET";
export const GET_SCHEDULEMANAGE = "duty/GET_SCHEDULEMANAGE";
export const PUT_SCHEDULEMANAGE = "duty/PUT_SCHEDULEMANAGE";

const actions = createActions({
  [GET_WORKSET]: () => {},
  [PUT_WORKSET]: () => {},
  [GET_SCHEDULEMANAGE]: () => {},
  [PUT_SCHEDULEMANAGE]: () => {},
});

/* 리듀서 */
const dutyReducer = handleActions(
  {
    [GET_WORKSET]: (state, { payload }) => {
      return payload;
    },
    [PUT_WORKSET]: (state, { payload }) => {
      return payload;
    },
    [GET_SCHEDULEMANAGE]: (state, { payload }) => {
      return payload;
    },
    [PUT_SCHEDULEMANAGE]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default dutyReducer;
