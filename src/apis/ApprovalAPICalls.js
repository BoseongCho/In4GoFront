import {GET_APPROVAL} from "../modules/ApprovalModule";


export const callGetApprovalAPI = ({ memCode, currentPage }) => {
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
        if(result.status === 200) {
            console.log('[ApprovalAPICalls] callGetApprovalAPI RESULT : ', result);
            dispatch({ type: GET_APPROVAL, payload: result.data });
        }
    }
}