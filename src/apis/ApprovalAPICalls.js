import {GET_APPROVAL} from "../modules/ApprovalModule";
import {GET_APPROVAL_SEARCHINFO, POST_APPROVAL_INSERT} from "../modules/ModalModule";


export const callGetApprovalAPI = ({memCode, currentPage, pageType, docType}) => {
    let requestURL;

    // if (currentPage !== undefined || currentPage !== null) {
    requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval?memCode=${memCode}&offset=${currentPage}&pageType=${pageType}&docType=${docType}`;
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

export const callGetSearchInfoAPI = ({nameOrPosition, inputValue, memCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/searchInfo?nameOrPosition=${nameOrPosition}&inputValue=${inputValue}&memCode=${memCode}`;
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

export const callPostApprovalAPI = (form, formData) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/insert`;
    const requestURL2 = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/insertDoc`;

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
            .then(response => {
                if (formData.entries().next().value) {
                    formData.append("docCode", response.data);
                    fetch(requestURL2, {
                        method: "POST",
                        headers: {
                            "Accept": "*/*",
                        },
                        body: formData
                    })
                }
            })
        console.log('insert 성공...');
        dispatch({type: POST_APPROVAL_INSERT, payload: {}});
    }
}


export const callGetSearchApprovalAPI = ({memCode, startDate, endDate}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/search?memCode=${memCode}&startDate=${startDate}&endDate=${endDate}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(response => response.json());
        if (result.status === 200) {
            console.log('[ApprovalAPICalls] callGetSearchApprovalAPI RESULT : ', result);
            dispatch({type: GET_APPROVAL, payload: result.data});
        }
    }
}

export const callPostBookmarkAPI = ({ form }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/bookmark/post`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify({
                memCode: form.memCode,
                docCode: form.docCode,
            })
        })
            .then(response => response.json());

        console.log('[ApprovalAPICalls] callPostBookmarkAPI RESULT : ', result);

        // dispatch({ type: POST_APPROVAL_BOOKMARK, payload: result });
    }
};

export const callDeleteBookmarkAPI = ({ form }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/bookmark/delete`;
    console.log("==============callDeleteBookmarkAPI=================");
    console.log("form {}", form);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify({
                memCode: form.memCode,
                docCode: form.docCode,
            })
        })
            .then(response => response.json());

        console.log('[ApprovalAPICalls] callDeleteBookmarkAPI RESULT : ', result);

        // dispatch({ type: DELETE_APPROVAL_BOOKMARK, payload: result });
    };
}