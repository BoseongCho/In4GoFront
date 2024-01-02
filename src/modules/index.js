import {combineReducers} from "redux";
import approvalReducer from "./ApprovalModule";
import memberReducer from "./MemberModule";
import dutyReducer from "./DutyModule";
import dutyDetailReducer from "./DutyDetailModule";
import modalReducer from "./ModalModule";
import noticeReducer from "./NoticeModule";


const rootReducer = combineReducers({
    memberReducer,
    approvalReducer,
    dutyReducer,
    dutyDetailReducer,
    modalReducer,
    noticeReducer
})

export default rootReducer;