import {combineReducers} from "redux";
import approvalReducer from "./ApprovalModule";
import memberReducer from "./MemberModule";
import dutyReducer from "./DutyModule";
import dutyDetailReducer from "./DutyDetailModule";


const rootReducer = combineReducers({
    memberReducer,
    approvalReducer,
    dutyReducer,
    dutyDetailReducer
})

export default rootReducer;