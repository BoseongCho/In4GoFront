import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from '../../../utils/tokenUtils';
import {useEffect, useState, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import NavCSS from '../taskCSS/Content.module.css'
import PlainStar from '../../../components/icon/PlainStar';
import BlueStar from '../../../components/icon/BlueStar';
import {
    callDeleteBookmarkAPI,
    callGetApprovalAPI,
    callGetSearchApprovalAPI,
    callPostBookmarkAPI
} from "../../../apis/ApprovalAPICalls";
import Pagination from "../components/Pagination";
import ApprovalModal from "../components/ApprovalModal";
import {RE_WRITE_PAGE} from "../../../modules/ApprovalModule";

function ApprovalReferred() {

    const [form, setForm] = useState({
        startDate: '',
        endDate: ''
    });
    const startDate = useRef();
    const endDate = useRef();
    // Ref를 사용하지않고 state의 startDate, endDate를 비교하게 되면, 조건문에서 새로 선택한 날짜가 적용되지 않고,
    // 캘린더 자체 선택값을 value로 주게되면 state값은 변하지 않지만, value값이 바뀌는 것을 막을 수 없다.
    // 또한 value는 state로 줘야 값이 변경되었을 때 re-rendering이 일어나기 때문에 ref를 사용해야함.
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const auth = token.auth;

    const approvals = useSelector(state => state.approvalReducer);
    const approvalList = approvals.data || approvals;
    const pageInfo = approvals.pageInfo;

    const [currentPage, setCurrentPage] = useState(1);

    const onChangeCalendarHandler = (e) => {
        // 클릭하는 순간 ref의 값은 변경되어 조건문에 들어가지만,
        // state의 값은 이후에 변하기 때문에 value값이 변하지 않는다.
        // 반면 state의 값을 주지 않고 ref의 값만으로 한다면, 조건에 상관없이 값이 변한다.
        if (endDate.current.value !== '' && endDate.current.value < startDate.current.value) {
            alert('종료일이 더 작을 수 없습니다.')
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        }
    };

    const onClickSearchHandler = () => {
        if (startDate.current.value !== '' && endDate.current.value !== '') {
            dispatch(callGetSearchApprovalAPI({
                memCode: token.sub,
                startDate: startDate.current.value,
                endDate: endDate.current.value
            }));
        } else {
            alert('검색 날짜를 선택해주세요.');
        }
    }

    const onClickBookmarkHandler = async (docCode, bookmark, index) => {

        const form = {
            memCode: token.sub,
            "docCode": docCode
        }

        bookmark == null ? await dispatch(callPostBookmarkAPI({form: form}))
                .then(() => {
                    dispatch({type : RE_WRITE_PAGE, payload : {index}});
                    //{index}를 보내면, index라는 객체에 index값을 담아서 넘겨주는 것이고, index만 넘겨주면 숫자만 넘어감
                })
            : await dispatch(callDeleteBookmarkAPI({form: form}))
                .then(() => {
                    dispatch({type : RE_WRITE_PAGE, payload : {index}});
                });
    }

    const getApprovalStatusClassName = (status) => {
        if (status === 'W') {
            return `${NavCSS["badge"]} ${NavCSS["badge-yellow"]}`;
        } else if (status === 'Y') {
            return `${NavCSS["badge"]} ${NavCSS["badge-green"]}`;
        } else {
            return `${NavCSS["badge"]} ${NavCSS["badge-red"]}`;
        }
    }

    useEffect(
        () => {
            console.log('token', token.sub);
            console.log('auth', auth);
            console.log();
            if (token !== null) {
                dispatch(callGetApprovalAPI({
                    memCode: token.sub,
                    currentPage: currentPage,
                    pageType : "referred"
                }));
            }
        }
        , [currentPage]
    );

    return (
        // <>
        //     {!auth.includes('ROLE_PROGRAM1') ? <> {console.log("권한이없어요")}
        //             <div style={{paddingLeft: 500}}>권한이 없어유</div>
        //         </>
        //         :
        <>
            {console.log("권한이 있어요.")}
            <div></div>
            <div>
                <div className={NavCSS.wrap}>
                    <div></div>
                    <div className={NavCSS.wrapper}>
                        <div className={NavCSS.ct}>
                            <div className={NavCSS.container}>

                                <div>
                                    <div className={`${NavCSS["d-flex-space"]} ${NavCSS["bread-title"]}`}>
                                        <div className={`${NavCSS["title"]}`}>
                                            <span className={`${NavCSS["breadcrumb"]}`}>결재 /</span>
                                            <h2 className={`${NavCSS["h3"]}`}>참조된 문서</h2>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div className={`${NavCSS["commute-manage"]}`}>
                                        <div className={`${NavCSS["sc-djTcra"]} ${NavCSS["laubHy"]}`}>
                                            <div className={`${NavCSS["form-group"]}`}>
                                                <span className={`${NavCSS["control-label"]}`}>시작일</span>
                                                <div className={`${NavCSS["position-relative"]}`}>
                                                    <input value={form.startDate} ref={startDate} type="date"
                                                           name="startDate"
                                                           className={`${NavCSS["sc-fWHiwC"]} ${NavCSS["jtuvXR"]} ${NavCSS["form-control"]} ${NavCSS["input-datepicker"]}`}
                                                           placeholder="시작일"
                                                           onChange={onChangeCalendarHandler}/>
                                                </div>
                                            </div>
                                            <h1>-</h1>
                                            <div className={`${NavCSS["form-group"]}`}>
                                                <span className={`${NavCSS["control-label"]}`}>종료일</span>
                                                <div className={`${NavCSS["position-relative"]}`}>
                                                    <input value={form.endDate} ref={endDate} type="date"
                                                           name="endDate"
                                                           className={`${NavCSS["sc-fWHiwC"]} ${NavCSS["jtuvXR"]} ${NavCSS["form-control"]} ${NavCSS["input-datepicker"]}`}
                                                           placeholder="시작일"
                                                           onChange={onChangeCalendarHandler}/>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary mt-3"
                                                    onClick={onClickSearchHandler}>조회
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${NavCSS["d-flex-space"]}`}>
                                        {/* <div className={`${NavCSS["d-flex-space"]}`}>
                                            <select className={`${["form-select"]} ${["form-select-sm"]}`} aria-label=".form-select-sm example">
                                                <option defaultValue>전체</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div> */}
                                        <div></div>
                                        <div className={`${NavCSS["d-flex-space"]}`}>
                                            <div className={`${["display-flex"]}`}>
                                                <button className={`${["btn"]} ${["btn-primary"]}`}
                                                        style={{alignSelf: "self-start"}} data-bs-toggle="modal"
                                                        data-bs-target="#staticBackdrop">
                                                    결재 작성하기
                                                </button>
                                                <ApprovalModal/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${NavCSS.iLLwYh}`}>
                                        <table
                                            className={`${[NavCSS.table]} ${["table-hover"]} ${["table"]} ${"mt-3"}`}>
                                            <caption></caption>
                                            <thead className={`${NavCSS.dXdqfk}`}>
                                            <tr>
                                                <th className={`${NavCSS.bGDZWn}`}>
                                                    <div className={`${NavCSS.formCheck}`}>
                                                        <input className={`${NavCSS.formCheckInput}`}
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <label className={`${NavCSS.formCheckLabel}`}
                                                               htmlFor="flexCheckDefault">
                                                        </label>
                                                    </div>
                                                </th>

                                                <th className={`${NavCSS["bGDZWl"]}`}>북마크</th>
                                                <th className={`${NavCSS["bGDZRZ"]}`}>종류</th>
                                                <th className={`${NavCSS["iztiXy"]}`}>문서번호</th>
                                                <th className={`${NavCSS["iztiWO"]}`}>제목</th>
                                                <th className={`${NavCSS["bGDZRX"]}`}>상태</th>
                                                <th className={`${NavCSS["bGDZRW"]}`}>첨부파일</th>
                                                <th className={`${NavCSS["bGDZRX"]}`}>결재의견</th>
                                                <th className={`${NavCSS["iztiWO"]}`}>작성일</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                Array.isArray(approvalList) && approvalList.map((a, index) => (
                                                    <tr key={a.docCode}>
                                                        <td>
                                                            <input className={`${["form-check-input"]}`}
                                                                   type="checkbox" value=""
                                                                   id="flexCheckDefault"/>
                                                            <label className={`${["form-check-label"]}`}
                                                                   htmlFor="flexCheckDefault"></label>
                                                        </td>
                                                        <td>
                                                            <button
                                                                onClick={() => onClickBookmarkHandler(a.docCode, a.bookmark, index)}>{(a.bookmark == null ?
                                                                <PlainStar/> : <BlueStar/>)}</button>
                                                        </td>
                                                        <td>{a.docType}</td>
                                                        <td>{a.docCode}</td>
                                                        <td>{a.title}</td>
                                                        <td><span
                                                            className={getApprovalStatusClassName(a.isApproved)}>{a.isApproved == 'W' ? '진행' : a.isApproved == 'Y' ? '승인' : '반려'}</span>
                                                        </td>
                                                        <td>{a.docAttachmentList.length}</td>
                                                        <td>0개</td>
                                                        <td>{a.reportDate.substring(0, 16).replace('T', ' ')}</td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                        {Array.isArray(approvals.data) && <Pagination currentPage={currentPage}
                                                                                      setCurrentPage={setCurrentPage}
                                                                                      pageInfo={pageInfo}/>}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ApprovalReferred;