import './noticeCSS/NoticeDetail.css'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {callGetNoticeDetailAPI} from "../../apis/NoticeAPICalls";
import {useEffect} from "react";

function NoticeDetail() {
    const {no} = useParams();
    const dispatch = useDispatch();


    useEffect(
        () => {
            dispatch(callGetNoticeDetailAPI({
                no: no}
            ))
        }
    )

    return (
        <div className="sc-eJDSGI jbTrWz">
        <div id="newContainer">
            <div id="wBoardWrap">
                <div className="wboard-wrap">
                    <div className="wboard-detail-content">
                        <div className="article-top">
                            <p className="title">[서비스 안내] 카카오 장애로 인한 일부 서비스 장애 안내 (2022.10.15)</p>
                            <div className="info">
                                {/*<em className="user-img" style={{backgroundImage:url(https://static.wadiz.kr/assets/icon/apple-touch-icon.png)}}></em>*/}
                                <span className="user-info">김민수
    						<br/>2022.10.15</span>
                                <hr/>

                            </div>
                        </div>
                        <div className="inner-contents">
                            <p>안녕하세요.</p><p>사장 김민수 입니다.&nbsp;</p><p><br/></p><p>현재(2022.10.15) &nbsp;<u>카카오 장애로 인해 와디즈 서비스 일부 이용이 원활하지 않은 상황</u>이니, 서비스 이용에 참고 부탁드립니다. &nbsp;&nbsp;</p><p><strong>[이용 불가 서비스]</strong></p><ul><li>카카오 로그인&nbsp;</li><li>펀딩/스토어 신규 주소지 입력 (우편번호 검색)&nbsp;</li><li>카카오톡 자동 알림&nbsp;</li></ul><p><br/></p><p>카카오 복구 즉시 정상 이용 가능할 예정이니, 잠시만 기다려주세요.</p><p>와디즈에서도 지속적으로 모니터링하며, 빠르게 대응할 수 있도록 하겠습니다.&nbsp;</p><p><br/></p><p>불편을 드려 죄송합니다.&nbsp;</p><p>와디즈 드림</p>
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

                                <li>
                                    <a href="/web/wboard/newsBoardDetail/8610?headWordId=&amp;cPage=1">
                                        <p className="title">
                                            <em className="category">공지</em>
                                            [약관/정책] 개인정보처리방침 개정 안내 [와디즈]
                                        </p>
                                        <p className="info">
                        <span className="date">
                          와디즈
                          2023.11.13
                        </span></p>
                                    </a>
                                </li>

                                <li>
                                    <a href="/web/wboard/newsBoardDetail/8591?headWordId=&amp;cPage=1">
                                        <p className="title">
                                            <em className="category">공지</em>
                                            [서비스 안내] 결제일 및 환불 정책 개편 안내
                                        </p>
                                        <p class="info">
                        <span class="date">
                          와디즈
                          2023.10.18
                        </span></p>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="wboard-detail-btn-wrap">
                        <a class="wz button" href="#this" onClick="moveList()">목록으로 돌아가기</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
);
}

export default NoticeDetail;