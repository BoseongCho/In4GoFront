import './noticeCSS/NoticeDetail.css'
import {Navigate, NavLink, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {callGetNoticeDetailAPI} from "../../apis/NoticeAPICalls";
import {useEffect} from "react";

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
                          {detailList && detailList[2].writeDate.substring(0,11)}
                        </span></p>
                                    </a>
                                </li>

                                <li onClick={() => onClickDetailHandler(0)}>
                                    <a >
                                        <p className="title">
                                            <em className="category">공지</em>
                                            {detailList && detailList[0].title}
                                        </p>
                                        <p className="info">
                        <span className="date">
                          {detailList && detailList[0].writeDate.substring(0,11)}
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