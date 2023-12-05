import {combineReducers} from "redux";
import approvalReducer from "./ApprovalModule";
import memberReducer from "./MemberModule";


const rootReducer = combineReducers({
    approvalReducer,
    memberReducer
})

export default rootReducer;