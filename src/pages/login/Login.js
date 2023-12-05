import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { callLoginAPI } from '../../apis/MemberAPICalls'
import memberReducer from "../../modules/MemberModule";

function Login() {

  const navigate = useNavigate();

  /** 리덕스를 이용하기 위한 디스패처, 셀렉터 선언 */
  const dispatch = useDispatch();
  const loginMember = useSelector(state => state.memberReducer)
  /** useSelector;
:useSelect hook을 이용하여 state를 이용할 수 있다. \
반드시 인자로 state를 매개변수로 하는 함수를 콜백으로 전달해야한다. */

  /** 폼 데이터 한 번에 변경 및 State에 저장 */
  const [form, setForm] = useState({
    memCode: "",
    password: ""
  }); //form의 기본값을 {}객체로 생성

  useEffect(() => {

    if (loginMember.status === 200) {
      console.log("[Login] Login SUCCESS {}", loginMember);
      navigate("/", { replace: true });
    }

  }, [loginMember]);

  /** 로그인 상태일 시 로그인페이지로 접근 방지 */
  if (loginMember.length > 0) {
    console.log("[Login] Login is already authenticated by the server");
    return <Navigate to="/" />
  }

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };
  const onClickLoginHandler = () => {
    console.log(form);
    dispatch(callLoginAPI({
      form: form
    }));
  }

  return (
      <div className="login-wrap">
        <div className="login-html">

          <input id="tab-1" type="radio" name="tab" className="sign-in" />
          <label htmlFor="tab-1" className="tab">인사피플 로그인</label>
          <div>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">사번을 입력하세요</label>
                  <input id="user" name="memCode" type="text" className="input" onChange={onChangeHandler} />
                </div>
                <div className="group">
                  <label htmlFor="user" className="label">비밀번호를 입력하세요</label>
                  <input type="password" className="input" name="password" autoComplete='off' onChange={onChangeHandler} />
                </div>

                <div className="group">
                  <input type="submit" className="button1" value="로그인" onClick={onClickLoginHandler} />
                  <div className="passwordfind">비밀번호 찾기</div>
                </div>
                <div className="hr"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login;