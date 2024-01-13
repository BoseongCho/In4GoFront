import './noticeCSS/NoticeDetail.css'
import {Navigate, NavLink, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {callGetNoticeDetailAPI} from "../../apis/NoticeAPICalls";
import {useEffect} from "react";
import ToggleArrow from "../../components/icon/ToggleArrow";

function NoticeDetail() {
    const {no} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const detailList = useSelector(state => state.noticeReducer.noticeDetail);
    const detail = detailList && detailList[1]; //본문 index [1],[2]는 다음 글 / 이전 글
    const onClickDetailHandler = (a) => {
        navigate(`/notice/detail/${detailList[a]?.noticeNo}`);
        window.location.reload();
    }

    const onClickFilesToggleHandler = () => {

    }


    useEffect(
        () => {
            dispatch(callGetNoticeDetailAPI({no: no}
            ))
        }, [no]
    )


    return (
        <div className="sc-eJDSGI jbTrWz">
            <div id="newContainer">
                <div id="wBoardWrap">
                    <div className="wboard-wrap">
                        <div className="wboard-detail-content">
                            <div className="article-top">
                                <p className="title">{detail?.title}</p>
                                <div className="info">
                                    {/*<em className="user-img" style={{backgroundImage:url(https://static.wadiz.kr/assets/icon/apple-touch-icon.png)}}></em>*/}
                                    <span
                                        className="user-info">
                                    {detail?.noticeMem.departmentCode.departmentName}부 {detail?.noticeMem.memName}
                                        <br/>{detail?.writeDate}
                                        <br/>조회수 : {detail?.readCount}
                                </span>
                                    <hr/>

                                </div>
                            </div>
                            { detail?.noticeFileList.length != 0 &&
                            <>
                            <div className="file_attachments expanded">
                                <div className="file_attachments_summary">
                                    <button onClick={onClickFilesToggle}>
                                        <ToggleArrow />
                                    </button>
                                    <span className="total_count"> 첨부
                                        <strong>1</strong>개
                                    </span>
                                    <span className="total_volume">
                                        <span className="blind">전체 용량</span>253B</span>
                                </div>
                                <div className="file_attachments_inner">
                                    <ul className="file_list">
                                        <li className="file_item"><a className="file_link"
                                                                     href="https://download.mail.naver.com/file/download/each/?attachType=normal&amp;mailSN=20234&amp;attachIndex=2&amp;virus=1&amp;domain=mail.naver.com">
                                            <div className="file_thumbnail">
                                                <em className="svg_file_txt">

                                                </em></div>
                                            <div className="file_info_area">
                                                <div className="file_title_wrap"><strong className="file_title">
                                                    <span className="text">리나 한국플랜</span>
                                                    <span className="file_extension">.txt</span></strong>
                                                    <span className="file_volume">0.2KB</span></div>
                                            </div>
                                        </a>
                                            <div className="task"><a className="button_svg_download"
                                                                     href="https://download.mail.naver.com/file/download/each/?attachType=normal&amp;mailSN=20234&amp;attachIndex=2&amp;virus=1&amp;domain=mail.naver.com"><span
                                                className="blind">다운로드</span></a>
                                                <button type="button" className="button_svg_mybox"><span
                                                    className="blind">MYBOX 저장</span></button>
                                                <button type="button" className="button_svg_delete"><span
                                                    className="blind">삭제</span></button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </>
                            }
                            <div className="inner-contents" dangerouslySetInnerHTML={{__html: detail?.content}}>
                            </div>
                            <div className="article-attached">
                                <ul>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="wboard-detail-bottom">
                        <div className="wboard-comment">
                            <p className="comment-num">공지 말머리의 다른 게시글</p>
                            <div className="wboard-list">
                                <ul>

                                    <li onClick={() => onClickDetailHandler(2)}>
                                        <a>
                                            <p className="title">
                                                <em className="category">공지</em>
                                                {detailList && detailList[2].title}
                                            </p>
                                            <p className="info">
                        <span className="date">
                          {detailList && detailList[2].writeDate.substring(0, 11)}
                        </span></p>
                                        </a>
                                    </li>

                                    <li onClick={() => onClickDetailHandler(0)}>
                                        <a>
                                            <p className="title">
                                                <em className="category">공지</em>
                                                {detailList && detailList[0].title}
                                            </p>
                                            <p className="info">
                        <span className="date">
                          {detailList && detailList[0].writeDate.substring(0, 11)}
                        </span></p>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="wboard-detail-btn-wrap">
                            <NavLink to="/notice"><span className="wz button" href="#this">목록으로 돌아가기</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoticeDetail;