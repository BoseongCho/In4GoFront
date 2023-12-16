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

function ApprovalBookmark() {

    const dispatch = useDispatch();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const auth = token.auth;

    const approvals = useSelector(state => state.approvalReducer);
    const approvalList = approvals.data;
    const pageInfo = approvals.pageInfo;
    const [reload, setReload] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);



    const onClickBookmarkHandler = async (docCode, bookmark, index) => {

        const form = {
            memCode: token.sub,
            "docCode": docCode
        }
        await dispatch(callDeleteBookmarkAPI({form: form}))
                .then(() => {
                    dispatch({type: RE_WRITE_PAGE, payload: {index}});
                }).then(setReload(!reload));
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
            if (token !== null) {
                dispatch(callGetApprovalAPI({
                    memCode: token.sub,
                    currentPage: currentPage,
                    pageType: 'bookmark',
                    docType : "종류"
                }));
            }
        }
        , [currentPage, reload]
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
                                            <h2 className={`${NavCSS["h3"]}`}>북마크함</h2>
                                        </div>
                                    </div>
                                    <div></div>
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
                                    </div>
                                    <div className={`${NavCSS.iLLwYh}`}>
                                        <table
                                            className={`${[NavCSS.table]} ${["table-hover"]} ${["table"]} ${"mt-3"}`}>
                                            <caption></caption>
                                            <thead className={`${NavCSS.dXdqfk}`}>
                                            <tr>
                                                <th className={`${NavCSS["bGDZWl"]}`}>문서 종류</th>
                                                <th className={`${NavCSS["bGDZWl"]}`}>북마크</th>
                                                <th className={`${NavCSS["bGDZRZ"]}`}>종류</th>
                                                <th className={`${NavCSS["iztiXy"]}`}>상신인</th>
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
                                                    a.bookmark != null &&
                                                    <tr key={a.docCode}>
                                                        <td>
                                                            {a.typeToMe}
                                                            {/*<input className={`${["form-check-input"]}`}*/}
                                                            {/*       type=" checkbox" value=""*/}
                                                            {/*       id="flexCheckDefault"/>*/}
                                                            {/*<label className={`${["form-check-label"]}`}*/}
                                                            {/*       htmlFor="flexCheckDefault"></label>*/}
                                                        </td>
                                                        <td>
                                                            <button
                                                                onClick={() => onClickBookmarkHandler(a.docCode, a.bookmark, index)}>{(a.bookmark == null ?
                                                                <PlainStar/> : <BlueStar/>)}</button>
                                                        </td>
                                                        <td>{a.docType}</td>
                                                        <td><span
                                                            className={`${["position-style"]}`}>{a.approvalMem.positionCode.positionName} </span>{a.approvalMem.memName}
                                                        </td>
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

export default ApprovalBookmark;