import {GET_APPROVAL} from "../modules/ApprovalModule";
import {GET_APPROVAL_SEARCHINFO, POST_APPROVAL_INSERT} from "../modules/ModalModule";


export const callGetApprovalAPI = ({memCode, currentPage}) => {
    let requestURL;

    // if (currentPage !== undefined || currentPage !== null) {
    requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval?memCode=${memCode}&offset=${currentPage}`;
    // } else {
    //     requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/?memCode=${memCode}`;
    // } 초기 페이징 처리 이전에 사용됨

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if (result.status === 200) {
            console.log('[ApprovalAPICalls] callGetApprovalAPI RESULT : ', result);
            dispatch({type: GET_APPROVAL, payload: result.data});
        }
    }
}

export const callGetSearchInfoAPI = ({nameOrPosition, inputValue}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/searchInfo?nameOrPosition=${nameOrPosition}&inputValue=${inputValue}`;
    //requestURl길다고 밑으로 내리면 글자 못 읽어옴.
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if (result.status === 200) {
            console.log('[ApprovalAPICalls] callGetSearchApprovalAPI RESULT : ', result);
            dispatch({type: GET_APPROVAL_SEARCHINFO, payload: result.data});
        }
    }
};

export const callPostApprovalAPI = (form) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/insert`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
        console.log('insert 성공...');
        dispatch({ type: POST_APPROVAL_INSERT, payload : {} }); }
}

