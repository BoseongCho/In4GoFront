import {POST_APPROVAL_INSERT} from "../modules/ModalModule";

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
        console.log('insert 성공...');
        dispatch({type: POST_APPROVAL_INSERT, payload: {}});
    }
}