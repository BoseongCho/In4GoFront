import {combineReducers} from "redux";
import approvalReducer from "./ApprovalModule";
import dutyReducer from "./DutyModule";
import dutyDetailReducer from "./DutyDetailModule";


const rootReducer = combineReducers({
    approvalReducer,
    dutyReducer,
    dutyDetailReducer
})

export default rootReducer;