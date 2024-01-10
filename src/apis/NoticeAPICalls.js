import {GET_NOTICE, GET_NOTICE_DETAIL} from "../modules/NoticeModule";
import {POST_NOTICE_INSERT} from "../modules/ModalModule";

export const callPostNoticeAPI = (form, formData) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/notice/insert`;
    const requestURL2 = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/notice/insertDoc`;

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
        dispatch({type: POST_NOTICE_INSERT, payload: {}});
    }
}

export const callGetNoticeAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/notice`;

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
            dispatch({type: GET_NOTICE, payload: result.data});
        }
    }
}

export const callGetNoticeDetailAPI = ({no}) => {


    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/notice/detail?no=${no}`;

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
            dispatch({type: GET_NOTICE_DETAIL, payload: result.data});
        }
    }
}

