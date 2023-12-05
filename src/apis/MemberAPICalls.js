import {POST_LOGIN} from "../modules/MemberModule";

export const callLoginAPI = ({form}) => {
    const requestURL = `http://localhost:7777/auth/login`;
    // ${process.env.REACT_APP_RESTAPI_IP}
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
                //주소 모두 허용
            },
            body: JSON.stringify({
                memCode : form.memCode,
                password : form.password
            })
        })
            .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        /** {status: 200, message: '로그인 성공', data: {…}}
         data : {grantType: 'Bearer', memberName: '관리자', accessToken: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiO…71hVtA7T90G57iMvYWJvm7kvF3Zqr5lufvtUfExwu1mACqmHg', accessTokenExpiresIn: 1678368430164}
         message : "로그인 성공"
         status : 200
         [[Prototype]] : Object */

        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);
        }
        dispatch({ type : POST_LOGIN, payload: result});
    };
}

export const callLogoutAPI = () => {

    return async (dispatch, getState) => {

        dispatch({ type: POST_LOGIN, payload: '' });
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS ');
    }
}