import {combineReducers} from "redux";
import approvalReducer from "./ApprovalModule";
import memberReducer from "./MemberModule";
import dutyReducer from "./DutyModule";
import dutyDetailReducer from "./DutyDetailModule";
import modalReducer from "./ModalModule";


const rootReducer = combineReducers({
    memberReducer,
    approvalReducer,
    dutyReducer,
    dutyDetailReducer,
    modalReducer
})

export default rootReducer;